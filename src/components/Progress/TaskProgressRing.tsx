import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { practiceMock } from "../../DB/taskData";
import { useGetSolvedTasksQuery } from "../../api/progressApi";

const TaskProgressRing: React.FC = () => {
  const totalTasks = practiceMock.length;
  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const solvedCount = solvedTasks.length;
  const taskProgress = totalTasks === 0 ? 0 : (solvedCount / totalTasks) * 100;

  return (
    <Box textAlign="center">
      <Box
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          border: "6px solid #e0e0e0",
        }}
      >
        <CircularProgress
          variant="determinate"
          value={taskProgress}
          size={100}
          thickness={5}
          color="secondary"
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" component="div" color="textSecondary">
            {`${Math.round(taskProgress)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" mt={2}>
        Решено задач: {solvedCount} из {totalTasks}
      </Typography>
    </Box>
  );
};

export default TaskProgressRing;
