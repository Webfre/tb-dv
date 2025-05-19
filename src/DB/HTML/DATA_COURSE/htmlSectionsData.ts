import {
  html_attr_1,
  html_attr_2,
  html_attr_3,
  html_attr_4,
} from "./SECTIONS/html_attributes";
import { html_best_1, html_best_2 } from "./SECTIONS/html_best_practices";
import {
  html_el_1,
  html_el_2,
  html_el_3,
  html_el_4,
  html_el_5,
  html_el_6,
} from "./SECTIONS/html_elements";
import { html_final_1 } from "./SECTIONS/html_final";
import {
  html_form_1,
  html_form_2,
  html_form_3,
  html_form_4,
  html_form_5,
} from "./SECTIONS/html_forms";
import { html_intro1, html_intro2, html_intro3 } from "./SECTIONS/html_intro";
import {
  html_link_1,
  html_link_2,
  html_link_3,
} from "./SECTIONS/html_links_images";
import {
  html_meta_1,
  html_meta_2,
  html_meta_3,
} from "./SECTIONS/html_meta_head";
import { html_media_1, html_media_2 } from "./SECTIONS/html_multimedia";
import { html_sem_1, html_sem_2, html_sem_3 } from "./SECTIONS/html_semantics";
import {
  html_structure_1,
  html_structure_2,
  html_structure_3,
} from "./SECTIONS/html_structure";
import {
  html_table_1,
  html_table_2,
  html_table_3,
} from "./SECTIONS/html_tables";
import { html_pr_1 } from "./WORK/html_pr_1";

export const htmlSections = {
  html_intro: [html_intro1, html_intro2, html_intro3],
  html_structure: [html_structure_1, html_structure_2, html_structure_3],
  html_elements: [
    html_el_1,
    html_el_2,
    html_el_3,
    html_el_4,
    html_el_5,
    html_el_6,
  ],
  html_attributes: [html_attr_1, html_attr_2, html_attr_3, html_attr_4],

  html_semantics: [html_sem_1, html_sem_2, html_sem_3],
  html_links_images: [html_link_1, html_link_2, html_link_3],

  html_forms: [html_form_1, html_form_2, html_form_3, html_form_4, html_form_5],
  html_tables: [html_table_1, html_table_2, html_table_3],
  html_multimedia: [html_media_1, html_media_2],

  html_meta_head: [html_meta_1, html_meta_2, html_meta_3],
  html_best_practices: [html_best_1, html_best_2],

  html_final: [html_final_1, html_pr_1],
};
