import React, { useState } from "react";
import { PracticeTask } from "../../DB/index_type";
import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";
import CloseIcon from "@mui/icons-material/Close";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import styles from "./TaskDrawer.module.scss";

interface TaskSolutionsProps {
  task: PracticeTask;
}

const TaskSolutions: React.FC<TaskSolutionsProps> = ({ task }) => {
  const { solution, codeExampleCSS, codeExampleJS } = task;

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
      <Grid
        sx={{ marginBottom: "40px" }}
        className={styles.gridContainer}
        container
        spacing={2}
      >
        {solution && (
          <Grid
            item
            className={styles.gridItem}
            xs={codeExampleCSS || codeExampleJS ? 6 : 12}
          >
            <Typography
              onClick={() => handleOpen("HTML", solution, "html")}
              className={styles.gridTitle}
            >
              HTML решение:
              <FullscreenIcon fontSize="small" />
            </Typography>

            <CopyBlock
              text={solution}
              language="html"
              showLineNumbers
              theme={dracula}
              customStyle={styleCodeBlock}
              codeBlock
            />
          </Grid>
        )}

        {codeExampleJS && (
          <Grid item className={styles.gridItem} xs={solution ? 6 : 12}>
            <Typography
              onClick={() =>
                handleOpen("JavaScript", codeExampleJS, "javascript")
              }
              className={styles.gridTitle}
            >
              JavaScript решение:
              <FullscreenIcon fontSize="small" />
            </Typography>
            <CopyBlock
              text={codeExampleJS}
              language="js"
              showLineNumbers
              theme={dracula}
              customStyle={styleCodeBlock}
              codeBlock
            />
          </Grid>
        )}

        {codeExampleCSS && (
          <Grid item className={styles.gridItem} xs={solution ? 6 : 12}>
            <Typography
              onClick={() => handleOpen("CSS", codeExampleCSS, "css")}
              className={styles.gridTitle}
            >
              CSS решение:
              <FullscreenIcon fontSize="small" />
            </Typography>

            <CopyBlock
              text={codeExampleCSS}
              language="css"
              showLineNumbers
              theme={dracula}
              customStyle={styleCodeBlock}
              codeBlock
            />
          </Grid>
        )}
      </Grid>

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

          {/* Заголовок */}
          <Typography variant="h6" color="white" gutterBottom>
            {fullCode?.title}
          </Typography>

          {/* Блок с кодом */}
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

                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "#444 transparent", // Firefox

                /* WebKit (Chrome, Edge, Safari) */
                WebkitScrollbarWidth: "thin", // не обязателен, но для совместимости
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
