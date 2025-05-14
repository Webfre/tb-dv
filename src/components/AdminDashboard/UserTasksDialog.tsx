import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  Typography,
} from "@mui/material";

interface Task {
  id: string;
  resolved: boolean;
}

interface UserTasksDialogProps {
  open: boolean;
  onClose: () => void;
  tasks: Task[] | undefined;
  onToggleTask: (taskId: string, resolved: boolean) => void;
  userName?: string;
}

const UserTasksDialog: React.FC<UserTasksDialogProps> = ({
  open,
  onClose,
  tasks,
  onToggleTask,
  userName,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Практические задачи пользователя: {userName}</DialogTitle>
      <DialogContent>
        <List>
          {tasks?.map((task) => (
            <ListItem key={task.id}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.resolved}
                  onChange={() => onToggleTask(task.id, task.resolved)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={task.id} />
              <ListItemSecondaryAction>
                <Typography
                  color={task.resolved ? "success.main" : "text.secondary"}
                >
                  {task.resolved ? "Выполнено" : "Не выполнено"}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Закрыть</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserTasksDialog;
