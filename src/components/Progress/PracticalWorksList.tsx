import React from "react";
import { List, ListItem, Chip, Stack, Box, Typography } from "@mui/material";
import { getCourseIdsByCourseId } from "../../lib/getCourseIdsByCourseId";
import { Progress } from "../../api/progressApi";
import { prDataList } from "../../DB/prDataList";
import { isTaskCompleted } from "../../lib/getPrWorksProgress";
import { mentors } from "../MentorProfilePage/mentorsData";
import styles from "./PracticalWorksList.module.scss";

interface PracticalWorksListProps {
  progressData: Progress;
  courseId: string;
}

const PracticalWorksList: React.FC<PracticalWorksListProps> = ({
  progressData,
  courseId,
}) => {
  const findMentor = (mentorId: number) => {
    return mentors.find((mentor) => mentor.id === mentorId);
  };

  const courseIds = getCourseIdsByCourseId(Number(courseId));

  const filteredDataList = prDataList.filter((pr) =>
    courseIds.includes(pr.moduleId)
  );

  return (
    <Box className={styles.practicalList}>
      <Typography marginBottom={2} variant="h4" gutterBottom>
        Практические работы
      </Typography>

      <List disablePadding>
        {filteredDataList.map((pr) => {
          const mentor = findMentor(pr.postMentor);

          return (
            <ListItem key={pr.id} className={styles.listItem}>
              <Box className={styles.moduleInfo}>
                <Typography className={styles.title}>{pr.title}</Typography>

                <Box className={styles.infoBlock}>
                  <Box className={styles.mentorInfo}>
                    Модуль: {pr.moduleId.toLocaleUpperCase()}
                  </Box>

                  {mentor && (
                    <Box className={styles.mentorInfo}>
                      <Box>Ментор: {mentor.fullName}</Box>
                    </Box>
                  )}
                </Box>
              </Box>

              <Stack direction="row" spacing={1}>
                <Chip
                  label={
                    isTaskCompleted(pr.id, progressData?.taskTopics)
                      ? "Выполнена"
                      : "Не выполнена"
                  }
                  color={
                    isTaskCompleted(pr.id, progressData?.taskTopics)
                      ? "success"
                      : "default"
                  }
                  variant={
                    isTaskCompleted(pr.id, progressData?.taskTopics)
                      ? "filled"
                      : "outlined"
                  }
                  size="small"
                />
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default PracticalWorksList;
