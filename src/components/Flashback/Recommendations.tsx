import React from "react";
import { Typography, Box } from "@mui/material";
import { handleSectionClick } from "../../lib/handleSectionClick";
import Spinner from "../../ui/Spinner";
import { useSelector } from "react-redux";
import {
  selectAllAccessCourses,
  selectIsAccessLoading,
} from "../../store/accessSlice";

interface RecommendationsProps {
  modules: { name: string; id: string }[];
  sections: { name: string; moduleId: string; topicId: string }[];
}

const Recommendations: React.FC<RecommendationsProps> = ({
  modules,
  sections,
}) => {
  const isLoading = useSelector(selectIsAccessLoading);
  const accessCourses = useSelector(selectAllAccessCourses);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Spinner />
      </Box>
    );
  }

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
              onClick={() =>
                handleSectionClick(sec.moduleId, sec.topicId, accessCourses)
              }
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
