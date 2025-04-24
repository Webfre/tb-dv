import React from "react";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface TaskListHeaderProps {
  moduleId?: string;
}

const TaskListHeader: React.FC<TaskListHeaderProps> = ({ moduleId }) => {
  return (
    <Box display="flex" alignItems="center" gap={1} mb={2}>
      <Typography variant="h4">Задачи по {moduleId?.toUpperCase()}</Typography>

      <Tooltip
        title={
          <Box>
            <Box display="flex" gap={1} alignItems="center">
              <StarBorderIcon fontSize="small" sx={{ color: "#000" }} />
              <Box>— уровень сложности:</Box>
            </Box>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>1–2 — легко</li>
              <li>3 — средне</li>
              <li>4–5 — сложно</li>
            </ul>
          </Box>
        }
        arrow
        placement="right"
      >
        <IconButton size="small" sx={{ p: 0.5 }}>
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TaskListHeader;
