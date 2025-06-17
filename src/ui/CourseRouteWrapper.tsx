import React from "react";
import { useLocation, Navigate, useParams } from "react-router-dom";
import CourseTopicDetails from "../components/Сourse/CourseTopicDetails";
import Сourse from "../components/Сourse/Сourse";
import { useCheckCourseAccessQuery } from "../api/userApi";
import { getAccessibleCourses } from "../lib/hasAccessToCourses";
import { courseList } from "../DB";
import { Box } from "@mui/material";
import Spinner from "./Spinner";

const CourseRouteWrapper: React.FC = () => {
  const location = useLocation();
  const { id: courseId } = useParams<{ id: string }>();
  const searchParams = new URLSearchParams(location.search);
  const topicId = searchParams.get("topicId");

  const { data, isLoading } = useCheckCourseAccessQuery();
  const accessCourses = data?.accessCourse || [];
  const filteredCourses = getAccessibleCourses(courseList, accessCourses);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Spinner />
      </Box>
    );
  }

  const hasAccess = filteredCourses.some(
    (course) => course.id === Number(courseId)
  );

  if (!hasAccess) {
    return <Navigate to="/course-info" replace />;
  }

  return topicId ? <CourseTopicDetails /> : <Сourse />;
};

export default CourseRouteWrapper;
