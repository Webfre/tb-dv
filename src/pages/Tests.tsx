import React, { useMemo } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";
import { testData } from "../data/testData";
import ProgressRing from "../components/Profile/ProgressRing";
import BtnCustom from "../ui/BtnCustom";
import { useGetUserProgressQuery } from "../api/api";
import jwtDecode from "jwt-decode";

interface TestHistoryEntry {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: Record<string, number[]>;
}

interface DecodedToken {
  sub: number;
  email: string;
  isAdmin: boolean;
  isAccessKey: boolean;
  accessKey?: string;
  exp: number;
  iat: number;
}

const Tests: React.FC = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("userName") || "Аноним";

  const token = localStorage.getItem("token");
  const decoded: DecodedToken | null = token ? jwtDecode(token) : null;
  const userId = decoded?.sub;

  const { data: progressData } = useGetUserProgressQuery(userId!, {
    skip: !userId,
  });

  const groupedTests = useMemo(
    () =>
      Object.entries(testData).reduce<Record<string, any[]>>(
        (acc, [key, test]) => {
          const category = test.category || "Без категории";
          if (!acc[category]) acc[category] = [];
          acc[category].push({ key, ...test });
          return acc;
        },
        {}
      ),
    []
  );

  const calculateCategoryProgress = (tests: any[]): number => {
    const total = tests.length;
    if (total === 0 || !progressData) return 0;

    let passed = 0;

    for (const test of tests) {
      const history = progressData.history?.[test.key];
      if (history && history.length > 0) {
        const best = Math.max(
          ...history.map((h: TestHistoryEntry) => h.percentage)
        );
        if (best >= 60) passed++;
      }
    }

    return Math.round((passed / total) * 100);
  };

  const renderTestItem = (
    testKey: string,
    testId: number,
    testName: string
  ) => {
    const history = progressData?.history?.[testKey] || [];

    const attempts = history.length;
    const bestPercentage =
      history.length > 0
        ? Math.max(...history.map((h: TestHistoryEntry) => h.percentage))
        : 0;

    const isFailedTwice = attempts === 2 && bestPercentage === 0;
    const progressColor: "primary" | "error" = isFailedTwice
      ? "error"
      : "primary";

    return (
      <ListItem
        key={testId}
        disablePadding
        sx={{ mb: 1, border: "1px solid #ccc", borderRadius: 2 }}
      >
        <ListItemButton
          onClick={() =>
            navigate("/test", {
              state: { name, selectedTest: testKey },
            })
          }
          sx={{ px: 2, py: 1.5 }}
        >
          <ListItemIcon>
            <QuizIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={testName} secondary={`Попыток: ${attempts}`} />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            minWidth={100}
          >
            <Typography variant="body2" color="textSecondary" mb={0.5}>
              {attempts > 0 ? `${Math.round(bestPercentage)}%` : "—"}
            </Typography>
            {attempts > 0 && (
              <LinearProgress
                variant="determinate"
                value={bestPercentage}
                sx={{ width: 80, height: 6, borderRadius: 5 }}
                color={progressColor}
              />
            )}
          </Box>
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box p={4}>
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />

      <Typography variant="h4" gutterBottom>
        Ваш прогресс
      </Typography>

      <ProgressRing />

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Доступные тесты
      </Typography>

      {Object.entries(groupedTests).map(([category, tests]) => {
        const avgProgress = calculateCategoryProgress(tests);

        return (
          <Accordion
            key={category}
            sx={{
              borderRadius: "20px !important",
              marginBottom: "10px",
              overflow: "hidden",
              "&:before": {
                display: "none",
              },
              boxShadow:
                "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
            <AccordionDetails>
              <List disablePadding>
                {tests.map((test) =>
                  renderTestItem(test.key, test.id, test.name)
                )}
              </List>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default Tests;
