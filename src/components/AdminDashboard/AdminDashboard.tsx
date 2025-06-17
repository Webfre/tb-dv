import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
} from "@mui/material";
import FeatureRequestList from "../GlobalHelpDrawer/FeatureRequestList";
import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../api/userApi";
import styles from "./AdminDashboard.module.scss";
import AdminToggleButton from "./AdminToggleButton";
import BtnCustom from "../../ui/BtnCustom";

const AdminDashboard: React.FC = () => {
  const { data: users, isLoading, error, refetch } = useGetAllUsersQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Box mt={6} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={6} textAlign="center">
        <Typography color="error">Ошибка загрузки пользователей</Typography>
        <Typography color="error">
          Попробуйте Выйти из Профиля и заново зайти
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <FeatureRequestList />

      <Typography mt={4} variant="h5" gutterBottom>
        Зарегистрированные пользователи
      </Typography>

      <Paper sx={{ p: 4 }}>
        <List>
          {users && users.length > 0 ? (
            users.map((user) => (
              <ListItem className={styles.list} key={user.id} divider>
                <ListItemText
                  primary={`${user.lastName} ${user.firstName} ${user.middleName}`}
                  secondary={
                    <>
                      📧 {user.email} | 📱 {user.phone} |
                      {user.telegram && ` | Telegram: ${user.telegram}`}
                      {user.isAdmin && ` | 👑 Админ`}
                    </>
                  }
                />

                <Box sx={{ display: "flex", gap: 1 }}>
                  <BtnCustom
                    text="Подробнее"
                    onClick={() => navigate(`/panel/admin/user/${user.id}`)}
                  />

                  <AdminToggleButton
                    isAdmin={user.isAdmin}
                    userId={user.id}
                    refetch={refetch}
                  />
                </Box>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2">
              Нет зарегистрированных пользователей
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
