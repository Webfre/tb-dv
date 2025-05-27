import React from "react";
import { Typography } from "@mui/material";
import styles from "./HintBlock.module.scss";

interface HintBlockProps {
  text: string;
}

export const HintBlock: React.FC<HintBlockProps> = ({ text }) => {
  return (
    <Typography
      className={styles.HintBlock}
      variant="body1"
      color="text.secondary"
      mb={4}
    >
      {text}
    </Typography>
  );
};
