import React, { useState } from "react";
import BtnCustom from "../../ui/BtnCustom";
import AccessConfirmDialog from "./AccessConfirmDialog";
import { useUserDialogManager } from "./useUserDialogManager";
import { useUserManagement } from "./useUserManagement";

interface AccessToggleButtonProps {
  accessCourse: { id: number; isAccess: boolean };
  userId: number;
  refetch: () => void;
}

const AccessToggleButton: React.FC<AccessToggleButtonProps> = ({
  accessCourse,
  userId,
  refetch,
}) => {
  const [open, setOpen] = useState(false);

  const { openAccessConfirm, closeAllDialogs } = useUserDialogManager([]);
  const { handleAssign } = useUserManagement(userId, refetch);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openAccessConfirm(userId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeAllDialogs();
  };

  const handleConfirm = async () => {
    await handleAssign(accessCourse.id, accessCourse.isAccess);
    handleClose();
  };

  return (
    <>
      <BtnCustom
        sx={{ minWidth: 180 }}
        text={
          accessCourse.isAccess ? "Закрыть доступ" : "Открыть доступ к курсу"
        }
        variant="outlined"
        color={accessCourse.isAccess ? "error" : "primary"}
        onClick={handleClick}
      />

      <AccessConfirmDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default AccessToggleButton;
