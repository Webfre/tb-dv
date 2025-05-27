import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { chip_sx } from "../../styles/global";

interface TaskResourcesProps {
  resources: string[];
}

const TaskResources: React.FC<TaskResourcesProps> = ({ resources }) => {
  if (!resources?.length) return null;

  return (
    <Box mb={2}>
      <Typography variant="subtitle1" gutterBottom>
        Полезные ссылки
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        {resources.map((url, index) => (
          <Chip
            key={index}
            icon={<LinkIcon />}
            label={new URL(url).hostname}
            component="a"
            href={url}
            target="_blank"
            rel="noopener"
            clickable
            color="info"
            sx={chip_sx}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TaskResources;
