import React from "react";
import { Card, CardContent, Typography, Grid, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { modules } from "./modules";

const TaskBook: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/tasks/${id}`);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Электронный задачник
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Практикуй навыки frontend-разработки с помощью интерактивных задач по
        HTML, CSS, JavaScript и др. Выбирай модуль, решай задания и повышай свой
        уровень!
      </Typography>

      <Grid container spacing={3}>
        {modules.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              onClick={() => handleClick(item.id)}
              sx={{
                cursor: "pointer",
                borderRadius: "20px",
                transition: "0.2s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  {item.icon}
                  <Box>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography color="text.secondary">
                      {item.taskCount} задач
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskBook;
