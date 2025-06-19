import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useGetUserProgressQuery } from "../../api/progressApi";
import {
  filterTestsByProFlag,
  getTestsByCourseIds,
} from "../../lib/getTestsByCourseIds";
import { getCourseIdsByCourseId } from "../../lib/getCourseIdsByCourseId";
import ProgressRing from "./ProgressRing";
import PracticalWorksList from "./PracticalWorksList";
import { useSelector } from "react-redux";
import { selectIsProByCourseId } from "../../store/accessSlice";
import { RootState } from "../../store/store";

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

  const includePro = useSelector((state: RootState) =>
    selectIsProByCourseId(state, Number(courseId))
  );

  const filteredTests = useMemo(
    () => getTestsByCourseIds(moduleIds),
    [moduleIds]
  );

  const visibleTests = filterTestsByProFlag(filteredTests, includePro);

  if (isLoading) {
    return <Typography>Загрузка...</Typography>;
  }

  if (!courseId) {
    return <Typography>Выберите курс, чтобы увидеть прогресс.</Typography>;
  }

  if (!progressData) {
    return <Typography>Прогресс не найден.</Typography>;
  }

  return (
    <Box p={4}>
      <ProgressRing
        courseId={courseId}
        progressData={progressData}
        tests={visibleTests}
      />

      <PracticalWorksList courseId={courseId} progressData={progressData} />
    </Box>
  );
};

export default Progress;
