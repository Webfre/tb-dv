import React from "react";
import { useLocation } from "react-router-dom";
import CourseTopicDetails from "../components/Сourse/CourseTopicDetails";
import Сourse from "../components/Сourse/Сourse";

const CourseRouteWrapper: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topicId = searchParams.get("topicId");

  return topicId ? <CourseTopicDetails /> : <Сourse />;
};

export default CourseRouteWrapper;
