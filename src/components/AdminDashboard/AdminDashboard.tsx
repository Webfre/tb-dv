import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  useGetAllUsersQuery,
  useAssignAccessKeyMutation,
  useMakeAdminMutation,
  useRevokeAccessKeyMutation,
  useRevokeAdminMutation,
} from "../../api/api";
import { toast } from "react-toastify";
import BtnCustom from "../../ui/BtnCustom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FeatureRequestList from "../GlobalHelpDrawer/FeatureRequestList";

const AdminDashboard: React.FC = () => {
  const { data: users, isLoading, error, refetch } = useGetAllUsersQuery();
  const [assignAccessKey] = useAssignAccessKeyMutation();
  const [makeAdmin] = useMakeAdminMutation();
  const [revokeAccessKey] = useRevokeAccessKeyMutation();
  const [revokeAdmin] = useRevokeAdminMutation();

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openAccessDialog, setOpenAccessDialog] = useState(false);
  const [openAdminDialog, setOpenAdminDialog] = useState(false);

  const handleAssign = async () => {
    if (!selectedUserId || !users) return;

    try {
      const user = users.find((u) => u.id === selectedUserId);
      if (user?.isAccessKey) {
        await revokeAccessKey(selectedUserId).unwrap();
        toast.success("Доступ к курсу закрыт");
      } else {
        await assignAccessKey(selectedUserId).unwrap();
        toast.success("Доступ к курсу открыт");
      }

      refetch();
    } catch {
      toast.error("Ошибка при обновлении доступа");
    } finally {
      setOpenAccessDialog(false);
    }
  };

  const handleToggleAdmin = async () => {
    if (!selectedUserId || !users) return;

    try {
      const user = users.find((u) => u.id === selectedUserId);
      if (user?.isAdmin) {
        await revokeAdmin(selectedUserId).unwrap();
        toast.success("Права администратора сняты");
      } else {
        await makeAdmin(selectedUserId).unwrap();
        toast.success("Пользователь назначен админом");
      }

      refetch();
    } catch {
      toast.error("Ошибка при обновлении прав администратора");
    } finally {
      setOpenAdminDialog(false);
    }
  };

  const openAccessConfirm = (id: number) => {
    setSelectedUserId(id);
    setOpenAccessDialog(true);
  };

  const openAdminConfirm = (id: number) => {
    setSelectedUserId(id);
    setOpenAdminDialog(true);
  };

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
                }}
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
                    onClick={() => openAccessConfirm(user.id)}
                  />

                  <Tooltip
                    title={
                      user.isAdmin
                        ? "Снять права администратора"
                        : "Сделать админом"
                    }
                  >
                    <IconButton onClick={() => openAdminConfirm(user.id)}>
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

      {/* Модалка для доступа */}
      <Dialog
        open={openAccessDialog}
        onClose={() => setOpenAccessDialog(false)}
      >
        <DialogTitle>Подтверждение доступа</DialogTitle>
        <DialogContent>
          <Typography>
            Вы уверены, что хотите обновить доступ к курсу для пользователя?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAccessDialog(false)}>Отмена</Button>
          <Button onClick={handleAssign} variant="contained" color="primary">
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>

      {/* Модалка для назначения админом */}
      <Dialog open={openAdminDialog} onClose={() => setOpenAdminDialog(false)}>
        <DialogTitle>Изменение прав администратора</DialogTitle>
        <DialogContent>
          <Typography>
            {users?.find((u) => u.id === selectedUserId)?.isAdmin
              ? "Вы уверены, что хотите снять права администратора?"
              : "Вы уверены, что хотите назначить пользователя админом?"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAdminDialog(false)}>Отмена</Button>
          <Button
            onClick={handleToggleAdmin}
            variant="contained"
            color="primary"
          >
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;
