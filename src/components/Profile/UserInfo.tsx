import React from "react";
import { Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { useGetMyProfileQuery } from "../../api/userApi";

const userFields = [
  { name: "lastName", label: "Фамилия" },
  { name: "firstName", label: "Имя" },
  { name: "middleName", label: "Отчество" },
  { name: "email", label: "Email" },
  { name: "telegram", label: "Telegram" },
  { name: "phone", label: "Телефон" },
];

const UserInfo: React.FC = () => {
  const { data: userData, isLoading, error } = useGetMyProfileQuery();

  if (isLoading) return <CircularProgress />;
  if (error || !userData)
    return <Typography color="error">Ошибка загрузки данных</Typography>;

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Персональная информация
      </Typography>

      <Grid container spacing={2}>
        {userFields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name}>
            <Typography variant="subtitle2" color="textSecondary">
              {field.label}
            </Typography>
            <Typography variant="body1">
              {userData[field.name as keyof typeof userData] || "—"}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UserInfo;
