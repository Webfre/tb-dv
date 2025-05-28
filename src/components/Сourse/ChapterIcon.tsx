import React from "react";
import { Tooltip } from "@mui/material";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import StarIcon from "@mui/icons-material/Star";
import BookIcon from "@mui/icons-material/Book";

interface ChapterIconProps {
  isFinal: boolean | undefined;
  testPassed: boolean | null;
}

const ChapterIcon: React.FC<ChapterIconProps> = ({ isFinal, testPassed }) => {
  if (isFinal) {
    return <StarIcon fontSize="small" sx={{ mr: 1, color: "#947ef6" }} />;
  }

  if (testPassed === true) {
    return (
      <Tooltip title="Тест пройден" arrow>
        <EditAttributesIcon sx={{ mr: 1, fontSize: "28px" }} color="success" />
      </Tooltip>
    );
  }

  if (testPassed === false) {
    return (
      <Tooltip title="Тест не пройден" arrow>
        <EditAttributesIcon
          sx={{
            mr: 1,
            fontSize: "28px",
            color: "rgb(197, 86, 86) !important",
          }}
        />
      </Tooltip>
    );
  }

  return <BookIcon fontSize="small" sx={{ mr: 1 }} />;
};

export default ChapterIcon;
