import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { prDataList } from "../../../DB/prDataList";

interface UserTaskFormProps {
  onSubmit: (data: {
    moduleId: string;
    taskId: string;
    title: string;
    resolved: boolean;
  }) => void;
}

const UserTaskForm: React.FC<UserTaskFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      moduleId: "",
      taskId: "",
      title: "",
      resolved: false,
    },
  });

  const selectedModuleId = watch("moduleId");

  const filteredTasks = prDataList.filter(
    (item) => item.moduleId === selectedModuleId
  );

  const handleFormSubmit = (data: any) => {
    const selectedTask = prDataList.find((task) => task.id === data.taskId);
    onSubmit({
      moduleId: data.moduleId,
      taskId: data.taskId,
      title: selectedTask?.title || "",
      resolved: data.resolved,
    });
  };

  return (
    <Box
      component="form"
      sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Controller
        name="moduleId"
        control={control}
        rules={{ required: "Выберите модуль" }}
        render={({ field }) => (
          <FormControl fullWidth error={Boolean(errors.moduleId)}>
            <InputLabel>Выберите модуль</InputLabel>
            <Select {...field} label="Выберите модуль">
              {Array.from(new Set(prDataList.map((item) => item.moduleId))).map(
                (moduleId) => (
                  <MenuItem key={moduleId} value={moduleId}>
                    {moduleId}
                  </MenuItem>
                )
              )}
            </Select>
            {errors.moduleId && (
              <FormHelperText>{errors.moduleId.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="taskId"
        control={control}
        rules={{ required: "Выберите работу" }}
        render={({ field }) => (
          <FormControl fullWidth error={Boolean(errors.taskId)}>
            <InputLabel>Выберите работу</InputLabel>
            <Select
              {...field}
              label="Выберите работу"
              disabled={!selectedModuleId}
            >
              {filteredTasks.map((task) => (
                <MenuItem key={task.id} value={task.id}>
                  {task.title}
                </MenuItem>
              ))}
            </Select>
            {errors.taskId && (
              <FormHelperText>{errors.taskId.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="resolved"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Зачет (ставить когда проверили работу или после исправлений)"
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
    </Box>
  );
};

export default UserTaskForm;
