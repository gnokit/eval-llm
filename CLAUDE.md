# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **LLM evaluation CLI tool** that tests language models using a standardized suite of prompts in Traditional Chinese. It evaluates model performance across various tasks including summarization, creative writing, translation, RAG (Retrieval-Augmented Generation), sentiment analysis, and business writing.

## Architecture

The project follows a modular architecture:

- **`index.ts`** - Main entry point that delegates to src/index.ts
- **`src/index.ts`** - Core evaluation engine with CLI argument parsing, Ollama integration, and result generation
- **`src/prompts/`** - Test prompt definitions and test suite configuration
- **`src/types/`** - TypeScript type definitions for test structures
- **`result/`** - Generated markdown reports from evaluation runs

## Key Components

### Test Suite Structure (`src/types/test.types.ts`)
- `TestPrompt` - Individual test cases with name, purpose, prompt content, category, and tags
- `TestSuite` - Collection of test prompts for systematic evaluation
- `TestExecution` - Results from individual test runs
- `TestResultCollection` - Aggregated results with summary statistics

### Evaluation Engine (`src/index.ts`)
- **CLI Interface**: Takes model ID and test suite name as arguments
- **Ollama Integration**: Uses `ollama` package to interact with local Ollama server
- **Progress Tracking**: Real-time progress updates with success/failure indicators
- **Report Generation**: Creates bilingual (Traditional Chinese/English) markdown reports

### Test Content (`src/prompts/testSuite.ts`)
Contains 8 specialized test prompts covering:
- Traditional Chinese summarization
- Creative writing with cultural integration
- English-to-Traditional Chinese translation
- RAG (document-based Q&A)
- Sentiment analysis
- Business correspondence
- Cultural content creation (festivals)
- Academic writing

## Commands

### Development
```bash
# Install dependencies
bun install

# Run evaluation for a specific model
bun run index.ts <model_id> basic-llm-evaluation-v1

# Example usage
bun run index.ts llama3.1 basic-llm-evaluation-v1
bun run index.ts qwen3:30b-a3b-instruct-2507-q4_K_M basic-llm-evaluation-v1
```

### Available Test Suites
- `basic-llm-evaluation-v1` - The only currently available test suite

## Dependencies
- **ollama** (v0.5.16) - Client library for Ollama API
- **@types/bun** - Bun TypeScript definitions

## Output
Evaluation results are saved to markdown files in the `result/` directory with naming pattern:
`result_<model_id>_<suite_name>_<date>.md`

## Requirements
- Local Ollama server running on http://127.0.0.1:11434
- Models must be pulled in Ollama before testing
- Traditional Chinese font support for proper text rendering