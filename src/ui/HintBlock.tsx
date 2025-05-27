import React, { useState } from "react";
import { Box, Typography, IconButton, Tooltip, Collapse } from "@mui/material";
import { getHintBlockState, setHintBlockState } from "../lib/hintBlockStorage";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./HintBlock.module.scss";

interface HintBlockProps {
  text: string;
  title: string;
}

export const HintBlock: React.FC<HintBlockProps> = ({ text, title }) => {
  const [expanded, setExpanded] = useState<boolean>(() =>
    getHintBlockState(title)
  );

  const toggleExpanded = () => {
    const newValue = !expanded;
    setExpanded(newValue);
    setHintBlockState(title, newValue);
  };

  return (
    <Box className={styles.HintBlockWrapper} mb={4}>
      <Box className={styles.HintBlockHeader}>
        <Tooltip title={expanded ? "Свернуть" : "Развернуть"}>
          <IconButton onClick={toggleExpanded} size="small">
            {expanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
      </Box>

      <Collapse in={expanded}>
        <Typography
          className={styles.HintBlock}
          variant="body1"
          color="text.secondary"
        >
          {text}
        </Typography>
      </Collapse>
    </Box>
  );
};
