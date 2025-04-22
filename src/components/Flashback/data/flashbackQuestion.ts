import { FlashbackQuestion } from "../flashbackData";
import { cssIntroQuestions } from "./css/cssIntroQuestions";
import { htmlIntroQuestions } from "./html/htmlIntroQuestions";

export const exampleQuestions: FlashbackQuestion[] = [
  ...htmlIntroQuestions,
  ...cssIntroQuestions,
];
