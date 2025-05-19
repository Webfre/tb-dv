export const html_links_images_test = {
  id: 7,
  name: "Ссылки и изображения в HTML",
  category: "HTML",
  ques: [
    {
      id: 1,
      name: "Какой атрибут тега <a> является обязательным для работы ссылки?",
      variants: ["src", "href", "alt", "target"],
      correct: [1],
      explanation:
        "Атрибут href определяет URL-адрес, на который ведет ссылка.",
    },
    {
      id: 2,
      name: "Какой комбинации атрибутов следует использовать для безопасного открытия внешней ссылки?",
      variants: [
        'target="_blank"',
        'target="_blank" rel="noopener"',
        'target="_blank" rel="noopener noreferrer"',
        'target="_new"',
      ],
      correct: [2],
      explanation:
        "noopener предотвращает tabnabbing, а noreferrer скрывает referrer информацию.",
    },
    {
      id: 3,
      name: "Как создать ссылку для телефонного звонка на мобильных устройствах?",
      variants: [
        '<a href="call:+79991234567">',
        '<a href="tel:+79991234567">',
        '<a href="phone:+79991234567">',
        '<a href="sms:+79991234567">',
      ],
      correct: [1],
      explanation: "Схема tel: используется для телефонных номеров.",
    },
    {
      id: 4,
      name: "Какой из этих тегов является самозакрывающимся?",
      variants: ["<a>", "<img>", "<div>", "<span>"],
      correct: [1],
      explanation:
        "Тег <img> не требует закрывающего тега, в отличие от других вариантов.",
    },
    {
      id: 5,
      name: "Какой формат изображения НЕ поддерживает прозрачность?",
      variants: ["PNG", "WebP", "JPEG", "SVG"],
      correct: [2],
      explanation:
        "JPEG не поддерживает прозрачность, в отличие от остальных форматов.",
    },
    {
      id: 6,
      name: "Какой атрибут тега <img> является обязательным для доступности?",
      variants: ["src", "width", "alt", "loading"],
      correct: [2],
      explanation:
        "Атрибут alt необходим для скринридеров и когда изображение не загружается.",
    },
    {
      id: 7,
      name: "Какой формат изображения лучше использовать для фотографий?",
      variants: ["SVG", "PNG", "WebP", "GIF"],
      correct: [2],
      explanation:
        "WebP обеспечивает лучшее сжатие для фотографий, но JPEG тоже допустим.",
    },
    {
      id: 8,
      name: 'Что делает атрибут loading="lazy" в теге <img>?',
      variants: [
        "Ускоряет загрузку всех изображений",
        "Откладывает загрузку изображения до его появления в viewport",
        "Делает изображение черно-белым",
        "Автоматически сжимает изображение",
      ],
      correct: [1],
      explanation:
        "Lazy loading улучшает производительность, загружая изображения по мере необходимости.",
    },
    {
      id: 9,
      name: "Какой тег следует использовать для векторной графики?",
      variants: ["<img> с JPG", "<img> с PNG", "<svg>", "<canvas>"],
      correct: [2],
      explanation:
        "Тег <svg> предназначен для векторной графики, хотя SVG можно использовать и в <img>.",
    },
    {
      id: 10,
      name: "Как создать якорную ссылку на элемент с id='section2'?",
      variants: [
        '<a link="#section2">',
        '<a href="#section2">',
        '<a anchor="#section2">',
        '<a id="section2">',
      ],
      correct: [1],
      explanation:
        "Синтаксис якорных ссылок использует href с # перед id целевого элемента.",
    },
  ],
};
