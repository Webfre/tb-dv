import React, { useState } from "react";
import { Tooltip, IconButton } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AdminConfirmDialog from "./AdminConfirmDialog";
import { useUserDialogManager } from "./useUserDialogManager";
import { useUserManagement } from "./useUserManagement";

interface AdminToggleButtonProps {
  isAdmin: boolean;
  userId: number;
  refetch: () => void;
}

const AdminToggleButton: React.FC<AdminToggleButtonProps> = ({
  isAdmin,
  userId,
  refetch,
}) => {
  const [open, setOpen] = useState(false);

  const { openAdminConfirm, closeAllDialogs } = useUserDialogManager([]);
  const { handleToggleAdmin } = useUserManagement(userId, refetch);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    openAdminConfirm(userId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeAllDialogs();
  };

  const handleConfirm = async () => {
    await handleToggleAdmin(isAdmin);
    handleClose();
  };

  return (
    <>
      <Tooltip
        title={isAdmin ? "Снять права администратора" : "Сделать админом"}
      >
        <IconButton onClick={handleClick}>
          <AdminPanelSettingsIcon
            sx={{
              color: isAdmin ? "primary.main" : "grey.500",
            }}
          />
        </IconButton>
      </Tooltip>

      <AdminConfirmDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        isAdmin={isAdmin}
      />
    </>
  );
};

export default AdminToggleButton;
