import { Grid, Typography } from "@mui/material";
import styles from "./PracticeDrawer.module.scss";
import { PracticeTask } from "../../DB/index_type";
import { CopyBlock, dracula } from "react-code-blocks";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { styleCodeBlock } from "../Сourse/CopyBlockStyle";

export const renderCodeBlocks = (
  task: PracticeTask,
  handleOpen: (title: string, code: string, language: string) => void
) => {
  const visibleCodeBlocks = [
    task.solution && {
      title: "HTML",
      code: task.solution,
      language: "html",
    },
    task.codeExampleJS && {
      title: "JavaScript",
      code: task.codeExampleJS,
      language: "javascript",
    },
    task.codeExampleCSS && {
      title: "CSS",
      code: task.codeExampleCSS,
      language: "css",
    },
  ].filter(Boolean) as { title: string; code: string; language: string }[];

  const getGridSize = (index: number, count: number): 12 | 6 => {
    if (count === 1) return 12;
    if (count === 2) return 6;
    if (count === 3) return index < 2 ? 6 : 12;
    return 12;
  };

  return (
    <Grid container spacing={2} className={styles.gridContainer}>
      {visibleCodeBlocks.map((block, index) => (
        <Grid
          key={block.title}
          item
          xs={12}
          md={getGridSize(index, visibleCodeBlocks.length)}
          className={styles.gridItem}
          sx={{
            mt: visibleCodeBlocks.length === 3 && index === 2 ? 2.5 : 0,
          }}
        >
          <Typography
            onClick={() => handleOpen(block.title, block.code, block.language)}
            className={styles.gridTitle}
          >
            {block.title} решение: <FullscreenIcon fontSize="small" />
          </Typography>
          <CopyBlock
            text={block.code}
            language={block.language}
            showLineNumbers
            theme={dracula}
            customStyle={styleCodeBlock}
            codeBlock
          />
        </Grid>
      ))}
    </Grid>
  );
};
