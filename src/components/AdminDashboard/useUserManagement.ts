import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  useAssignAccessKeyMutation,
  useMakeAdminMutation,
  useRevokeAccessKeyMutation,
  useRevokeAdminMutation,
} from "../../api/userApi";

export const useUserManagement = (
  userId: number | null,
  refetchUser: () => void
) => {
  const [assignAccessKey] = useAssignAccessKeyMutation();
  const [revokeAccessKey] = useRevokeAccessKeyMutation();
  const [makeAdmin] = useMakeAdminMutation();
  const [revokeAdmin] = useRevokeAdminMutation();

  const handleAssign = useCallback(
    async (idCourse: number, isAccess: boolean) => {
      if (!userId) return;

      try {
        if (isAccess) {
          await revokeAccessKey({ userId, idCourse }).unwrap();
          toast.success("Доступ к курсу закрыт");
        } else {
          await assignAccessKey({ userId, idCourse }).unwrap();
          toast.success("Доступ к курсу открыт");
        }
        refetchUser();
      } catch {
        toast.error("Ошибка при обновлении доступа");
      }
    },
    [userId, assignAccessKey, revokeAccessKey, refetchUser]
  );

  const handleToggleAdmin = useCallback(
    async (isAdmin?: boolean) => {
      if (!userId) return;

      try {
        if (isAdmin) {
          await revokeAdmin(userId).unwrap();
          toast.success("Права администратора сняты");
        } else {
          await makeAdmin(userId).unwrap();
          toast.success("Пользователь назначен админом");
        }
        refetchUser();
      } catch {
        toast.error("Ошибка при обновлении прав администратора");
      }
    },
    [userId, makeAdmin, revokeAdmin, refetchUser]
  );

  return {
    handleAssign,
    handleToggleAdmin,
  };
};
