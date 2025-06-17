import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import { LiaAngellist } from "react-icons/lia";
import { CiCircleCheck } from "react-icons/ci";
import { useGetUserProgressQuery } from "../../api/progressApi";
import { LocationState } from "./useTestLogic";
import { useLocation } from "react-router-dom";
import { chip_sx } from "../../styles/global";
import BtnCustom from "../../ui/BtnCustom";
import classNames from "classnames";
import styles from "./HistoryBlock.module.scss";

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

  const history = React.useMemo(() => {
    const rawHistory = progressData?.history?.[selectedTest];
    return rawHistory && typeof rawHistory === "object"
      ? Object.values(rawHistory)
      : [];
  }, [progressData?.history, selectedTest]);

  return (
    <Box sx={{ mb: 2, borderRadius: 2 }}>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Chip
          label={`Попыток ${attemptsUsed} из ${MAX_ATTEMPTS}`}
          color={attemptsUsed >= MAX_ATTEMPTS ? "error" : "primary"}
          variant="filled"
          sx={chip_sx}
        />

        <BtnCustom
          variant="outlined"
          color="secondary"
          customColor="#846ee6"
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
              Упс! Пока что ни одной попытки. Самое время начать
              <LiaAngellist style={{ fontSize: 26 }} />
            </Box>
          ) : (
            <List>
              {history.map((entry: any, index: number) => (
                <React.Fragment key={index}>
                  <ListItem className={classNames(styles.card)}>
                    {entry.grade === 2 ? (
                      <CiCircleCheck
                        size={24}
                        color="#a71e34"
                        style={{ marginRight: 8 }}
                      />
                    ) : (
                      <CiCircleCheck
                        size={24}
                        color="#4caf50"
                        style={{ marginRight: 8 }}
                      />
                    )}

                    <ListItemText
                      primary={`Попытка #${index + 1}`}
                      secondary={`Правильных ответов: ${entry.correctAnswers} | Результат: ${entry.percentage}%`}
                    />
                  </ListItem>
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
