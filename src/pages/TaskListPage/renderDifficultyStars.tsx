import { Stack } from "@mui/material";

export const renderDifficultyStars = (level: number) => (
  <Stack direction="row" spacing={0.5}>
    {Array.from({ length: 5 }, (_, i) =>
      i < level ? <span key={i}>★</span> : <span key={i}>☆</span>
    )}
  </Stack>
);
