import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  useAssignAccessKeyMutation,
  useMakeAdminMutation,
  useRevokeAccessKeyMutation,
  useRevokeAdminMutation,
  useUpdateUserTaskTopicMutation,
} from "../../api/userApi";

export const useUserManagement = (
  selectedUserId: number | null,
  refetchUsers: () => void,
  refetchTopics: () => void
) => {
  const [assignAccessKey] = useAssignAccessKeyMutation();
  const [revokeAccessKey] = useRevokeAccessKeyMutation();
  const [makeAdmin] = useMakeAdminMutation();
  const [revokeAdmin] = useRevokeAdminMutation();
  const [updateTaskTopic] = useUpdateUserTaskTopicMutation();

  const handleAssign = useCallback(
    async (isAccessKey?: boolean) => {
      if (!selectedUserId) return;

      try {
        if (isAccessKey) {
          await revokeAccessKey(selectedUserId).unwrap();
          toast.success("Доступ к курсу закрыт");
        } else {
          await assignAccessKey(selectedUserId).unwrap();
          toast.success("Доступ к курсу открыт");
        }
        refetchUsers();
      } catch {
        toast.error("Ошибка при обновлении доступа");
      }
    },
    [selectedUserId, assignAccessKey, revokeAccessKey, refetchUsers]
  );

  const handleToggleAdmin = useCallback(
    async (isAdmin?: boolean) => {
      if (!selectedUserId) return;

      try {
        if (isAdmin) {
          await revokeAdmin(selectedUserId).unwrap();
          toast.success("Права администратора сняты");
        } else {
          await makeAdmin(selectedUserId).unwrap();
          toast.success("Пользователь назначен админом");
        }
        refetchUsers();
      } catch {
        toast.error("Ошибка при обновлении прав администратора");
      }
    },
    [selectedUserId, makeAdmin, revokeAdmin, refetchUsers]
  );

  const handleToggleTaskStatus = useCallback(
    async (taskId: string, resolved: boolean) => {
      if (!selectedUserId) return;

      try {
        await updateTaskTopic({
          userId: selectedUserId,
          taskId,
          resolved: !resolved,
        }).unwrap();

        toast.success("Статус задачи обновлен");
        refetchTopics();
      } catch {
        toast.error("Ошибка при обновлении статуса задачи");
      }
    },
    [selectedUserId, updateTaskTopic, refetchTopics]
  );

  return {
    handleAssign,
    handleToggleAdmin,
    handleToggleTaskStatus,
  };
};
