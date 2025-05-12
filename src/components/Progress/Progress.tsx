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
import { testData } from "../../data/testData";
import { useGetUserProgressQuery } from "../../api/progressApi";
import {
  calculateCategoryProgress,
  groupTestsByCategory,
} from "./ProgressUtils";
import ProgressRing from "./ProgressRing";
import TestItemCard from "./ProgressItemCard";
import styles from "./Progress.module.scss";
import PracticalWorksList from "./PracticalWorksList";

const Progress: React.FC = () => {
  const { data: progressData } = useGetUserProgressQuery();
  const groupedTests = useMemo(() => groupTestsByCategory(testData), []);

  if (!progressData) {
    return <Typography>Загрузка прогресса...</Typography>;
  }

  return (
    <Box p={4}>
      <ProgressRing />

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
                  />
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}

      <PracticalWorksList />
    </Box>
  );
};

export default Progress;
