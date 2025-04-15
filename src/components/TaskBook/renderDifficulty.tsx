import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import styles from "./TaskBook.module.scss";

export const renderDifficulty = (level: number) => (
  <Stack direction="row" spacing={0.5}>
    {Array.from({ length: 5 }, (_, i) =>
      i < level ? (
        <StarIcon
          className={styles.icon}
          key={i}
          fontSize="small"
          sx={{ color: "#000" }}
        />
      ) : (
        <StarBorderIcon
          className={styles.icon}
          key={i}
          fontSize="small"
          sx={{ color: "#000" }}
        />
      )
    )}
  </Stack>
);
