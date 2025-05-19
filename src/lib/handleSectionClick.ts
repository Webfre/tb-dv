export const handleSectionClick = (
  moduleId: string | undefined,
  topicId: string | undefined
) => {
  if (!moduleId || !topicId) return;

  const url = `http://localhost:3000/course/${moduleId.toLocaleLowerCase()}?chapterId=${topicId}`; // TODO
  window.open(url, "_blank");
};
