import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  useAssignAccessKeyMutation,
  useMakeAdminMutation,
  useRevokeAccessKeyMutation,
  useRevokeAdminMutation,
} from "../../api/userApi";

export const useUserManagement = (
  selectedUserId: number | null,
  refetchUsers: () => void
) => {
  const [assignAccessKey] = useAssignAccessKeyMutation();
  const [revokeAccessKey] = useRevokeAccessKeyMutation();
  const [makeAdmin] = useMakeAdminMutation();
  const [revokeAdmin] = useRevokeAdminMutation();

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

  return {
    handleAssign,
    handleToggleAdmin,
  };
};
