import React from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface HtmlDrawerProps {
  html: string | null;
  onClose: () => void;
}

const HtmlDrawer: React.FC<HtmlDrawerProps> = ({ html, onClose }) => {
  return (
    <Drawer
      anchor="top"
      open={!!html}
      onClose={onClose}
      PaperProps={{ sx: { height: "100vh" } }}
    >
      <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 20,
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <iframe
          title="HTML Preview"
          srcDoc={html || ""}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          sandbox="allow-same-origin allow-scripts"
        />
      </Box>
    </Drawer>
  );
};

export default HtmlDrawer;
