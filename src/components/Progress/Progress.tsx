import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useGetUserProgressQuery } from "../../api/progressApi";
import { groupTestsByCategory } from "./ProgressUtils";
import { getTestsByCourseIds } from "../../lib/getTestsByCourseIds";
import { getCourseIdsByCourseId } from "../../lib/getCourseIdsByCourseId";
import ProgressRing from "./ProgressRing";
import PracticalWorksList from "./PracticalWorksList";

interface ProgressProps {
  courseId: string;
}

const Progress: React.FC<ProgressProps> = ({ courseId }) => {
  const { data: progressData, isLoading } = useGetUserProgressQuery(
    { courseId },
    {
      skip: !courseId,
    }
  );

  const moduleIds = getCourseIdsByCourseId(Number(courseId));

  const filteredTests = useMemo(
    () => getTestsByCourseIds(moduleIds),
    [moduleIds]
  );

  const groupedTests = useMemo(
    () => groupTestsByCategory(filteredTests),
    [filteredTests]
  );

  if (!courseId) {
    return <Typography>Выберите курс, чтобы увидеть прогресс.</Typography>;
  }

  if (isLoading) {
    return <Typography>Загрузка...</Typography>;
  }

  if (!progressData) {
    return <Typography>Прогресс не найден.</Typography>;
  }

  return (
    <Box p={4}>
      <ProgressRing
        courseId={courseId}
        progressData={progressData}
        tests={filteredTests}
      />

      <PracticalWorksList courseId={courseId} progressData={progressData} />
    </Box>
  );
};

export default Progress;
