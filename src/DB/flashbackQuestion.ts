import { FlashbackQuestion } from "../lib/getFlashbackData";
import { cssIntroQuestions } from "./CSS/DATA_FlASHBACK/cssIntroQuestions";
import { htmlIntroQuestions } from "./HTML/DATA_FlASHBACK/htmlIntroQuestions";
import { htmlHistoryQuestions } from "./HTML/DATA_FlASHBACK/htmlHistoryQuestions";
import { htmlStructureQuestions } from "./HTML/DATA_FlASHBACK/htmlStructureQuestions";
import { htmlDoctypeQuestions } from "./HTML/DATA_FlASHBACK/htmlDoctypeQuestions";
import { htmlCoreStructureQuestions } from "./HTML/DATA_FlASHBACK/htmlCoreStructureQuestions";
import { htmlBlockInlineQuestions } from "./HTML/DATA_FlASHBACK/htmlBlockInlineQuestions";
import { htmlTextStructureQuestions } from "./HTML/DATA_FlASHBACK/htmlTextStructureQuestions";
import { htmlTextFormattingQuestions } from "./HTML/DATA_FlASHBACK/htmlTextFormattingQuestions";
import { htmlSemanticFormattingQuestions } from "./HTML/DATA_FlASHBACK/htmlSemanticFormattingQuestions";
import { htmlForms } from "./HTML/DATA_FlASHBACK/htmlForms";
import { htmlAtribut } from "./HTML/DATA_FlASHBACK/htmlAtribut";
import { htmlSemantic } from "./HTML/DATA_FlASHBACK/htmlSemantic";
import { htmlLinks } from "./HTML/DATA_FlASHBACK/htmlLinks";
import { htmlTables } from "./HTML/DATA_FlASHBACK/htmlTables";
import { htmlMultimedia } from "./HTML/DATA_FlASHBACK/htmlMultimedia";
import { htmlMetaHead } from "./HTML/DATA_FlASHBACK/htmlMetaHead";
import { htmlbBestPractices } from "./HTML/DATA_FlASHBACK/htmlbBestPractices";
import { html5 } from "./HTML/DATA_FlASHBACK/html5";
import { browserIntro } from "./WWW/DATA_FlASHBACK/browserIntro";

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
