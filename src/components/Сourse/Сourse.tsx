import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Chip,
  Link,
  Tooltip,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProgressQuery } from "../../api/progressApi";
import { calculateTopicProgress } from "../../lib/calculateTopicProgress";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/MenuBook";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import styles from "./Course.module.scss";
import { InfoCourse } from "../../DB/index_type";
import { courseList, mockTopics } from "../../DB";

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const { id: courseId } = useParams<{ id: string }>();
  const { data: progressData } = useGetUserProgressQuery({
    courseId: courseId ?? "",
  });
  const [filteredTopics, setFilteredTopics] = useState<typeof mockTopics>([]);
  const [course, setCourse] = useState<InfoCourse | undefined>(undefined);

  const isTestPassed = (key: string): boolean => {
    if (!progressData?.history?.[key]) return false;
    const history = progressData.history[key];
    const best = Math.max(...history.map((h: any) => h.percentage));
    return best >= 50;
  };

  useEffect(() => {
    if (courseId) {
      const foundCourse = courseList.find(
        (course) => course.id === Number(courseId)
      );

      if (foundCourse) {
        setCourse(foundCourse);
      }

      if (foundCourse?.courseId) {
        const topics = mockTopics.filter((topic) =>
          foundCourse.courseId.includes(topic.id)
        );
        setFilteredTopics(topics);
      }
    }
  }, [courseId]);

  if (!course) {
    return (
      <Typography>
        Произошла ошибка, обратитесь к администратору курса
      </Typography>
    );
  }

  return (
    <Box p={2}>
      <Box className={styles.roadmap}>
        <Typography variant="h4" gutterBottom>
          Курс: {course.title}
        </Typography>

        <Typography variant="body1" mb={3}>
          В курсе представлены практические задачи, тесты, примеры решений,
          ссылки на полезные ресурсы, видеоуроки и конференции, а также
          поддержка в процессе обучения. Сам курс охватывает основные темы от
          базового уровня до уровня Trainee/Junior Frontend Developer.
        </Typography>

        <Box className={styles.roadmapType}>
          <Tooltip title="Trainee — начинающий разработчик, только осваивает основы frontend, часто без коммерческого опыта.">
            <Chip
              icon={<EmojiEmotionsIcon />}
              label="Trainee"
              color="primary"
            />
          </Tooltip>

          <Tooltip title="Junior — разработчик, владеющий базовыми технологиями, способен выполнять простые задачи под руководством.">
            <Chip icon={<AddReactionIcon />} label="Junior" color="primary" />
          </Tooltip>
        </Box>
      </Box>

      <Box className={styles.roadmap}>
        <Typography textAlign="left" variant="body2" color="textSecondary">
          Не знаете, с чего начать? Напишите вашему наставнику или загляните в
          <Link href="/roadmap" underline="hover" sx={{ mx: 0.5 }}>
            Roadmap
          </Link>
          — это пошаговое руководство, которое подскажет, в каком порядке
          изучать темы и выполнять задания. Следуйте по пунктам от начала и до
          конца. Удачи в обучении!
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {filteredTopics.map((topic, index) => {
          const {
            totalSections,
            totalTests,
            totalPrWorks,
            progress,
            totalPractice,
          } = calculateTopicProgress(topic, progressData, isTestPassed);

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={topic.id}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                }}
                onClick={() =>
                  navigate(`/course/${topic.id}`, {
                    state: { courseId },
                  })
                }
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className={styles.titleNameTopic}
                    variant="h4"
                    gutterBottom
                  >
                    {`${index + 1}. ${topic.title}`}
                  </Typography>

                  <Grid container spacing={1} my={1}>
                    {totalTests > 0 && (
                      <Grid item xs={6}>
                        <Chip
                          icon={<QuizIcon />}
                          label={`Тестов: ${totalTests}`}
                          color="primary"
                          size="small"
                          sx={{ width: "100%" }}
                        />
                      </Grid>
                    )}
                    {totalPractice > 0 && (
                      <Grid item xs={6}>
                        <Chip
                          icon={<CodeIcon />}
                          label={`Практик: ${totalPractice}`}
                          color="secondary"
                          size="small"
                          sx={{ width: "100%" }}
                        />
                      </Grid>
                    )}
                    <Grid item xs={6}>
                      <Chip
                        icon={<BookIcon />}
                        label={`Разделов: ${totalSections}`}
                        color="default"
                        size="small"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Chip
                        label={`~ ${topic.estimatedHours} ч.`}
                        size="small"
                        sx={{ width: "100%" }}
                      />
                    </Grid>

                    {totalPrWorks > 0 && (
                      <Grid item xs={12}>
                        <Chip
                          icon={<WorkIcon />}
                          label={`Практических работ: ${totalPrWorks}`}
                          color="warning"
                          size="small"
                          sx={{ width: "100%", marginTop: "10px" }}
                        />
                      </Grid>
                    )}
                  </Grid>

                  {totalTests !== 0 && (
                    <Box sx={{ mt: "auto", pt: 2 }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mb={0.5}
                      >
                        Прогресс: {progress}%
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{ height: 10, borderRadius: 5 }}
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CoursePage;
