import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  CircularProgress,
  Box,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useGetUserInfoForAdminQuery } from "../../../api/userApi";
import { useUpdateTaskTopicMutation } from "../../../api/progressApi";
import { toast } from "react-toastify";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BtnCustom from "../../../ui/BtnCustom";
import UserTaskForm from "./UserTaskForm";
import UserInfoCard from "./UserInfoCard";
import UserProgressCard from "./UserProgressCard";
import AccessToggleButton from "../AccessToggleButton";
import { useState } from "react";
import { InfoCourse } from "../../../DB/index_type";
import { courseList } from "../../../DB";

const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUserInfoForAdminQuery(Number(id));
  const [updateTaskTopic] = useUpdateTaskTopicMutation();
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<InfoCourse | null>(null);

  const handleSubmitTask = async (data: {
    moduleId: string;
    taskId: string;
    resolved: boolean;
    title: string;
  }) => {
    try {
      if (!id || !selectedCourse?.id) return;

      await updateTaskTopic({
        userId: Number(id),
        courseId: selectedCourse.id,
        data: {
          taskId: data.taskId,
          resolved: data.resolved,
          moduleId: data.moduleId,
          title: data.title,
        },
      }).unwrap();

      toast.success("Практическая работа успешно добавлена");
    } catch (error) {
      toast.error("Ошибка при добавлении практической работы");
    }
  };

  const handleOpen = (course: any) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
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
        <Typography color="error">
          Ошибка загрузки данных пользователя
        </Typography>
      </Box>
    );
  }

  if (!user) return null;

  return (
    <Box p={4}>
      <BtnCustom
        sx={{ mb: 2 }}
        text="Назад"
        icon={<NavigateBeforeIcon />}
        onClick={() => navigate(-1)}
      />

      <UserInfoCard
        lastName={user.lastName}
        firstName={user.firstName}
        middleName={user.middleName}
        email={user.email}
        phone={user.phone}
        telegram={user.telegram}
        isAdmin={user.isAdmin}
      />

      <Paper sx={{ mt: 2, p: 2 }}>
        <List sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Информация о курсах
          </Typography>

          {courseList.map((course, index) => {
            const accessCourse = user.accessCourse.find(
              (access) => access.id === course.id
            );

            return (
              <ListItem key={index} divider>
                <ListItemText primary={course.title} />

                <BtnCustom
                  text="Подробнее"
                  variant="outlined"
                  onClick={() => handleOpen(course)}
                  sx={{ marginRight: "10px" }}
                />

                <AccessToggleButton
                  accessCourse={{
                    id: course.id,
                    isAccess: accessCourse ? accessCourse.isAccess : false,
                    isPro: accessCourse?.isPro || false,
                  }}
                  userId={user.id}
                  refetch={refetch}
                />
              </ListItem>
            );
          })}
        </List>
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Прогресс по курсу: {selectedCourse?.title}</DialogTitle>
        <DialogContent dividers>
          <Box sx={{ mt: 2 }}>
            {user.progress ? (
              <Box>
                <UserProgressCard
                  courseId={selectedCourse?.id}
                  progress={user.progress}
                />

                <Paper sx={{ mt: 3, p: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    Добавить практическую работу
                  </Typography>

                  <UserTaskForm onSubmit={handleSubmitTask} />
                </Paper>
              </Box>
            ) : (
              <Paper sx={{ mt: 2, p: 2 }}>
                <Typography sx={{ mt: 2, p: 2 }} variant="body1">
                  Данные о прогрессе пользователя отсутствуют.
                </Typography>
              </Paper>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserDetails;
