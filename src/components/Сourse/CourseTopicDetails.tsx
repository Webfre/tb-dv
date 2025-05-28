import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  useGetUserProgressQuery,
  useGetSolvedTasksQuery,
} from "../../api/progressApi";
import { Box, Typography, Divider, Chip, Stack, Tooltip } from "@mui/material";
import {
  getTotalPractice,
  getTotalSections,
  getTotalTests,
} from "../../lib/topicMetrics";
import { getIsTopicCompleted } from "../../lib/getIsTopicCompleted";
import { getPassedTestsCount } from "../../lib/getPassedTestsCount";
import { getPrWorksProgress } from "../../lib/getPrWorksProgress";
import { findPracticeTasksForTopic } from "../../lib/findPracticeTasksForTopic";
import BtnCustom from "../../ui/BtnCustom";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TopicChaptersAccordion from "./TopicChaptersAccordion";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkIcon from "@mui/icons-material/Work";
import styles from "./Course.module.scss";
import { mockTopics } from "../../DB";
import { NotFoundMessage } from "../../ui/NotFoundMessage";
import { FaRegSadTear } from "react-icons/fa";

const CourseTopicDetails: React.FC = () => {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topicId = searchParams.get("topicId");

  const topic = mockTopics.find((t) => t.id === topicId);

  const { data: progressData } = useGetUserProgressQuery(
    { courseId: courseId! },
    { skip: !courseId }
  );

  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();

  if (!topic) {
    return (
      <NotFoundMessage
        icon={<FaRegSadTear size={32} color="#999" />}
        text="Тема не найдена"
      />
    );
  }

  const totalTests = getTotalTests(topic);
  const totalPractice = getTotalPractice(topic);
  const isTopicCompleted = getIsTopicCompleted(topic, progressData);
  const passedTestsCount = getPassedTestsCount(topic, progressData);
  const totalSections = getTotalSections(topic);
  const moduleTasks = findPracticeTasksForTopic(topic.title);

  const solvedPracticeCount = moduleTasks.filter((task) =>
    solvedTasks.some((solved) => solved.id === task.id)
  ).length;

  const { totalPrWorks, completedPrWorksCount } = getPrWorksProgress(
    topic.id,
    progressData?.taskTopics
  );

  return (
    <Box p={2}>
      <Box className={styles.btnActions}></Box>

      <Box className={styles.titleActionsContainer}>
        <Box className={styles.titleActions}>
          <Typography variant="h4">{topic.title}</Typography>

          {totalTests > 0 && (
            <Tooltip
              title={
                isTopicCompleted
                  ? "Модуль пройден! Вы успешно завершили все тесты и практические задания."
                  : "Вы не прошли модуль. Модуль считается пройденным, когда вы прошли все тесты и выполнили практическую работу."
              }
              arrow
            >
              <VerifiedIcon
                className={styles.btnVerified}
                color={isTopicCompleted ? "primary" : "disabled"}
              />
            </Tooltip>
          )}
        </Box>

        <BtnCustom
          text={`Ментор: ${topic.mentors.name}`}
          customColor="#846ee6"
          variant="contained"
          icon={<ManageAccountsIcon />}
          onClick={() => navigate(`/panel/mentorlist/${topic.mentors.id}`)}
        />
      </Box>

      <Typography mt={1} variant="subtitle1" gutterBottom>
        {topic.description}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Stack direction="row" gap={0.5} flexWrap="wrap">
        {totalPrWorks > 0 && (
          <Chip
            icon={<WorkIcon />}
            color="default"
            label={`Практических работ выполнено: ${completedPrWorksCount} из ${totalPrWorks}`}
          />
        )}

        {totalTests > 0 && (
          <Chip
            icon={<QuizIcon />}
            color="default"
            label={`Тестов пройдено: ${passedTestsCount} из ${totalTests}`}
          />
        )}

        {totalPractice > 0 && (
          <Chip
            icon={<CodeIcon />}
            color="default"
            label={`Практик пройдено: ${solvedPracticeCount} из ${totalPractice}`}
          />
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
