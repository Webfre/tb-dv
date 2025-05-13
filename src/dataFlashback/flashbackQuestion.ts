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
import { htmlForms } from "./html/htmlForms";
import { htmlAtribut } from "./html/htmlAtribut";
import { htmlSemantic } from "./html/htmlSemantic";
import { htmlLinks } from "./html/htmlLinks";
import { htmlTables } from "./html/htmlTables";
import { htmlMultimedia } from "./html/htmlMultimedia";
import { htmlMetaHead } from "./html/htmlMetaHead";
import { htmlbBestPractices } from "./html/htmlbBestPractices";
import { html5 } from "./html/html5";
import { browserIntro } from "./www/browserIntro";

export const exampleQuestions: FlashbackQuestion[] = [
  // Работа браузера основы
  ...browserIntro,

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
  ...htmlAtribut,
  ...htmlSemantic,
  ...htmlLinks,
  ...htmlForms,
  ...htmlTables,
  ...htmlMultimedia,
  ...htmlMetaHead,
  ...htmlbBestPractices,
  ...html5,

  /// CSS основы
  ...cssIntroQuestions,
];
