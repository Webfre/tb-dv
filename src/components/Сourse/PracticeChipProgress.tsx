import React from "react";
import { Chip } from "@mui/material";
import { PracticeTask } from "../../dataCourse/CourseTopic";
import CodeIcon from "@mui/icons-material/Code";

interface PracticeChipProgressProps {
  sectionId: string;
  total: number;
  solved: number;
  onOpen: (tasks: PracticeTask[]) => void;
  allTasks: PracticeTask[];
}

const PracticeChipProgress: React.FC<PracticeChipProgressProps> = ({
  sectionId,
  total,
  solved,
  onOpen,
  allTasks,
}) => {
  if (total === 0) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const matched = allTasks.filter((task) => task.sectionId === sectionId);
    onOpen(matched);
  };

  const progressPercent = Math.round((solved / total) * 100);

  return (
    <Chip
      label={`Практик: ${solved} / ${total}`}
      icon={<CodeIcon fontSize="small" />}
      size="small"
      onClick={handleClick}
      sx={{
        background: `linear-gradient(to right, #c8e6c9 ${progressPercent}%, #e0e0e0 ${progressPercent}%)`,
        color: "#000",
        fontWeight: 500,
        minWidth: 80,
        height: 24,
        "& .MuiChip-icon": {
          marginRight: 0,
        },
      }}
    />
  );
};

export default PracticeChipProgress;
