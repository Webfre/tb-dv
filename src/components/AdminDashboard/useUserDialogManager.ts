import { useState, useMemo } from "react";
import { User } from "../../api/userApi";

export const useUserDialogManager = (users: User[] | undefined) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [openAccessDialog, setOpenAccessDialog] = useState(false);
  const [openAdminDialog, setOpenAdminDialog] = useState(false);

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

  const closeAllDialogs = () => {
    setOpenAccessDialog(false);
    setOpenAdminDialog(false);
  };

  return {
    selectedUserId,
    selectedUser,
    openAccessDialog,
    openAdminDialog,
    setOpenAccessDialog,
    setOpenAdminDialog,
    openAccessConfirm,
    openAdminConfirm,
    closeAllDialogs,
  };
};
