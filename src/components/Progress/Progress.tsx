import React, { useMemo } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUserProgressQuery } from "../../api/progressApi";
import {
  calculateCategoryProgress,
  groupTestsByCategory,
} from "./ProgressUtils";
import { getTestsByCourseIds } from "../../lib/getTestsByCourseIds";
import { getCourseIdsByCourseId } from "../../lib/getCourseIdsByCourseId";
import ProgressRing from "./ProgressRing";
import TestItemCard from "./ProgressItemCard";
import styles from "./Progress.module.scss";
import PracticalWorksList from "./PracticalWorksList";

interface ProgressProps {
  courseId: string;
}

const Progress: React.FC<ProgressProps> = ({ courseId }) => {
  const { data: progressData, isLoading } = useGetUserProgressQuery(
    { courseId },
    {
      skip: !courseId,
    }
  );

  const moduleIds = getCourseIdsByCourseId(Number(courseId));

  const filteredTests = useMemo(
    () => getTestsByCourseIds(moduleIds),
    [moduleIds]
  );

  const groupedTests = useMemo(
    () => groupTestsByCategory(filteredTests),
    [filteredTests]
  );

  if (!courseId) {
    return <Typography>Выберите курс, чтобы увидеть прогресс.</Typography>;
  }

  if (isLoading) {
    return <Typography>Загрузка...</Typography>;
  }

  if (!progressData) {
    return <Typography>Прогресс не найден.</Typography>;
  }

  return (
    <Box p={4}>
      <ProgressRing progressData={progressData} tests={filteredTests} />

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Доступные тесты
      </Typography>

      {Object.entries(groupedTests).map(([category, tests]) => {
        const avgProgress = calculateCategoryProgress(tests, progressData);

        return (
          <Accordion
            sx={{
              bgcolor: "transparent",
              boxShadow: "none",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
            key={category}
            className={styles.accordion}
          >
            <AccordionSummary
              sx={{ bgcolor: "transparent", px: 2 }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Box display="flex" flexDirection="column" width="98%">
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography variant="h6">{category}</Typography>
                </Box>
                <Box mt={0.5}>
                  <LinearProgress
                    variant="determinate"
                    value={avgProgress}
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    mt={0.5}
                    align="right"
                  >
                    {avgProgress}%
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "transparent", px: 2 }}>
              <List disablePadding>
                {tests.map((test) => (
                  <TestItemCard
                    key={test.id}
                    testKey={test.key}
                    testId={test.id}
                    testName={test.name}
                    history={progressData?.history?.[test.key]}
                    courseId={courseId}
                  />
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}

      <PracticalWorksList courseId={courseId} progressData={progressData} />
    </Box>
  );
};

export default Progress;
