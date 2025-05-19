import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from "@mui/material";
import BtnCustom from "../../ui/BtnCustom";
import styles from "./HistoryBlock.module.scss";
import { useGetUserProgressQuery } from "../../api/progressApi";
import { LocationState } from "./useTestLogic";
import { useLocation } from "react-router-dom";

interface HistoryBlockProps {
  selectedTest: string;
  MAX_ATTEMPTS: number;
  attemptsUsed: number;
}

const HistoryBlock: React.FC<HistoryBlockProps> = ({
  selectedTest,
  attemptsUsed,
  MAX_ATTEMPTS,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const { courseId } = (location.state as LocationState) || {};
  const { data: progressData } = useGetUserProgressQuery({ courseId });

  const history = progressData?.history?.[selectedTest] || [];

  return (
    <Box sx={{ mb: 2, borderRadius: 2 }}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Chip
          label={`Попыток ${attemptsUsed} из ${MAX_ATTEMPTS}`}
          color={attemptsUsed >= MAX_ATTEMPTS ? "error" : "primary"}
          variant="filled"
        />

        <BtnCustom
          variant="outlined"
          color="secondary"
          text={
            isVisible ? "Скрыть историю попыток" : "Показать историю попыток"
          }
          onClick={() => setIsVisible((prev) => !prev)}
        />
      </Box>

      {isVisible && (
        <>
          <Typography variant="h6" gutterBottom>
            История попыток
          </Typography>

          {history.length === 0 ? (
            <Box className={styles.nothistory}>
              Нет данных о предыдущих попытках.
            </Box>
          ) : (
            <List>
              {history.map((entry: any, index: number) => (
                <React.Fragment key={index}>
                  <ListItem
                    sx={{
                      border: `2px solid ${
                        entry.grade === 2 ? "red" : "green"
                      }`,
                      borderRadius: "8px",
                      mb: 1,
                    }}
                  >
                    <ListItemText
                      primary={`Попытка #${index + 1}`}
                      secondary={`Оценка: ${entry.grade} | Правильных ответов: ${entry.correctAnswers} | Результат: ${entry.percentage}%`}
                    />
                  </ListItem>
                  {index < history.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </>
      )}
    </Box>
  );
};

export default HistoryBlock;
