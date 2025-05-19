import { dataTaskCss } from "./CSS/DATA_COURSE/TASK";
import { htmlTaskData } from "./HTML/DATA_COURSE/TASK";
import { taskDataJs } from "./JAVASCRIPT/DATA_COURSE/TASK";
import { PracticeTask } from "./index_type";

export const practiceMock: PracticeTask[] = [
  // HTML
  ...htmlTaskData,

  // CSS course
  ...dataTaskCss,

  // JS
  ...taskDataJs,
];
