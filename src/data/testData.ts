import { css_animations_test } from "../dataCourse/css/test/css_animations_test";
import { css_block_test } from "../dataCourse/css/test/css_block_test";
import { css_box_model_test } from "../dataCourse/css/test/css_box_model_test";
import { css_flexbox_test } from "../dataCourse/css/test/css_flexbox_test";
import { css_grid_test } from "../dataCourse/css/test/css_grid_test";
import { css_images_test } from "../dataCourse/css/test/css_images_test";
import { css_intro_test } from "../dataCourse/css/test/css_intro_test";
import { css_layout_test } from "../dataCourse/css/test/css_layout_test";
import { css_methodologies_test } from "../dataCourse/css/test/css_methodologies_test";
import { css_preprocessors_test } from "../dataCourse/css/test/css_preprocessors_test";
import { css_pseudo_test } from "../dataCourse/css/test/css_pseudo_test";
import { css_responsive_test } from "../dataCourse/css/test/css_responsive_test";
import { css_selectors_test } from "../dataCourse/css/test/css_selectors_test";
import { html_attributes_test } from "../dataCourse/html/test/html_attributes_test";
import { html_best_practices_test } from "../dataCourse/html/test/html_best_practices_test";
import { html_elements_test } from "../dataCourse/html/test/html_elements_test";
import { html_final_test } from "../dataCourse/html/test/html_final_test";
import { html_forms_test } from "../dataCourse/html/test/html_forms_test";
import { html_intro_test } from "../dataCourse/html/test/html_intro_test";
import { html_legacy_test } from "../dataCourse/html/test/html_legacy_test";
import { html_links_images_test } from "../dataCourse/html/test/html_links_images";
import { html_meta_head_test } from "../dataCourse/html/test/html_meta_head_test";
import { html_multimedia_test } from "../dataCourse/html/test/html_multimedia_test";
import { html_semantics_test } from "../dataCourse/html/test/html_semantics_test";
import { html_structure_test } from "../dataCourse/html/test/html_structure_test";
import { html_tables_test } from "../dataCourse/html/test/html_tables_test";
import { html_text_formatting_test } from "../dataCourse/html/test/html_text_formatting_test";
import { js_basics_test } from "../dataCourse/js/test/js_basics_test";
import { js_intro_test } from "../dataCourse/js/test/js_intro_test";
import { ide_intro_test } from "../dataCourse/vscode/ide_intro_test";
import { browser_intro_test } from "../dataCourse/www/test/browser_intro_test";
import { TestDataCollection } from "./types";

export const testData: TestDataCollection = {
  // Browser
  browser_intro_test,

  // IDE
  ide_intro_test,

  // HTML
  html_intro_test,
  html_structure_test,
  html_elements_test,
  html_attributes_test,
  html_semantics_test,
  html_text_formatting_test,
  html_links_images_test,
  html_forms_test,
  html_tables_test,
  html_multimedia_test,
  html_meta_head_test,
  html_best_practices_test,
  html_legacy_test,
  html_final_test,

  // CSS
  css_intro_test, // id будет с 400
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
  css_preprocessors_test,

  // JS
  js_intro_test,
  js_basics_test,

  // React // id будет с 500
};
