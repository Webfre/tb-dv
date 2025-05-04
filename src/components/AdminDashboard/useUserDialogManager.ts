import { useState, useMemo } from "react";
import { User } from "../../api/userApi";

export const useUserDialogManager = (users: User[] | undefined) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openAccessDialog, setOpenAccessDialog] = useState(false);
  const [openAdminDialog, setOpenAdminDialog] = useState(false);
  const [openTasksDialog, setOpenTasksDialog] = useState(false);

  const selectedUser = useMemo(
    () => users?.find((u) => u.id === selectedUserId),
    [users, selectedUserId]
  );

  const openAccessConfirm = (id: number) => {
    setSelectedUserId(id);
    setOpenAccessDialog(true);
  };

  const openAdminConfirm = (id: number) => {
    setSelectedUserId(id);
    setOpenAdminDialog(true);
  };

  const openTasksDialogHandler = (id: number) => {
    setSelectedUserId(id);
    setOpenTasksDialog(true);
  };

  const closeAllDialogs = () => {
    setOpenAccessDialog(false);
    setOpenAdminDialog(false);
    setOpenTasksDialog(false);
  };

  return {
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
    closeAllDialogs,
  };
};
