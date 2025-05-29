import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2" align="center">
        © 2025 Frontarium. Все права защищены.
      </Typography>
    </Box>
  );
};

export default Footer;
