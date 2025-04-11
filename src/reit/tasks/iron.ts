import { Task } from "./types";

export const ironTasks: Task[] = [
  {
    id: "sum_two_numbers",
    title: "Сумма двух чисел",
    functionName: "sum",
    level: "Iron",
    description:
      "Напишите функцию, которая принимает два числа и возвращает их сумму.",
    initialCode: "function sum(a, b) {\n  // ваш код здесь\n}",
    testCases: [
      { input: [1, 2], expected: 3, testCode: "return result === 3;" },
      { input: [5, 5], expected: 10, testCode: "return result === 10;" },
      { input: [-1, 1], expected: 0, testCode: "return result === 0;" },
      { input: [100, 200], expected: 300, testCode: "return result === 300;" },
    ],
  },
];
