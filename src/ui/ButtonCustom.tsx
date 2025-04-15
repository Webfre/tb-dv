import { Button } from "@mui/material";

export const ButtonCustom: React.FC<{
  label: string;
  onClick: () => void;
  isActive?: boolean;
}> = ({ label, onClick, isActive }) => (
  <Button
    onClick={onClick}
    sx={{
      borderRadius: "20px",
      bgcolor: isActive ? "white" : "transparent",
      color: isActive ? "primary.main" : "inherit",
      textTransform: "none",
      fontWeight: 500,
      px: 2,
      "&:hover": {
        bgcolor: isActive ? "#f0f0f0" : "rgba(255,255,255,0.1)",
      },
    }}
  >
    {label}
  </Button>
);
