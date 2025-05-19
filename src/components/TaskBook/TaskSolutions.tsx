import React from "react";
import { Grid, Typography } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";
import styles from "./TaskDrawer.module.scss";
import { PracticeTask } from "../../DB/index_type";

interface TaskSolutionsProps {
  task: PracticeTask;
}

const TaskSolutions: React.FC<TaskSolutionsProps> = ({ task }) => {
  const { solution, codeExampleCSS, codeExampleJS } = task;

  return (
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
          <Typography variant="subtitle2" gutterBottom>
            HTML решение:
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
          <Typography variant="subtitle2" gutterBottom>
            JavaScript решение:
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
          <Typography variant="subtitle2" gutterBottom>
            CSS решение:
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
  );
};

export default TaskSolutions;
