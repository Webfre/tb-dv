export const htmlTextFormattingQuestions = [
  {
    id: "html_elements_101",
    title:
      "Какой тег используется для семантического выделения важного текста?",
    options: ["<b>", "<strong>", "<i>", "<span>"],
    correctAnswers: [1],
    descriptions: [
      "<b> — только визуальное выделение.",
      "<strong> — семантическое выделение важности.",
      "<i> — курсив без семантики.",
      "<span> — универсальный строчный контейнер.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_102",
    title:
      "Какой тег следует использовать для смыслового акцента в предложении?",
    options: ["<em>", "<i>", "<italic>", "<highlight>"],
    correctAnswers: [0],
    descriptions: [
      "<em> — семантическое выделение интонации.",
      "<i> — визуальный курсив без семантики.",
      "<italic> — несуществующий тег.",
      "<highlight> — нестандартный тег.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_103",
    title: "Какой тег делает текст жирным без семантической нагрузки?",
    options: ["<strong>", "<bold>", "<b>", "<heavy>"],
    correctAnswers: [2],
    descriptions: [
      "<strong> — жирный с семантикой важности.",
      "<bold> — несуществующий тег.",
      "<b> — чисто визуальное выделение.",
      "<heavy> — нестандартный тег.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_104",
    title: "Какой тег НЕ рекомендуется использовать для подчёркивания текста?",
    options: ["<u>", "<ins>", "<underline>", "CSS text-decoration"],
    correctAnswers: [2],
    descriptions: [
      "<u> — допустим для стилизации.",
      "<ins> — семантическое подчёркивание (вставленный текст).",
      "<underline> — несуществующий тег.",
      "CSS — предпочтительный способ.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_105",
    title: "Какой тег используется для выделения вставленного текста?",
    options: ["<u>", "<ins>", "<added>", "<mark>"],
    correctAnswers: [1],
    descriptions: [
      "<u> — просто подчёркивание.",
      "<ins> — семантика вставленного контента.",
      "<added> — несуществующий тег.",
      "<mark> — выделение цветом (не подчёркивание).",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_106",
    title: "Какой тег выделяет текст цветом (по умолчанию жёлтым)?",
    options: ["<highlight>", "<color>", "<mark>", "<em>"],
    correctAnswers: [2],
    descriptions: [
      "<highlight> — нестандартный тег.",
      "<color> — несуществующий тег.",
      "<mark> — семантическое выделение цветом.",
      "<em> — курсив с акцентом.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_107",
    title: "Какой тег следует использовать для технических терминов?",
    options: ["<term>", "<code>", "<tech>", "<dfn>"],
    correctAnswers: [1],
    descriptions: [
      "<term> — несуществующий тег.",
      "<code> — для фрагментов кода и терминов.",
      "<tech> — нестандартный тег.",
      "<dfn> — для определений, не терминов.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_108",
    title: "Какой тег используется для сокращений?",
    options: ["<short>", "<abbr>", "<acronym>", "<small>"],
    correctAnswers: [1],
    descriptions: [
      "<short> — несуществующий тег.",
      "<abbr> — для сокращений (с атрибутом title).",
      "<acronym> — устаревший тег.",
      "<small> — для мелкого текста.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_109",
    title: "Какой тег делает текст меньше (по умолчанию)?",
    options: ["<tiny>", "<small>", "<little>", "<mini>"],
    correctAnswers: [1],
    descriptions: [
      "<tiny> — несуществующий тег.",
      "<small> — семантическое уменьшение текста.",
      "<little> — нестандартный тег.",
      "<mini> — не существует.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_110",
    title: "Какой тег используется для перечёркнутого текста?",
    options: ["<del>", "<s>", "<strike>", "<line>"],
    correctAnswers: [0],
    descriptions: [
      "<del> — семантика удалённого текста.",
      "<s> — устаревший вариант (визуальное перечёркивание).",
      "<strike> — устаревший тег.",
      "<line> — несуществующий тег.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_111",
    title: "Какой тег следует использовать для цитаты внутри текста?",
    options: ["<q>", "<quote>", "<blockquote>", "<cite>"],
    correctAnswers: [0],
    descriptions: [
      "<q> — строчная цитата (короткие фразы).",
      "<quote> — несуществующий тег.",
      "<blockquote> — блочная цитата (для длинных).",
      "<cite> — для названия источника.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_112",
    title: "Какой тег используется для верхнего индекса?",
    options: ["<up>", "<sup>", "<super>", "<top>"],
    correctAnswers: [1],
    descriptions: [
      "<up> — несуществующий тег.",
      "<sup> — верхний индекс (например, x²).",
      "<super> — нестандартный тег.",
      "<top> — не существует.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_113",
    title: "Какой тег используется для нижнего индекса?",
    options: ["<sub>", "<inf>", "<low>", "<bottom>"],
    correctAnswers: [0],
    descriptions: [
      "<sub> — нижний индекс (например, H₂O).",
      "<inf> — несуществующий тег.",
      "<low> — нестандартный тег.",
      "<bottom> — не существует.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_114",
    title: "Какой тег следует использовать для названия произведения?",
    options: ["<work>", "<cite>", "<title>", "<name>"],
    correctAnswers: [1],
    descriptions: [
      "<work> — несуществующий тег.",
      "<cite> — для названий книг, фильмов и т.д.",
      "<title> — заголовок документа.",
      "<name> — нестандартный тег.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
  {
    id: "html_elements_115",
    title: "Какой тег НЕ является семантическим?",
    options: ["<strong>", "<em>", "<b>", "<time>"],
    correctAnswers: [2],
    descriptions: [
      "<strong> — семантика важности.",
      "<em> — семантика акцента.",
      "<b> — чисто визуальное выделение.",
      "<time> — семантика даты/времени.",
    ],
    moduleId: "html",
    sectionTitle: "Элементы и теги",
    topic: "html_elements",
  },
];
