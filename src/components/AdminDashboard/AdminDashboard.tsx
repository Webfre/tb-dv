import React from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import BtnCustom from "../../ui/BtnCustom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FeatureRequestList from "../GlobalHelpDrawer/FeatureRequestList";
import { useUserDialogManager } from "./useUserDialogManager";
import { useUserManagement } from "./useUserManagement";
import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../api/userApi";
import AccessConfirmDialog from "./AccessConfirmDialog";
import AdminConfirmDialog from "./AdminConfirmDialog";

const AdminDashboard: React.FC = () => {
  const { data: users, isLoading, error, refetch } = useGetAllUsersQuery();
  const navigate = useNavigate();

  const {
    selectedUserId,
    selectedUser,
    openAccessDialog,
    openAdminDialog,
    setOpenAccessDialog,
    setOpenAdminDialog,
    openAccessConfirm,
    openAdminConfirm,
  } = useUserDialogManager(users);

  const { handleAssign, handleToggleAdmin } = useUserManagement(
    selectedUserId,
    refetch
  );

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
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <FeatureRequestList />

      <Paper sx={{ mt: 4, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Зарегистрированные пользователи
        </Typography>

        <List>
          {users && users.length > 0 ? (
            users.map((user) => (
              <ListItem
                key={user.id}
                divider
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/admin/user/${user.id}`)}
              >
                <ListItemText
                  primary={`${user.lastName} ${user.firstName} ${user.middleName}`}
                  secondary={
                    <>
                      📧 {user.email} | 📱 {user.phone} | 🔐 Ключ:{" "}
                      {user.accessKey || "не выдан"}
                      {user.telegram && ` | Telegram: ${user.telegram}`}
                      {user.isAdmin && ` | 👑 Админ`}
                    </>
                  }
                />

                <Box sx={{ display: "flex", gap: 1 }}>
                  <BtnCustom
                    sx={{ minWidth: 180 }}
                    text={
                      user.isAccessKey
                        ? "Закрыть доступ"
                        : "Открыть доступ к курсу"
                    }
                    variant="outlined"
                    color={user.isAccessKey ? "error" : "primary"}
                    onClick={(e) => {
                      e.stopPropagation();
                      openAccessConfirm(user.id);
                    }}
                  />

                  <Tooltip
                    title={
                      user.isAdmin
                        ? "Снять права администратора"
                        : "Сделать админом"
                    }
                  >
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        openAdminConfirm(user.id);
                      }}
                    >
                      <AdminPanelSettingsIcon
                        sx={{
                          color: user.isAdmin ? "primary.main" : "grey.500",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
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

      <AccessConfirmDialog
        open={openAccessDialog}
        onClose={() => setOpenAccessDialog(false)}
        onConfirm={() => handleAssign(selectedUser?.isAccessKey)}
      />

      <AdminConfirmDialog
        open={openAdminDialog}
        onClose={() => setOpenAdminDialog(false)}
        onConfirm={() => handleToggleAdmin(selectedUser?.isAdmin)}
        isAdmin={selectedUser?.isAdmin}
      />
    </Container>
  );
};

export default AdminDashboard;
