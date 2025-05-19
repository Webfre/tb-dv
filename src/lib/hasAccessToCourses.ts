import { AccessCourseUser } from "../api/userApi";
import { InfoCourse } from "../DB";

/**
 * Проверяет, есть ли доступ хотя бы к одному курсу
 * @param accessCourse - массив курсов пользователя
 * @returns true, если есть хотя бы один доступный курс, иначе false
 */
export const hasAccessToCourses = (
  accessCourse: AccessCourseUser[]
): boolean => {
  if (!Array.isArray(accessCourse) || accessCourse.length === 0) {
    return false;
  }

  return accessCourse.some((course) => course.isAccess);
};

/**
 * Проверяет, есть ли доступ к курсу по его ID
 * @param accessCourse - массив курсов пользователя
 * @param courseId - ID курса
 * @returns true, если доступ к курсу есть, иначе false
 */
export const hasAccessToCourse = (
  accessCourse: AccessCourseUser[],
  courseId: number
): boolean => {
  if (!Array.isArray(accessCourse) || accessCourse.length === 0) {
    return false;
  }

  return accessCourse.some(
    (course) => course.id === courseId && course.isAccess
  );
};

/**
 * Фильтрует список курсов и оставляет только те, у которых есть доступ
 * @param courseList - список всех курсов
 * @param accessCourse - список доступных курсов с ID и флагом доступа
 * @returns список курсов, которые доступны
 */
export const getAccessibleCourses = (
  courseList: InfoCourse[],
  accessCourse: AccessCourseUser[]
): InfoCourse[] => {
  const accessibleIds = accessCourse
    .filter((course) => course.isAccess)
    .map((course) => course.id);

  return courseList.filter((course) => accessibleIds.includes(course.id));
};
