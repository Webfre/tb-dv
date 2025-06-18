import React, { useState } from "react";
import BtnCustom from "../../ui/BtnCustom";
import AccessConfirmDialog from "./AccessConfirmDialog";
import { useUserDialogManager } from "./useUserDialogManager";
import { useUserManagement } from "./useUserManagement";

interface AccessToggleButtonProps {
  accessCourse: { id: number; isAccess: boolean; isPro: boolean };
  userId: number;
  refetch: () => void;
}

const AccessToggleButton: React.FC<AccessToggleButtonProps> = ({
  accessCourse,
  userId,
  refetch,
}) => {
  const [openAccessDialog, setOpenAccessDialog] = useState(false);
  const [openProDialog, setOpenProDialog] = useState(false);

  const { openAccessConfirm, closeAllDialogs } = useUserDialogManager([]);
  const { handleAssign, handleToggleProAccess } = useUserManagement(
    userId,
    refetch
  );

  const handleAccessClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenAccessDialog(true);
    openAccessConfirm(userId);
  };

  const handleProClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenProDialog(true);
    openAccessConfirm(userId);
  };

  const handleClose = () => {
    setOpenAccessDialog(false);
    setOpenProDialog(false);
    closeAllDialogs();
  };

  const handleAccessConfirm = async () => {
    await handleAssign(accessCourse.id, accessCourse.isAccess);
    handleClose();
  };

  const handleProConfirm = async () => {
    await handleToggleProAccess(accessCourse.id, !accessCourse.isPro);
    handleClose();
  };

  return (
    <>
      <BtnCustom
        sx={{ minWidth: 180, marginRight: "10px" }}
        text={
          accessCourse.isAccess
            ? "Закрыть доступ к курсу"
            : "Открыть доступ к курсу"
        }
        variant="outlined"
        color={accessCourse.isAccess ? "error" : "primary"}
        onClick={handleAccessClick}
      />

      <BtnCustom
        sx={{ minWidth: 180 }}
        text={
          accessCourse.isPro ? "Закрыть доступ PRO" : "Открыть доступ к PRO"
        }
        variant="outlined"
        color={accessCourse.isPro ? "error" : "primary"}
        onClick={handleProClick}
      />

      <AccessConfirmDialog
        open={openProDialog}
        onClose={handleClose}
        onConfirm={handleProConfirm}
      />

      <AccessConfirmDialog
        open={openAccessDialog}
        onClose={handleClose}
        onConfirm={handleAccessConfirm}
      />
    </>
  );
};

export default AccessToggleButton;
