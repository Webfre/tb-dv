import { css_animations_test } from "./CSS/DATA_COURSE/TEST/css_animations_test";
import { css_block_test } from "./CSS/DATA_COURSE/TEST/css_block_test";
import { css_box_model_test } from "./CSS/DATA_COURSE/TEST/css_box_model_test";
import { css_flexbox_test } from "./CSS/DATA_COURSE/TEST/css_flexbox_test";
import { css_grid_test } from "./CSS/DATA_COURSE/TEST/css_grid_test";
import { css_images_test } from "./CSS/DATA_COURSE/TEST/css_images_test";
import { css_intro_test } from "./CSS/DATA_COURSE/TEST/css_intro_test";
import { css_layout_test } from "./CSS/DATA_COURSE/TEST/css_layout_test";
import { css_methodologies_test } from "./CSS/DATA_COURSE/TEST/css_methodologies_test";
import { css_pseudo_test } from "./CSS/DATA_COURSE/TEST/css_pseudo_test";
import { css_responsive_test } from "./CSS/DATA_COURSE/TEST/css_responsive_test";
import { css_selectors_test } from "./CSS/DATA_COURSE/TEST/css_selectors_test";
import { html_attributes_test } from "./HTML/DATA_COURSE/TEST/html_attributes_test";
import { html_best_practices_test } from "./HTML/DATA_COURSE/TEST/html_best_practices_test";
import { html_elements_test } from "./HTML/DATA_COURSE/TEST/html_elements_test";
import { html_final_test } from "./HTML/DATA_COURSE/TEST/html_final_test";
import { html_forms_test } from "./HTML/DATA_COURSE/TEST/html_forms_test";
import { html_intro_test } from "./HTML/DATA_COURSE/TEST/html_intro_test";
import { html_links_images_test } from "./HTML/DATA_COURSE/TEST/html_links_images";
import { html_meta_head_test } from "./HTML/DATA_COURSE/TEST/html_meta_head_test";
import { html_multimedia_test } from "./HTML/DATA_COURSE/TEST/html_multimedia_test";
import { html_semantics_test } from "./HTML/DATA_COURSE/TEST/html_semantics_test";
import { html_structure_test } from "./HTML/DATA_COURSE/TEST/html_structure_test";
import { html_tables_test } from "./HTML/DATA_COURSE/TEST/html_tables_test";
import { js_basics_test } from "./JAVASCRIPT/DATA_COURSE/TEST/js_basics_test";
import { js_intro_test } from "./JAVASCRIPT/DATA_COURSE/TEST/js_intro_test";
import { ide_intro_test } from "./IDE/DATA_COURSE/TEST/ide_intro_test";
import { browser_intro_test } from "./WWW/DATA_COURSE/TEST/browser_intro_test";
import { TestDataCollection } from "./index_type";
import { scss_intro_test } from "./SCSS/DATA_COURSE/TEST/scss_intro_test";
import { scss_basics_test } from "./SCSS/DATA_COURSE/TEST/scss_basics_test";
import { verstka_final_test } from "./VERSKA_FINAL/TEST/verstka_final_test";

// Для фильтрации профиля - прогресса по курсу  // TODO
export const TEST_CATEGORY_MAP: Record<string, string[]> = {
  browser: ["browser_intro_test"],
  ide: ["ide_intro_test"],
  html: [
    "html_intro_test",
    "html_structure_test",
    "html_elements_test",
    "html_attributes_test",
    "html_semantics_test",
    "html_links_images_test",
    "html_forms_test",
    "html_tables_test",
    "html_multimedia_test",
    "html_meta_head_test",
    "html_best_practices_test",
    "html_final_test",
  ],
  css: [
    "css_intro_test",
    "css_selectors_test",
    "css_box_model_test",
    "css_block_test",
    "css_pseudo_test",
    "css_methodologies_test",
    "css_flexbox_test",
    "css_grid_test",
    "css_layout_test",
    "css_images_test",
    "css_responsive_test",
    "css_animations_test",
  ],
  scss: ["scss_intro_test", "scss_basics_test"],
  js: ["js_intro_test", "js_basics_test"],
};

export const testData: TestDataCollection = {
  // Browser 0 - 100
  browser_intro_test,

  // IDE 100 -200
  ide_intro_test,

  // HTML 200 -300
  html_intro_test,
  html_structure_test,
  html_elements_test,
  html_attributes_test,
  html_semantics_test,
  html_links_images_test,
  html_forms_test,
  html_tables_test,
  html_multimedia_test,
  html_meta_head_test,
  html_best_practices_test,
  html_final_test,

  // CSS 300 - 400
  css_intro_test,
  css_selectors_test,
  css_box_model_test,
  css_block_test,
  css_pseudo_test,
  css_methodologies_test,
  css_flexbox_test,
  css_grid_test,
  css_layout_test,
  css_images_test,
  css_responsive_test,
  css_animations_test,

  // SCSS - 350-380
  scss_intro_test,
  scss_basics_test,

  // FINAL-verstka 380-400
  verstka_final_test,

  // JS  500 - 600
  js_intro_test,
  js_basics_test,
};
