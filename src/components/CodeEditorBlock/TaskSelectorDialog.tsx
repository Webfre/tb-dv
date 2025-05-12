import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Level } from "./data";
import { Task } from "./tasks/types";

interface TaskSelectorDialogProps {
  open: boolean;
  level: Level | null;
  tasks: Task[];
  onClose: () => void;
  onSelect: (task: Task) => void;
}

const TaskSelectorDialog: React.FC<TaskSelectorDialogProps> = ({
  open,
  tasks,
  level,
  onClose,
  onSelect,
}) => {
  const [solved, setSolved] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    if (open && level) {
      // const allSolved = getSolvedTasks();
      // const solvedForLevel = allSolved
      //   .filter((t) => t.level === level)
      //   .reduce((acc, t) => ({ ...acc, [t.id]: true }), {});
      // setSolved(solvedForLevel);
    }
  }, [open, level]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Выберите задачу из списка</DialogTitle>
      <DialogContent>
        <List>
          {tasks.map((task) => (
            <ListItemButton
              key={task.id}
              onClick={() => onSelect(task)}
              sx={{
                bgcolor: solved[task.id] ? "#d0f0d0" : "transparent",
              }}
            >
              <ListItemText primary={task.title} />
            </ListItemButton>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskSelectorDialog;
