import React from "react";
import { mentors } from "./mentorsData";
import { Box, Grid, Paper, Typography, Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./MentorList.module.scss";

const MentorList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box p={2}>
      <Paper elevation={3} className={styles.headerCard}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Менторы Frontarium
        </Typography>
        <Typography variant="body1">
          Наши менторы — это опытные практики, которые сопровождают студентов на
          всех этапах обучения. Вы можете обращаться к ним по вопросам,
          связанным с прохождением курса, разбором тем, закреплением знаний,
          повышением квалификации и карьерным ростом. Менторы проверяют
          практические работы, дают рекомендации по улучшению кода, помогают
          разобраться в сложных концепциях и поддерживают вас в процессе
          освоения frontend-разработки.
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        {mentors.map((mentor) => (
          <Grid item xs={12} key={mentor.id}>
            <Paper
              elevation={2}
              className={styles.courseCard}
              onClick={() => navigate(`/panel/mentorlist/${mentor.id}`)}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  src={mentor.avatarUrl}
                  alt={mentor.fullName}
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography variant="h6">{mentor.fullName}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {mentor.grade}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mentor.about}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MentorList;
