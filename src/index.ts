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
  
  let content = `# LLM Evaluation Report

**Model:** ${modelId}  
**Test Suite:** ${suiteName}  
**Date:** ${new Date().toISOString()}  
**Total Execution Time:** ${totalTime}ms  
**Total Prompts:** ${results.length}

## Summary

- **Successful:** ${results.filter((r: any) => r.success).length}
- **Failed:** ${results.filter((r: any) => !r.success).length}
- **Average Response Time:** ${Math.round(results.reduce((sum: number, r: any) => sum + r.durationMs, 0) / results.length)}ms

---

`;

  for (const result of results) {
    content += `## ${result.prompt.name}

### Metadata
- **Purpose:** ${result.prompt.purpose}
- **Category:** ${result.prompt.category || 'N/A'}
- **Tags:** ${(result.prompt.tags || []).join(', ')}
- **Execution Time:** ${result.durationMs}ms
- **Status:** ${result.success ? '✅ Success' : '❌ Failed'}

### Prompt
\`\`\`
${result.prompt.prompt}
\`\`\`

### Response
\`\`\`
${result.response || 'No response generated'}
\`\`\`
`;

    if (result.error) {
      content += `### Error
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