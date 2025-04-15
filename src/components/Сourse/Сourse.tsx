import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Tooltip,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockTopics } from "./CourseTopic";
import QuizIcon from "@mui/icons-material/Quiz";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/MenuBook";

const CoursePage: React.FC = () => {
  const navigate = useNavigate();

  const isTopicUnlocked = (index: number) => index === 0;

  const isTestPassed = (key: string): boolean => {
    const historyRaw = localStorage.getItem(`history_${key}`);
    if (!historyRaw) return false;

    try {
      const history = JSON.parse(historyRaw);
      const best = Math.max(...history.map((h: any) => h.percentage));
      return best >= 60;
    } catch {
      return false;
    }
  };

  return (
    <Box p={4}>
      <Typography textAlign="center" variant="h4" gutterBottom>
        Курс по Frontend-разработке
      </Typography>

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

          const disabled = !isTopicUnlocked(index);
          const shortDescription = (topic.description ?? "").slice(0, 100);

          return (
            <Grid item xs={12} sm={6} md={4} key={topic.id}>
              <Card
                sx={{
                  borderRadius: "20px",
                  opacity: disabled ? 0.5 : 1,
                  pointerEvents: disabled ? "none" : "auto",
                  cursor: disabled ? "default" : "pointer",
                }}
                onClick={() => navigate(`/course/${topic.id}`)}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {topic.title}
                  </Typography>

                  <Tooltip title={topic.description} placement="top-start">
                    <Typography variant="body2" gutterBottom>
                      {shortDescription}...
                    </Typography>
                  </Tooltip>

                  <Grid container spacing={1} my={1}>
                    <Grid item xs={6}>
                      <Chip
                        icon={<QuizIcon />}
                        label={`Тестов: ${totalTests}`}
                        color="primary"
                        size="small"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Chip
                        icon={<CodeIcon />}
                        label={`Практик: ${totalPractice}`}
                        color="secondary"
                        size="small"
                        sx={{ width: "100%" }}
                      />
                    </Grid>
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

                  <Box mt={4}>
                    <Typography variant="body2" color="textSecondary" mb={0.5}>
                      Прогресс: {progress}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{ height: 10, borderRadius: 5 }}
                    />
                  </Box>
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
