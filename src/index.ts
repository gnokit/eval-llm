import { testSuite } from './prompts';
import type { TestPrompt } from './types/test.types';
import { Ollama } from 'ollama';

async function runEvaluation(modelId: string, suiteName: string) {
  console.log(`Starting evaluation for model: ${modelId}`);
  console.log(`Test suite: ${suiteName}`);
  console.log(`Number of prompts: ${testSuite.prompts.length}`);
  
  const results = [];
  const startTime = Date.now();
  
  for (let i = 0; i < testSuite.prompts.length; i++) {
    const prompt = testSuite.prompts[i];
    if (!prompt) continue;
    
    console.log(`\n[${i + 1}/${testSuite.prompts.length}] Running: ${prompt.name}`);
    
    const result = await executePrompt(modelId, prompt);
    results.push(result);
    
    if (result.success) {
      console.log(`✓ Completed in ${result.durationMs}ms`);
    } else {
      console.log(`✗ Failed: ${result.error}`);
    }
  }
  
  const totalTime = Date.now() - startTime;
  const outputPath = await generateMarkdownReport(modelId, suiteName, results, totalTime);
  
  console.log(`\nEvaluation completed!`);
  console.log(`Total time: ${totalTime}ms`);
  console.log(`Results saved to: ${outputPath}`);
}

async function executePrompt(modelId: string, prompt: TestPrompt) {
  const startTime = Date.now();
  
  try {
    const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });
    
    const response = await ollama.chat({
      model: modelId,
      messages: [{ role: 'user', content: prompt.prompt }],
    });
    
    const durationMs = Date.now() - startTime;
    
    return {
      prompt,
      response: response.message.content,
      durationMs,
      success: true,
    };
    
  } catch (error) {
    const durationMs = Date.now() - startTime;
    return {
      prompt,
      response: '',
      durationMs,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0] || '';
}

async function generateMarkdownReport(
  modelId: string,
  suiteName: string,
  results: any[],
  totalTime: number
): Promise<string> {
  const dateStr = formatDate(new Date());
  const filename = `result_${modelId}_${suiteName}_${dateStr}.md`;
  
  let content = `# LLM 評估報告 / LLM Evaluation Report

**模型 / Model:** ${modelId}  
**測試套件 / Test Suite:** ${suiteName}  
**日期 / Date:** ${new Date().toISOString()}  
**總執行時間 / Total Execution Time:** ${totalTime}ms  
**總提示數 / Total Prompts:** ${results.length}

## 摘要 / Summary

- **成功 / Successful:** ${results.filter((r: any) => r.success).length}
- **失敗 / Failed:** ${results.filter((r: any) => !r.success).length}
- **平均回應時間 / Average Response Time:** ${Math.round(results.reduce((sum: number, r: any) => sum + r.durationMs, 0) / results.length)}ms

---

`;

  for (const result of results) {
    content += `## ${result.prompt.name}

### 中繼資料 / Metadata
- **目的 / Purpose:** ${result.prompt.purpose}
- **類別 / Category:** ${result.prompt.category || '無 / N/A'}
- **標籤 / Tags:** ${(result.prompt.tags || []).join(', ')}
- **執行時間 / Execution Time:** ${result.durationMs}ms
- **狀態 / Status:** ${result.success ? '✅ 成功 / Success' : '❌ 失敗 / Failed'}

### 提示 / Prompt
\`\`\`
${result.prompt.prompt}
\`\`\`

### 回應 / Response
\`\`\`
${result.response || '無回應產生 / No response generated'}
\`\`\`
`;

    if (result.error) {
      content += `### 錯誤 / Error
\`\`\`
${result.error}
\`\`\`
`;
    }
    
    content += '\n---\n\n';
  }
  
  await Bun.write(filename, content);
  return filename;
}

// CLI argument parsing
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: bun run index.ts <model_id> <test_suite_name>');
  console.error('Example: bun run index.ts llama3.1 basic-llm-evaluation-v1');
  process.exit(1);
}

const [modelId, suiteName] = args;

if (!modelId || !suiteName) {
  console.error('Both model_id and test_suite_name are required');
  process.exit(1);
}

// Validate suite name - only testSuite is available
if (suiteName !== 'basic-llm-evaluation-v1') {
  console.error('Available test suite: basic-llm-evaluation-v1');
  process.exit(1);
}

runEvaluation(modelId, suiteName).catch(console.error);