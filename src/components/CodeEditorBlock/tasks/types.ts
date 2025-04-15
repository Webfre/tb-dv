import { Level } from "../data";

export interface TestCase {
  input: any[]; // входные параметры
  expected: any; // ожидаемый результат (для отображения)
  testCode: string; // строка-код для проверки результата, например: "return result === 42;"
}

export interface Task {
  id: string; // имя функции, будет использоваться как имя при вызове
  title: string; // название задачи
  description: string; // текстовое описание
  initialCode: string; // шаблон функции для пользователя
  functionName: string;
  testCases: TestCase[]; // список тестов
  level: Level;
}
