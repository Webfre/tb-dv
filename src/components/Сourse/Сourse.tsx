import React from "react";
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
import { useNavigate } from "react-router-dom";
import { mockTopics } from "./CourseTopic";
import QuizIcon from "@mui/icons-material/Quiz";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/MenuBook";
import { useGetUserProgressQuery } from "../../api/api";
import jwtDecode from "jwt-decode";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import styles from "./PracticeDrawer.module.scss";

const CoursePage: React.FC = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const decoded: any = token ? jwtDecode(token) : null;
  const userId = decoded?.sub;

  const { data: progressData } = useGetUserProgressQuery(userId!, {
    skip: !userId,
  });

  const isTestPassed = (key: string): boolean => {
    if (!progressData?.history?.[key]) return false;
    const history = progressData.history[key];
    const best = Math.max(...history.map((h: any) => h.percentage));
    return best >= 60;
  };

  return (
    <Box p={4}>
      <Box className={styles.roadmap}>
        <Typography variant="h4" gutterBottom>
          Курс: Frontend-разработчик React (базовый)
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
            Roadmap (Junior)
          </Link>
          — это пошаговое руководство, которое подскажет, в каком порядке
          изучать темы и выполнять задания. Следуйте по пунктам от начала и до
          конца. Удачи в обучении!
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {mockTopics.map((topic, index) => {
          const totalSections = topic.chapters.reduce(
            (acc, ch) => acc + ch.sections.length,
            0
          );

          const allTestKeys = [
            ...(topic.testKeys || []),
            ...topic.chapters.flatMap((ch) => ch.testKeys || []),
          ];

          const totalTests = allTestKeys.length;

          const passedTests = allTestKeys.filter((key) =>
            isTestPassed(key)
          ).length;

          const progress = totalTests
            ? Math.round((passedTests / totalTests) * 100)
            : 0;

          const totalPractice =
            (topic.practiceIds?.length || 0) +
            topic.chapters.reduce(
              (acc, ch) => acc + (ch.practiceIds?.length || 0),
              0
            );

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
                onClick={() => navigate(`/course/${topic.id}`)}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    className={styles.titleNameTopic}
                    variant="h4"
                    gutterBottom
                  >
                    {topic.title}
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
                  </Grid>

                  {index !== 0 && (
                    <Box mt={4}>
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
