# eval-llm

A comprehensive LLM evaluation CLI tool for testing language models with Traditional Chinese prompts across multiple domains including summarization, creative writing, translation, RAG, sentiment analysis, and business correspondence.

## Features

- **Multi-domain Testing**: 8 specialized test prompts covering various Traditional Chinese language tasks
- **Ollama Integration**: Direct integration with local Ollama server
- **Progress Tracking**: Real-time evaluation progress with success/failure indicators
- **Bilingual Reports**: Generates detailed markdown reports in Traditional Chinese and English
- **Modular Architecture**: Clean separation of test prompts, types, and evaluation logic

## Quick Start

### Prerequisites
- Local Ollama server running on `http://127.0.0.1:11434`
- Target models pulled in Ollama (e.g., `ollama pull llama3.1`)

### Installation
```bash
bun install
```

### Usage
```bash
# Run evaluation for a specific model
bun run index.ts <model_id> basic-llm-evaluation-v1

# Examples
bun run index.ts llama3.1 basic-llm-evaluation-v1
bun run index.ts qwen3:30b-a3b-instruct-2507-q4_K_M basic-llm-evaluation-v1
```

## Test Categories

- **繁體中文摘要能力** - Traditional Chinese summarization
- **繁體中文創意寫作** - Creative writing with cultural themes
- **繁體中文翻譯** - English to Traditional Chinese translation
- **繁體中文檢索增強生成問答** - RAG (document-based Q&A)
- **繁體中文情感分析** - Sentiment analysis with explanations
- **繁體中文商務寫作** - Business correspondence generation
- **繁體中文文化內容創作** - Cultural content about festivals
- **繁體中文學術寫作** - Academic abstract generation

## Output

Evaluation results are saved as markdown reports in the `result/` directory:
- Format: `result_<model_id>_<suite_name>_<date>.md`
- Bilingual (Traditional Chinese/English)
- Includes performance metrics and detailed responses

## Architecture

```
src/
├── index.ts           # Core evaluation engine
├── types/
│   └── test.types.ts  # TypeScript definitions
└── prompts/
    ├── index.ts       # Test suite exports
    └── testSuite.ts   # Test prompt definitions
```

## Dependencies

- **ollama** (v0.5.16) - Ollama API client
- **@types/bun** - Bun TypeScript definitions

This project was created using `bun init` in bun v1.2.18. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
