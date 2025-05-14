import React, { useMemo } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Link,
  List,
  ListItem,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Chip,
  Alert,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { mentors } from "./mentorsData";
import BtnCustom from "../../ui/BtnCustom";

const MentorProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const mentorId = Number(id);

  const frontMentor = useMemo(
    () => mentors.find((m) => m.id === mentorId),
    [mentorId]
  );

  if (!frontMentor) {
    return (
      <Box p={4}>
        <Alert severity="error" sx={{ mt: 2 }}>
          Ментор с ID {id} не найден. Пожалуйста, проверьте ссылку или вернитесь
          на страницу списка менторов.
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {/* Левая колонка */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Box textAlign="center">
              <Avatar
                src={frontMentor?.avatarUrl}
                sx={{ width: 120, height: 120, mb: 2, mx: "auto" }}
              />

              <Typography variant="h6">{frontMentor?.fullName}</Typography>

              <Typography variant="subtitle1" color="textSecondary">
                {frontMentor?.grade}
              </Typography>
            </Box>

            <Typography variant="body2" mt={2}>
              <br />
              Телефон: {frontMentor?.phone}
              <br />
              Почта: {frontMentor?.email}
            </Typography>

            <Typography
              variant="body2"
              mt={2}
              color="text.secondary"
              fontStyle="italic"
            >
              При выполнении практических работ присылайте архив файлов на почту
              или в Telegram своему ментору{" "}
              <strong>(укажите свое ФИО и номер Практической задачи)</strong>
            </Typography>

            <Link
              href={frontMentor?.telegram}
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <BtnCustom
                text="Написать в Telegram"
                variant="outlined"
                fullWidth
                sx={{ mt: 3 }}
              />
            </Link>
          </Paper>
        </Grid>

        {/* Правая колонка */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom mt={3}>
              Специализация
            </Typography>
            <Typography variant="body1" paragraph>
              {frontMentor?.specialization}
            </Typography>

            <Typography variant="h6" gutterBottom mt={3}>
              О себе
            </Typography>
            <Typography variant="body1" paragraph>
              {frontMentor?.about}
            </Typography>

            <Typography variant="h6" gutterBottom mt={3}>
              Темы менторства
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {frontMentor?.topics?.map((topic: string, idx: number) => (
                <Chip key={idx} label={topic} variant="outlined" />
              ))}
            </Box>

            <Typography mt={3} variant="h6" gutterBottom>
              Профессиональная помощь
            </Typography>

            {Array.isArray(frontMentor?.helpWith) ? (
              <Stepper orientation="vertical" activeStep={-1}>
                {frontMentor?.helpWith.map((step: string, index: number) => (
                  <Step key={index}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            ) : (
              <Typography variant="body1">{frontMentor?.helpWith}</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorProfilePage;
