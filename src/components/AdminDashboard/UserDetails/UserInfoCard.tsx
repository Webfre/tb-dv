import React from "react";
import { Paper, Typography } from "@mui/material";

interface UserInfoCardProps {
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  phone: string;
  telegram?: string;
  isAdmin: boolean;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  lastName,
  firstName,
  middleName,
  email,
  phone,
  telegram,
  isAdmin,
}) => {
  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Информация о пользователе
      </Typography>

      <Typography variant="body1">
        <strong>ФИО:</strong> {lastName} {firstName} {middleName}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {email}
      </Typography>
      <Typography variant="body1">
        <strong>Телефон:</strong> {phone}
      </Typography>
      <Typography variant="body1">
        <strong>Telegram:</strong> {telegram || "Не указан"}
      </Typography>
      <Typography variant="body1">
        <strong>Права администратора:</strong> {isAdmin ? "Admin" : "User"}
      </Typography>
    </Paper>
  );
};

export default UserInfoCard;
