// Core test prompt structure
type TestPrompt = {
  name: string;
  purpose: string;
  prompt: string;
  category?: string;
  tags?: string[];
};

// Test execution structure
type TestExecution = {
  id: string;
  modelName: string;
  testPromptName: string;
  datetime: Date;
  prompt: string;
  response: string;
  durationMs: number;
  success: boolean;
  error?: string;
  metadata?: Record<string, any>;
};

// Test suite structure
type TestSuite = {
  name: string;
  description: string;
  prompts: TestPrompt[];
  createdAt: Date;
  updatedAt: Date;
};

// Test run configuration
type TestRunConfig = {
  modelNames: string[];
  prompts: TestPrompt[];
  parallel: boolean;
  maxConcurrency?: number;
  timeoutMs?: number;
};

// Result collection
type TestResultCollection = {
  suiteName: string;
  modelName: string;
  executions: TestExecution[];
  summary: {
    total: number;
    successful: number;
    failed: number;
    averageDurationMs: number;
  };
};

export type {
  TestPrompt,
  TestExecution,
  TestSuite,
  TestRunConfig,
  TestResultCollection
};