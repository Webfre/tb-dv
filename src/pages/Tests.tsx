import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Grid,
  Button,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { testData } from "../data/testData";
import ProgressRing from "../components/ProgressRing";

interface TestHistoryEntry {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: Record<string, number[]>;
}

const Tests: React.FC = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("userName") || "Аноним";

  const renderCard = (testKey: string, testId: number) => {
    const test = testData[testKey];
    const historyKey = `history_${testKey}`;
    const historyRaw = localStorage.getItem(historyKey);

    let attempts = 0;
    let bestPercentage = 0;

    if (historyRaw) {
      try {
        const history: TestHistoryEntry[] = JSON.parse(historyRaw);
        attempts = history.length;
        bestPercentage = Math.max(...history.map((h) => h.percentage));
      } catch (err) {
        console.error("Ошибка при чтении истории:", err);
      }
    }

    return (
      <Grid item xs={12} sm={6} md={4} key={testId}>
        <Card>
          <CardActionArea
            onClick={() =>
              navigate("/test", {
                state: { name, selectedTest: testKey },
              })
            }
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {test.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Попыток: {attempts}
              </Typography>

              {attempts > 0 ? (
                <Box display="flex" alignItems="center" mt={1}>
                  <Box width="100%" mr={1}>
                    <LinearProgress
                      variant="determinate"
                      value={bestPercentage}
                    />
                  </Box>
                  <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">
                      {Math.round(bestPercentage)}%
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Typography variant="body2" color="textSecondary">
                  Тест ещё не проходился
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };

  return (
    <Box p={4}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        Назад
      </Button>

      <Typography variant="h4" gutterBottom>
        Доступные тесты
      </Typography>

      <ProgressRing />

      <Grid container spacing={3}>
        {Object.entries(testData).map(([key, test]) =>
          renderCard(key, test.id)
        )}
      </Grid>
    </Box>
  );
};

export default Tests;
