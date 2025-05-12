import { Dispatch, SetStateAction, useCallback } from "react";
import { Task } from "./tasks/types";
import { runTests } from "./runTests";

interface UseCodeCheckParams {
  task: Task | null;
  code: string;
  setResults: Dispatch<SetStateAction<(boolean | null)[]>>;
  setCompileError: Dispatch<SetStateAction<string | null>>;
}

export const useCodeCheck = ({
  task,
  code,
  setResults,
  setCompileError,
}: UseCodeCheckParams) => {
  return useCallback(() => {
    if (!task) return;

    const raw = runTests(code, task.functionName, task.testCases);

    if ("compileError" in raw) {
      setCompileError(raw.compileError);
      setResults([]);
      return;
    }

    setCompileError(null);
    const testResults = raw.map((r) => ("passed" in r ? r.passed : null));
    setResults(testResults);

    const passedCount = testResults.filter((r) => r === true).length;
    const percent = Math.round((passedCount / testResults.length) * 100);

    // if (percent === 100) {
    //   saveSolvedTask({
    //     id: task.id,
    //     title: task.title,
    //     level: task.level,
    //   });
    // }
  }, [task, code, setResults, setCompileError]);
};
