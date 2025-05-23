import { Stack } from "@mui/material";

export const renderDifficultyStars = (level: number) => (
  <Stack direction="row" spacing={0.5}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{
          color: "#846ee6",
          opacity: i < level ? 1 : 0.3,
          fontSize: "18px",
        }}
      >
        {i < level ? "★" : "☆"}
      </span>
    ))}
  </Stack>
);
