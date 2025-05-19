import React from "react";
import { Typography, Grid, Paper, CircularProgress } from "@mui/material";
import { useGetMyProfileQuery } from "../../api/userApi";

const UserInfo: React.FC = () => {
  const { data: userData, isLoading, error } = useGetMyProfileQuery();

  if (isLoading) return <CircularProgress />;
  if (error || !userData)
    return <Typography color="error">Ошибка загрузки данных</Typography>;

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 2,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Персональная информация
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Фамилия
          </Typography>
          <Typography variant="body1">{userData.lastName || "—"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Имя
          </Typography>
          <Typography variant="body1">{userData.firstName || "—"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Отчество
          </Typography>
          <Typography variant="body1">{userData.middleName || "—"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Email
          </Typography>
          <Typography variant="body1">{userData.email || "—"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Телефон
          </Typography>
          <Typography variant="body1">{userData.phone || "—"}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Telegram
          </Typography>
          <Typography variant="body1">{userData.telegram || "—"}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserInfo;
