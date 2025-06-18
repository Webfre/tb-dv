import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProgressQuery } from "../../api/progressApi";
import { calculateTopicProgress } from "../../lib/calculateTopicProgress";
import { FaRegSadTear } from "react-icons/fa";
import { InfoCourse } from "../../DB/index_type";
import { getFilteredTopics } from "../../lib/getFilteredTopics";
import { courseList, mockTopics } from "../../DB";
import { NotFoundMessage } from "../../ui/NotFoundMessage";
import { useSelector } from "react-redux";
import { selectIsProByCourseId } from "../../store/accessSlice";
import { RootState } from "../../store/store";
import { HintBlock } from "../../ui/HintBlock";
import { chip_sx, chip_sx_light_border } from "../../styles/global";
import { CustomLinearProgress } from "../../ui/CustomLinearProgress";
import QuizIcon from "@mui/icons-material/Quiz";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/MenuBook";
import styles from "./Course.module.scss";

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const { id: courseId } = useParams<{ id: string }>();
  const { data: progressData } = useGetUserProgressQuery({
    courseId: courseId ?? "",
  });
  const [filteredTopics, setFilteredTopics] = useState<typeof mockTopics>([]);
  const [course, setCourse] = useState<InfoCourse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const includePro = useSelector((state: RootState) =>
    selectIsProByCourseId(state, Number(courseId))
  );

  const isTestPassed = (key: string): boolean => {
    const history = progressData?.history?.[key];
    if (!Array.isArray(history) || history.length === 0) return false;

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

        const courseIsPro = getFilteredTopics(mockTopics, {
          courseIds: foundCourse.courseId,
          includePro,
        });

        if (foundCourse.courseId) {
          const topics = courseIsPro.filter((topic) =>
            foundCourse.courseId.includes(topic.id)
          );
          setFilteredTopics(topics);
        }
      }

      setIsLoading(false);
    }
  }, [courseId]);

  if (!course && !isLoading) {
    return (
      <NotFoundMessage
        icon={<FaRegSadTear size={32} color="#999" />}
        text="Произошла ошибка, обратитесь к администратору курса"
      />
    );
  }

  return (
    <Box p={2}>
      <Box>
        <HintBlock
          title="О курсе"
          text="Курс включает теорию, практики для закрепления, тесты по модулям, систему прогресса, примеры решений, ссылки на ресурсы, видеоуроки, конференции и поддержку от менторов."
        />
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
                className={styles.card}
                onClick={() =>
                  navigate(`/panel/course/${courseId}?topicId=${topic.id}`)
                }
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box className={styles.topicIndexWrapper}>
                    <Box className={styles.topicIndexCircle}>{index + 1}</Box>
                    <Box className={styles.titleNameTopic}>{topic.title}</Box>
                  </Box>

                  <Grid container spacing={1} my={1}>
                    {totalTests > 0 && (
                      <Grid item xs={6}>
                        <Chip
                          icon={<QuizIcon />}
                          label={`Тестов: ${totalTests}`}
                          color="primary"
                          size="small"
                          sx={{ width: "100%", ...chip_sx }}
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
                          sx={{ width: "100%", ...chip_sx_light_border }}
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
                          color="default"
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

                      <CustomLinearProgress
                        value={progress}
                        backgroundColor="#f0f0f0"
                        backgroundColorPercent="#846ee6"
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
