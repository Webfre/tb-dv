import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUserProgressQuery } from "../../api/progressApi";
import { getTestsByCourseIds } from "../../lib/getTestsByCourseIds";
import { getCourseIdsByCourseId } from "../../lib/getCourseIdsByCourseId";
import {
  calculateCategoryProgress,
  groupTestsByCategory,
} from "../Progress/ProgressUtils";
import styles from "./TestItemCard.module.scss";
import TestItemCard from "./TestItemCard";
import Spinner from "../../ui/Spinner";
import { HintBlock } from "../../ui/HintBlock";
import { CustomLinearProgress } from "../../ui/CustomLinearProgress";

interface ProgressProps {
  courseId: string;
}

const TestList: React.FC<ProgressProps> = ({ courseId }) => {
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
    return <Spinner />;
  }

  if (!progressData) {
    return <Typography>Прогресс не найден.</Typography>;
  }

  return (
    <Box p={2}>
      <HintBlock
        text={`Система тестирования на курсе помогает закрепить материал после изучения лекций и практики.
  Каждый тест связан с определённой темой, и его прохождение рекомендуется только после ознакомления с теорией.
  У вас есть 2 попытки на прохождение каждого теста.

  Если результат менее 50% — тест считается не пройденным, от 50% и выше — засчитывается.
  Обращайте внимание на ошибки и правильные ответы, чтобы понять, где есть пробелы.
  Рекомендуем повторно изучить материал перед второй попыткой.`}
      />

      {Object.entries(groupedTests).map(([category, tests]) => {
        const avgProgress = calculateCategoryProgress(tests, progressData);

        return (
          <Accordion
            sx={{
              bgcolor: "transparent",
              boxShadow: "none",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
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
                  <CustomLinearProgress
                    value={avgProgress}
                    backgroundColor="#f0f0f0"
                    backgroundColorPercent="#846ee6"
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
    </Box>
  );
};

export default TestList;
