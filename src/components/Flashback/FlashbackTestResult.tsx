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
import { Stats } from "./useTestStatistics";
import { useRecommendations } from "./useRecommendations";
import Recommendations from "./Recommendations";

interface FlashbackTestResultProps {
  open: boolean;
  percent: number;
  correctCount: number;
  totalQuestions: number;
  topics: string;
  stats: Stats;
  onClose: () => void;
}

const COLORS = ["#1976d2", "#b64a3e"];

const renderCustomLabel = (props: any) => {
  const { percent, x, y } = props;
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
  const { recommendationsModules, recommendationsSections } =
    useRecommendations(stats);

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

        {(recommendationsModules.length > 0 ||
          recommendationsSections.length > 0) && (
          <Recommendations
            modules={recommendationsModules}
            sections={recommendationsSections}
          />
        )}
      </DialogContent>

      <DialogActions>
        <BtnCustom text="Завершить" variant="contained" onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default FlashbackTestResult;
