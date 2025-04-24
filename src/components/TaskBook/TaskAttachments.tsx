import React from "react";
import { Typography, Stack, Chip } from "@mui/material";

interface TaskAttachmentsProps {
  attachments: string[];
}

const TaskAttachments: React.FC<TaskAttachmentsProps> = ({ attachments }) => {
  if (!Array.isArray(attachments) || attachments.length === 0) return null;

  return (
    <>
      <Typography mt={2} variant="subtitle1" fontWeight={500}>
        Файлы для скачивания
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
        {attachments.map((file, index) => (
          <Chip
            key={index}
            label={`Файл ${index + 1}`}
            component="a"
            href={file}
            download
            clickable
            variant="outlined"
          />
        ))}
      </Stack>
    </>
  );
};

export default TaskAttachments;
