import { CourseTopic } from "../DB/index_type";

interface FilterOptions {
  courseIds: string[];
  includePro: boolean;
}

export function getFilteredTopics(
  topics: CourseTopic[],
  options: FilterOptions
): CourseTopic[] {
  const { courseIds, includePro } = options;

  return topics
    .filter((topic) => courseIds.includes(topic.id))
    .map((topic) => ({
      ...topic,
      chapters: topic.chapters.filter((chapter) => {
        return includePro || !chapter.pro;
      }),
    }))
    .filter((topic) => topic.chapters.length > 0);
}
