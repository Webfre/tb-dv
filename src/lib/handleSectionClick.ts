import { AccessCourseUser } from "../api/userApi";
import { courseList, mockTopics } from "../DB";

export const handleSectionClick = (
  moduleId: string | undefined,
  topicId: string | undefined,
  accessCourses: AccessCourseUser[]
) => {
  if (!moduleId || !topicId) return;

  // 1. Получить список ID доступных курсов
  const accessibleCourseIds = accessCourses
    .filter((course) => course.isAccess)
    .map((course) => course.id);

  // 2. Найти курс, который доступен И содержит topicId в своем courseId[]
  const matchedCourse = courseList.find(
    (course) =>
      accessibleCourseIds.includes(course.id) &&
      course.courseId.includes(moduleId)
  );

  if (!matchedCourse) {
    console.warn("Нет доступа к курсу или курс не найден для темы:", topicId);
    return;
  }

  // 3. Найти тему по topicId
  const matchedTopic = mockTopics.find((topic) => topic.id === moduleId);

  if (!matchedTopic) {
    console.warn("Тема не найдена:", topicId);
    return;
  }

  // 4. Найти первую главу темы
  const matchedChapter = matchedTopic.chapters.find(
    (chapter) => chapter.id === topicId
  );

  if (!matchedChapter) {
    console.warn("Нет глав у темы:", topicId);
    return;
  }

  // 5. Построить корректный URL
  const url = `${
    process.env.REACT_API_URL || "http://localhost:3000"
  }/panel/course/${matchedCourse.id}?chapterId=${
    matchedChapter.id
  }&topicId=${moduleId}`;

  // 6. Открыть в новой вкладке
  window.open(url, "_blank");
};
