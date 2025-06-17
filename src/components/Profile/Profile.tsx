import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import {
  getAccessibleCourses,
  hasAccessToCourses,
} from "../../lib/hasAccessToCourses";
import { courseList } from "../../DB";
import ProfileBanner from "./ProfileBanner";
import ProfileTabsCard from "./ProfileTabsCard";
import classNames from "classnames";
import styles from "./Profile.module.scss";

export default function Profile() {
  const { data } = useCheckCourseAccessQuery();
  const accessCourses = data?.accessCourse || [];
  const hasAccess = hasAccessToCourses(accessCourses);

  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const filteredCourses = getAccessibleCourses(courseList, accessCourses);

  useEffect(() => {
    if (filteredCourses.length > 0) {
      setSelectedCourseId(filteredCourses[0].id.toString());
    }
  }, [filteredCourses]);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  return (
    <Box p={2}>
      {filteredCourses.map((course) => (
        <Box
          className={classNames(styles.coursesProfile, {
            [styles.selectedCourse]: selectedCourseId === course.id.toString(),
          })}
          key={course.id}
          onClick={() => handleSelectCourse(course.id.toString())}
        >
          <ProfileBanner
            courseTitle={course.title}
            courseType={course.courseType}
            mentors={course.mentors}
            isSelected={selectedCourseId === course.id.toString()}
          />
        </Box>
      ))}

      <ProfileTabsCard
        hasAccess={hasAccess}
        selectedCourseId={selectedCourseId}
      />
    </Box>
  );
}
