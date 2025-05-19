import { TestDataCollection } from "../DB/index_type";
import { TEST_CATEGORY_MAP, testData } from "../DB/testData";

/**
 * Получает тесты, относящиеся к списку courseId
 * @param courseIds - список ID курсов (["html", "css", "js"])
 * @returns объект с тестами, отфильтрованными по курсам
 */
export const getTestsByCourseIds = (
  courseIds: string[]
): TestDataCollection => {
  const filteredTests: TestDataCollection = {};

  courseIds.forEach((id) => {
    const testsForCategory = TEST_CATEGORY_MAP[id];

    if (testsForCategory) {
      testsForCategory.forEach((testKey) => {
        if (testData[testKey]) {
          filteredTests[testKey] = testData[testKey];
        }
      });
    }
  });

  return filteredTests;
};
