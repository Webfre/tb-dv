import { courseList } from "../DB";

/**
 * Функция поиска courseId по id курса
 * @param id - ID курса
 * @returns Массив courseId или пустой массив, если курс не найден
 */
export const getCourseIdsByCourseId = (id: number): string[] => {
  const course = courseList.find((course) => course.id === id);
  return course ? course.courseId : [];
};
