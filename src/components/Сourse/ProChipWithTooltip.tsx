import React from "react";
import { Tooltip, Chip } from "@mui/material";

interface ProChipWithTooltipProps {
  sx?: object;
  style?: React.CSSProperties;
}

const ProChipWithTooltip: React.FC<ProChipWithTooltipProps> = ({
  sx,
  style,
}) => {
  return (
    <Tooltip
      title={
        <span>
          <strong>PRO</strong> — это темы и видеоуроки из продвинутого курса.
          <br />
          Вы можете открыть доступ к ним отдельно, не покупая продвинутый курс.
        </span>
      }
      placement="top"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            fontSize: "14px",
            padding: "10px 14px",
            maxWidth: 300,
          },
        },
      }}
    >
      <Chip label="PRO" variant="filled" sx={sx} style={style} />
    </Tooltip>
  );
};

export default ProChipWithTooltip;
