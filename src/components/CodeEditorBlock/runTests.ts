import { TestCase } from "./tasks/types";

type TestResult = { passed: boolean } | { error: string };

export const runTests = (
  code: string,
  functionName: string,
  testCases: TestCase[]
): TestResult[] | { compileError: string } => {
  try {
    const userFunc = new Function(`${code}; return ${functionName};`)();

    return testCases.map(({ input, testCode }) => {
      try {
        const result = userFunc(...input);
        const passed = new Function("result", testCode)(result);
        return { passed };
      } catch (err) {
        return { error: (err as Error).message };
      }
    });
  } catch (err) {
    return { compileError: (err as Error).message };
  }
};
