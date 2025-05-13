import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import BtnCustom from "../../ui/BtnCustom";
import styles from "./Flashback.module.scss";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface FlashbackTestResultProps {
  open: boolean;
  percent: number;
  correctCount: number;
  totalQuestions: number;
  topics: string;
  stats: {
    byModules: Record<string, { correct: number; incorrect: number }>;
    bySections: Record<string, { correct: number; incorrect: number }>;
  };
  onClose: () => void;
}

const COLORS = ["#1976d2", "#b64a3e"];

const renderCustomLabel = (props: any) => {
  const { percent, name, x, y } = props;
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
    >
      {percent > 0 ? `${(percent * 100).toFixed(0)}%` : ""}
    </text>
  );
};

const FlashbackTestResult: React.FC<FlashbackTestResultProps> = ({
  open,
  percent,
  correctCount,
  totalQuestions,
  topics,
  stats,
  onClose,
}) => {
  // 🔍 Рекомендации: Модули и разделы с результатом ниже 55%
  const recommendations: string[] = [];

  const checkRecommendation = (
    name: string,
    correct: number,
    total: number
  ) => {
    const percent = total ? (correct / total) * 100 : 0;
    if (percent < 55) {
      recommendations.push(name);
    }
  };

  // Проверяем модули на необходимость повторения
  Object.entries(stats.byModules).forEach(([moduleName, data]) => {
    const total = data.correct + data.incorrect;
    checkRecommendation(`Модуль: ${moduleName}`, data.correct, total);
  });

  // Проверяем разделы на необходимость повторения
  Object.entries(stats.bySections).forEach(([section, data]) => {
    const total = data.correct + data.incorrect;
    checkRecommendation(`Раздел: ${section}`, data.correct, total);
  });

  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: "20px",
          p: 1,
          minWidth: "800px",
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Результат теста</DialogTitle>
      <DialogContent>
        <Typography mb={2}>
          Вы завершили тест. Ваш результат: <strong>{percent}%</strong>
        </Typography>
        <Typography>
          Правильных ответов: <strong>{correctCount}</strong> из{" "}
          <strong>{totalQuestions}</strong>
        </Typography>
        <Typography mt={2}>
          Пройденные темы: <strong>{topics}</strong>
        </Typography>

        <Box mt={4} className={styles.diagramBlock}>
          <Typography variant="h6" mb={2}>
            Статистика по Модулям:
          </Typography>

          <Grid container spacing={2}>
            {Object.entries(stats.byModules).map(
              ([moduleName, data], index) => {
                const total = data.correct + data.incorrect;
                const correctPercent = total
                  ? ((data.correct / total) * 100).toFixed(1)
                  : "0";
                const incorrectPercent = total
                  ? ((data.incorrect / total) * 100).toFixed(1)
                  : "0";

                return (
                  <Grid item xs={6} key={moduleName}>
                    <Typography textAlign="center">
                      {moduleName.toUpperCase()}
                    </Typography>

                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Tooltip
                          formatter={(value, name) => {
                            const total = data.correct + data.incorrect;
                            const percentage = total
                              ? ((value as number) / total) * 100
                              : 0;
                            return [
                              `${value} (${percentage.toFixed(1)}%)`,
                              `${name}`,
                            ];
                          }}
                        />
                        <Pie
                          data={[
                            { name: "Правильные", value: data.correct },
                            { name: "Неправильные", value: data.incorrect },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={renderCustomLabel}
                          labelLine={false}
                        >
                          <Cell fill={COLORS[0]} />
                          <Cell fill={COLORS[1]} />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>

                    <Box display="flex" justifyContent="space-around" mt={1}>
                      <Typography
                        className={styles.correctTitle}
                        color="primary"
                      >
                        Правильные: {correctPercent}%
                      </Typography>
                      <Typography className={styles.correctTitle} color="error">
                        Неправильные: {incorrectPercent}%
                      </Typography>
                    </Box>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Box>

        <Box mt={4} className={styles.diagramBlock}>
          <Typography variant="h6" mb={2}>
            Статистика по Темам:
          </Typography>

          <Grid container spacing={4}>
            {Object.entries(stats.bySections).map(([section, data], index) => {
              const total = data.correct + data.incorrect;
              const correctPercent = total
                ? ((data.correct / total) * 100).toFixed(1)
                : "0";
              const incorrectPercent = total
                ? ((data.incorrect / total) * 100).toFixed(1)
                : "0";

              return (
                <Grid item xs={6} key={section}>
                  <Typography textAlign="center" mb={1}>
                    {section}
                  </Typography>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Tooltip
                        formatter={(value, name) => {
                          const total = data.correct + data.incorrect;
                          const percentage = total
                            ? ((value as number) / total) * 100
                            : 0;
                          return [
                            `${value} (${percentage.toFixed(1)}%)`,
                            `${name}`,
                          ];
                        }}
                      />
                      <Pie
                        data={[
                          { name: "Правильные", value: data.correct },
                          { name: "Неправильные", value: data.incorrect },
                        ]}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={renderCustomLabel}
                        labelLine={false}
                      >
                        <Cell fill={COLORS[0]} />
                        <Cell fill={COLORS[1]} />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  <Box display="flex" justifyContent="space-around" mt={1}>
                    <Typography className={styles.correctTitle} color="primary">
                      Правильные: {correctPercent}%
                    </Typography>
                    <Typography className={styles.correctTitle} color="error">
                      Неправильные: {incorrectPercent}%
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {recommendations.length > 0 && (
          <Box mt={4} p={2} bgcolor="#f5f5f5" borderRadius="8px">
            <Typography variant="h6" gutterBottom>
              Рекомендации:
            </Typography>
            {recommendations.map((rec, idx) => (
              <Typography key={idx} color="info">
                Повторите - {rec}
              </Typography>
            ))}
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <BtnCustom text="Завершить" variant="contained" onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default FlashbackTestResult;
