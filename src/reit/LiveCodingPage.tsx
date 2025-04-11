import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Level, levelColors, LEVELS, mockTasks } from "./data";
import TaskSelectorDialog from "./TaskSelectorDialog";
import CodeEditorBlock from "./CodeEditorBlock";
import { Task } from "./tasks/types";

const LiveCodingPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [code, setCode] = useState("// Напишите свое решение здесь...");

  const handleLevelClick = (level: Level) => {
    setSelectedLevel(level);
    setOpenDialog(true);
  };

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);

    // вставляем описание как комментарий
    const commentedDescription = `// ${task.title}\n// ${task.description}\n\n${task.initialCode}`;
    setCode(commentedDescription);

    setOpenDialog(false);
  };

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} md={3}>
        <Typography variant="h6" gutterBottom>
          Выберите уровень
        </Typography>
        {LEVELS.map((level) => (
          <Card
            key={level}
            sx={{
              mb: 2,
              borderLeft: `6px solid ${levelColors[level]}`,
              bgcolor: "#fafafa",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <CardActionArea onClick={() => handleLevelClick(level)}>
              <CardContent>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="textPrimary"
                >
                  {level}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>

      <Grid item xs={12} md={9}>
        <CodeEditorBlock task={selectedTask} code={code} onChange={setCode} />
      </Grid>

      <TaskSelectorDialog
        open={openDialog}
        level={selectedLevel}
        tasks={selectedLevel ? mockTasks[selectedLevel] : []}
        onClose={() => setOpenDialog(false)}
        onSelect={handleTaskSelect}
      />
    </Grid>
  );
};

export default LiveCodingPage;
