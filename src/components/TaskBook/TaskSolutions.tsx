import React, { useState } from "react";
import { PracticeTask } from "../../DB/index_type";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CopyBlock, dracula } from "react-code-blocks";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";
import { renderCodeBlocks } from "../PracticeDrawer/renderCodeBlocks";

interface TaskSolutionsProps {
  task: PracticeTask;
}

const TaskSolutions: React.FC<TaskSolutionsProps> = ({ task }) => {
  const [fullCode, setFullCode] = useState<null | {
    title: string;
    code: string;
    language: string;
  }>(null);

  const handleOpen = (title: string, code: string, language: string) => {
    setFullCode({ title, code, language });
  };

  const handleClose = () => setFullCode(null);

  return (
    <>
      <Box mb={5}>{renderCodeBlocks(task, handleOpen)}</Box>

      <Dialog open={!!fullCode} onClose={handleClose} fullScreen>
        <DialogContent
          sx={{
            backgroundColor: "#282c34",
            padding: 4,
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" color="white" gutterBottom>
            {fullCode?.title}
          </Typography>

          {fullCode && (
            <CopyBlock
              text={fullCode.code}
              language={fullCode.language}
              showLineNumbers
              theme={dracula}
              customStyle={{
                ...styleCodeBlock,
                maxHeight: "85vh",
                overflow: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "#444 transparent",
                WebkitScrollbarWidth: "thin",
                WebkitOverflowScrolling: "touch",
              }}
              codeBlock
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskSolutions;
