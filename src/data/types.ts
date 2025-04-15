export interface Question {
  id: number;
  name: string;
  variants: string[];
  correct: number[];
}

export interface TestData {
  id: number;
  name: string;
  ques: Question[];
  category: string;
}

export interface TestDataCollection {
  [key: string]: TestData;
}
