import React, { useMemo } from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface HtmlDrawerProps {
  html: string | null;
  onClose: () => void;
}

const HtmlDrawer: React.FC<HtmlDrawerProps> = ({ html, onClose }) => {
  const blobUrl = useMemo(() => {
    if (!html) return null;
    const blob = new Blob([html], { type: "text/html" });
    return URL.createObjectURL(blob);
  }, [html]);

  React.useEffect(() => {
    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [blobUrl]);

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

        {blobUrl && (
          <iframe
            title="HTML Preview"
            src={blobUrl}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        )}
      </Box>
    </Drawer>
  );
};

export default HtmlDrawer;
