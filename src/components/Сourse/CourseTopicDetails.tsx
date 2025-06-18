import React, { useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  useGetUserProgressQuery,
  useGetSolvedTasksQuery,
} from "../../api/progressApi";
import { Box, Typography, Divider, Chip, Stack } from "@mui/material";
import {
  getTotalPractice,
  getTotalSections,
  getTotalTests,
} from "../../lib/topicMetrics";
import { getPassedTestsCount } from "../../lib/getPassedTestsCount";
import { getPrWorksProgress } from "../../lib/getPrWorksProgress";
import { findPracticeTasksForTopic } from "../../lib/findPracticeTasksForTopic";
import { courseList, mockTopics } from "../../DB";
import { NotFoundMessage } from "../../ui/NotFoundMessage";
import { FaRegSadTear } from "react-icons/fa";
import { getFilteredTopics } from "../../lib/getFilteredTopics";
import { useSelector } from "react-redux";
import { selectIsProByCourseId } from "../../store/accessSlice";
import { RootState } from "../../store/store";
import BtnCustom from "../../ui/BtnCustom";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TopicChaptersAccordion from "./TopicChaptersAccordion";
import WorkIcon from "@mui/icons-material/Work";
import styles from "./Course.module.scss";

const CourseTopicDetails: React.FC = () => {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topicId = searchParams.get("topicId");

  const includePro = useSelector((state: RootState) =>
    selectIsProByCourseId(state, Number(courseId))
  );

  const filteredTopics = useMemo(() => {
    const course = courseList.find((c) => String(c.id) === courseId);
    if (!course) return [];

    return getFilteredTopics(mockTopics, {
      courseIds: course.courseId,
      includePro,
    });
  }, [courseId]);

  const topicIsPro = filteredTopics.find((t) => t.id === topicId);
  const topic = mockTopics.find((t) => t.id === topicId);

  const { data: progressData } = useGetUserProgressQuery(
    { courseId: courseId! },
    { skip: !courseId }
  );

  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();

  if (!topic || !topicIsPro) {
    return (
      <NotFoundMessage
        icon={<FaRegSadTear size={32} color="#999" />}
        text="Тема не найдена"
      />
    );
  }

  const totalTests = getTotalTests(topicIsPro);
  const passedTestsCount = getPassedTestsCount(topicIsPro, progressData);
  const totalSections = getTotalSections(topicIsPro);
  const moduleTasks = findPracticeTasksForTopic(topicIsPro.title);
  const totalPractice = getTotalPractice(topicIsPro);

  const solvedPracticeCount = moduleTasks.filter((task) =>
    solvedTasks.some((solved) => solved.id === task.id)
  ).length;

  const { totalPrWorks, completedPrWorksCount } = getPrWorksProgress(
    topicIsPro.id,
    progressData?.taskTopics
  );

  return (
    <Box p={2}>
      <Box className={styles.btnActions}></Box>

      <Box className={styles.titleActionsContainer}>
        <Box className={styles.titleActions}>
          <Typography variant="h4">{topic.title}</Typography>
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
            icon={<WorkIcon fontSize="small" />}
            color="default"
            label={`Практических работ выполнено: ${completedPrWorksCount} из ${totalPrWorks}`}
          />
        )}

        {totalTests > 0 && (
          <Chip
            icon={<QuizIcon fontSize="small" />}
            color="default"
            label={`Тестов пройдено: ${passedTestsCount} из ${totalTests}`}
          />
        )}

        {totalPractice > 0 && (
          <Chip
            icon={<CodeIcon fontSize="small" />}
            color="default"
            label={`Практик пройдено: ${solvedPracticeCount} из ${totalPractice}`}
          />
        )}

        <Chip
          icon={<BookIcon fontSize="small" />}
          label={`Разделов: ${totalSections}`}
        />

        <Chip
          icon={<AccessTimeIcon fontSize="small" />}
          label={`~ ${topic.estimatedHours} ч. на изучение`}
        />
      </Stack>

      <TopicChaptersAccordion
        topicTestKeys={topic.testKeys}
        chapters={topic.chapters}
        isPro={includePro}
      />
    </Box>
  );
};

export default CourseTopicDetails;
