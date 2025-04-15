import React from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AdminDashboard: React.FC = () => {
  const users: any[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("userData")) {
      try {
        const user = JSON.parse(localStorage.getItem(key)!);
        users.push(user);
      } catch {}
    }
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ mt: 4, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Зарегистрированные пользователи
        </Typography>
        <List>
          {users.length > 0 ? (
            users.map((user, idx) => (
              <ListItem key={idx} divider>
                <ListItemText
                  primary={`${user.lastName} ${user.firstName} ${user.middleName}`}
                  secondary={
                    <>
                      📧 {user.email} | 📱 {user.phone} | 🧾 Ключ:{" "}
                      {user.accessKey}
                      {user.telegram && ` | Telegram: ${user.telegram}`}
                    </>
                  }
                />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2">
              Нет зарегистрированных пользователей
            </Typography>
          )}
        </List>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
