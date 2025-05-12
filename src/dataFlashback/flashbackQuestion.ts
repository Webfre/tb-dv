import { FlashbackQuestion } from "./flashbackData";
import { cssIntroQuestions } from "./css/cssIntroQuestions";
import { htmlIntroQuestions } from "./html/htmlIntroQuestions";
import { htmlHistoryQuestions } from "./html/htmlHistoryQuestions";
import { htmlStructureQuestions } from "./html/htmlStructureQuestions";
import { htmlDoctypeQuestions } from "./html/htmlDoctypeQuestions";
import { htmlCoreStructureQuestions } from "./html/htmlCoreStructureQuestions";
import { htmlBlockInlineQuestions } from "./html/htmlBlockInlineQuestions";
import { htmlTextStructureQuestions } from "./html/htmlTextStructureQuestions";
import { htmlTextFormattingQuestions } from "./html/htmlTextFormattingQuestions";
import { htmlSemanticFormattingQuestions } from "./html/htmlSemanticFormattingQuestions";

export const exampleQuestions: FlashbackQuestion[] = [
  // HTML
  ...htmlIntroQuestions,
  ...htmlHistoryQuestions,
  ...htmlStructureQuestions,
  ...htmlDoctypeQuestions,
  ...htmlCoreStructureQuestions,
  ...htmlBlockInlineQuestions,
  ...htmlTextStructureQuestions,
  ...htmlTextFormattingQuestions,
  ...htmlSemanticFormattingQuestions,

  /// CSS
  ...cssIntroQuestions,
];
