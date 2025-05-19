import React from "react";
import { Typography, Box } from "@mui/material";
import { handleSectionClick } from "../../lib/handleSectionClick";

interface RecommendationsProps {
  modules: { name: string; id: string }[];
  sections: { name: string; moduleId: string; topicId: string }[];
}

const Recommendations: React.FC<RecommendationsProps> = ({
  modules,
  sections,
}) => {
  return (
    <Box mt={4} p={2} bgcolor="#f5f5f5" borderRadius="20px">
      <Typography variant="h6" gutterBottom>
        Рекомендации:
      </Typography>

      {modules.length > 0 && (
        <>
          <Typography variant="subtitle1" mt={1} gutterBottom>
            Модули для повторения:
          </Typography>
          {modules.map((mod, idx) => (
            <Typography key={idx} color="info">
              {mod.name.toUpperCase()}
            </Typography>
          ))}
        </>
      )}

      {sections.length > 0 && (
        <>
          <Typography variant="subtitle1" mt={2} gutterBottom>
            Разделы для повторения:
          </Typography>
          {sections.map((sec, idx) => (
            <Typography
              key={idx}
              color="primary"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => handleSectionClick(sec.moduleId, sec.topicId)}
            >
              {sec.name}
            </Typography>
          ))}
        </>
      )}
    </Box>
  );
};

export default Recommendations;
