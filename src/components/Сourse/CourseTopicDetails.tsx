import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Chip, Stack } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { mockTopics } from "../../dataCourse/CourseTopic";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import TopicChaptersAccordion from "./TopicChaptersAccordion";
import BtnCustom from "../../ui/BtnCustom";

const CourseTopicDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const topic = mockTopics.find((t) => t.id === id);

  if (!topic) {
    return <Typography>Тема не найдена</Typography>;
  }

  const totalSections = topic.chapters.reduce(
    (acc, ch) => acc + ch.sections.length,
    0
  );

  const totalTests =
    (topic.testKeys?.length || 0) +
    topic.chapters.reduce((acc, ch) => acc + (ch.testKeys?.length || 0), 0);

  const totalPractice =
    (topic.practiceIds?.length || 0) +
    topic.chapters.reduce((acc, ch) => acc + (ch.practiceIds?.length || 0), 0);

  return (
    <Box p={4}>
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />

      <Typography variant="h4" gutterBottom>
        {topic.title}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {topic.description}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Stack direction="row" spacing={2} flexWrap="wrap">
        {totalTests > 0 && (
          <Chip icon={<QuizIcon />} label={`Тестов: ${totalTests}`} />
        )}
        {totalPractice > 0 && (
          <Chip icon={<CodeIcon />} label={`Практик: ${totalPractice}`} />
        )}
        <Chip icon={<BookIcon />} label={`Разделов: ${totalSections}`} />
        <Chip
          icon={<AccessTimeIcon />}
          label={`~ ${topic.estimatedHours} ч. на изучение`}
        />
      </Stack>

      <TopicChaptersAccordion
        topicTestKeys={topic.testKeys}
        chapters={topic.chapters}
      />
    </Box>
  );
};

export default CourseTopicDetails;
