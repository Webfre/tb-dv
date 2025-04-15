import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

interface HistoryEntry {
  attempts: number;
  correctAnswers: number;
  percentage: number;
  grade: number;
  selectedAnswers: { [key: number]: number[] };
}

interface HistoryBlockProps {
  selectedTest: string;
}

const HistoryBlock: React.FC<HistoryBlockProps> = ({ selectedTest }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isVisible, setIsVisible] = useState(true); // Управление видимостью блока

  const loadHistory = () => {
    const storedHistory = localStorage.getItem(`history_${selectedTest}`);

    if (storedHistory) {
      try {
        const parsedHistory: HistoryEntry[] = JSON.parse(storedHistory);
        setHistory(parsedHistory);
      } catch (error) {
        setHistory([]);
      }
    } else {
      setHistory([]);
    }
  };

  useEffect(() => {
    loadHistory(); // Загружаем при монтировании

    // Следим за изменениями localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === `history_${selectedTest}`) {
        loadHistory();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [selectedTest]);

  return (
    <Box sx={{ mb: 4, borderRadius: 2 }}>
      <Button
        variant="text"
        color="primary"
        onClick={() => setIsVisible((prev) => !prev)}
        fullWidth
      >
        {isVisible ? "Скрыть историю попыток" : "Показать историю попыток"}
      </Button>

      {isVisible && (
        <>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            История попыток
          </Typography>

          {history.length === 0 ? (
            <Typography variant="body2">
              Нет данных о предыдущих попытках.
            </Typography>
          ) : (
            <List>
              {history.map((entry, index) => (
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
