import React from "react";
import { Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { PracticeTask } from "../../DB/index_type";

interface PracticeChipProgressProps {
  sectionId: string;
  onOpen: (tasks: PracticeTask[]) => void;
  allTasks: PracticeTask[];
  practiceIds?: string[];
  solvedTasksIds?: string[];
}

const PracticeChipProgress: React.FC<PracticeChipProgressProps> = ({
  sectionId,
  onOpen,
  allTasks,
  practiceIds = [],
  solvedTasksIds = [],
}) => {
  const matchedBySection = allTasks.filter(
    (task) => task.sectionId === sectionId
  );

  const matchedTasks = matchedBySection.filter((task) =>
    practiceIds.includes(task.id)
  );

  const solvedCount = matchedTasks.filter((task) =>
    solvedTasksIds.includes(task.id)
  ).length;

  const totalCount = matchedTasks.length;

  if (totalCount === 0) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen(matchedTasks);
  };

  const progressPercent = Math.round((solvedCount / totalCount) * 100);

  return (
    <Chip
      label={`Практик: ${solvedCount} / ${totalCount}`}
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
