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
import {
  useGetAllUsersQuery,
  useGetUserTaskTopicsQuery,
} from "../../api/userApi";
import AccessConfirmDialog from "./AccessConfirmDialog";
import AdminConfirmDialog from "./AdminConfirmDialog";
import UserTasksDialog from "./UserTasksDialog";

const AdminDashboard: React.FC = () => {
  const { data: users, isLoading, error, refetch } = useGetAllUsersQuery();

  const {
    selectedUserId,
    selectedUser,
    openAccessDialog,
    openAdminDialog,
    openTasksDialog,
    setOpenAccessDialog,
    setOpenAdminDialog,
    setOpenTasksDialog,
    openAccessConfirm,
    openAdminConfirm,
    openTasksDialogHandler,
  } = useUserDialogManager(users);

  const { data: taskTopics, refetch: refetchTopics } =
    useGetUserTaskTopicsQuery(selectedUserId || 0, {
      skip: !selectedUserId || !openTasksDialog,
    });

  const { handleAssign, handleToggleAdmin, handleToggleTaskStatus } =
    useUserManagement(selectedUserId, refetch, refetchTopics);

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
                onClick={() => openTasksDialogHandler(user.id)}
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

      <UserTasksDialog
        open={openTasksDialog}
        onClose={() => setOpenTasksDialog(false)}
        tasks={taskTopics}
        onToggleTask={handleToggleTaskStatus}
        userName={
          selectedUser
            ? `${selectedUser.firstName} ${selectedUser.lastName}`
            : ""
        }
      />
    </Container>
  );
};

export default AdminDashboard;
