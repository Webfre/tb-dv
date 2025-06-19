import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CiCircleCheck } from "react-icons/ci";
import classNames from "classnames";
import styles from "./TopicChaptersAccordion.module.scss";
import PracticeChipProgress from "./PracticeChipProgress";
import TaskStatusChip from "./TaskStatusChip";
import { getTestTitle } from "../../lib/getTestAttemptsCount";
import {
  CourseChapter,
  CourseSection,
  PracticeTask,
} from "../../DB/index_type";
import BtnCustom from "../../ui/BtnCustom";
import { Progress, ToggleSolvedTaskDto } from "../../api/progressApi";
import { ProAccessModal } from "./ProAccessModal";

interface ChapterSectionListProps {
  chapter: CourseChapter;
  handleOpen: (section: CourseSection) => void;
  practiceMock: PracticeTask[];
  solvedTasks: ToggleSolvedTaskDto[];
  progressData?: Progress | undefined;
  setChapterTasks: (value: React.SetStateAction<PracticeTask[]>) => void;
  setPracticeOpen: (value: React.SetStateAction<boolean>) => void;
  testCount: number;
  isPro: boolean;
  topicTestKeys?: string[];
  testPassed?: boolean | null;
  handleTestClick: (
    e: React.MouseEvent,
    testKey?: string,
    chapterTitle?: string
  ) => void;
}

const ChapterSectionList: React.FC<ChapterSectionListProps> = ({
  chapter,
  handleOpen,
  practiceMock,
  solvedTasks,
  progressData,
  setChapterTasks,
  setPracticeOpen,
  testCount,
  isPro,
  topicTestKeys,
  testPassed,
  handleTestClick,
}) => {
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  const handleOpenProModal = () => {
    setIsProModalOpen(true);
  };

  const handleCloseProModal = () => {
    setIsProModalOpen(false);
  };

  const handleSectionClick = (section: CourseSection) => {
    if (!chapter.pro || isPro) {
      handleOpen(section);
    }
  };

  const handlePracticeChipOpen = (tasks: PracticeTask[]) => {
    setChapterTasks(tasks);
    setPracticeOpen(true);
  };

  const handleTestItemClick = (e: React.MouseEvent) => {
    if (!chapter?.pro) {
      handleTestClick(
        e,
        chapter.testKeys?.[0] || topicTestKeys?.[0],
        chapter.title
      );
    }
  };

  return (
    <>
      <List
        disablePadding
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        {chapter.sections.map((section) => (
          <ListItem
            key={section.id}
            className={styles.sectionItem}
            onClick={() => handleSectionClick(section)}
            sx={{
              pointerEvents: !isPro && chapter.pro ? "none" : "auto",
              opacity: !isPro && chapter.pro ? 0.6 : 1,
            }}
          >
            <ListItemText primary={section.title} />
            <Stack direction="row" spacing={1} alignItems="center">
              <PracticeChipProgress
                sectionId={section.id}
                onOpen={handlePracticeChipOpen}
                allTasks={practiceMock}
                practiceIds={chapter.practiceIds}
                solvedTasksIds={solvedTasks.map((task) => task.id)}
              />
              {section.postMentor && (
                <TaskStatusChip
                  sectionId={section.id}
                  taskTopics={progressData?.taskTopics}
                />
              )}
              <KeyboardArrowRightIcon color="action" />
            </Stack>
          </ListItem>
        ))}

        {testCount > 0 && (
          <ListItem
            className={classNames(styles.sectionItem, {
              [styles.testChip]: testCount > 0,
            })}
            onClick={handleTestItemClick}
            sx={{
              pointerEvents: !isPro && chapter?.pro ? "none" : "auto",
              opacity: !isPro && chapter?.pro ? 0.6 : 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {chapter.testKeys?.[0] || topicTestKeys?.[0] ? (
                <ListItemText
                  primary={`Тест: ${getTestTitle(
                    (chapter.testKeys?.[0] || topicTestKeys?.[0]) as string
                  )}`}
                />
              ) : null}

              {testPassed === true && (
                <CiCircleCheck
                  size={24}
                  color="#4caf50"
                  style={{ marginLeft: 8 }}
                />
              )}

              {testPassed === false && (
                <CiCircleCheck
                  size={24}
                  color="#a71e34"
                  style={{ marginLeft: 8 }}
                />
              )}
            </Box>
          </ListItem>
        )}
      </List>

      {!isPro && chapter?.pro && (
        <Box className={styles.proCourse}>
          <BtnCustom
            variant="outlined"
            color="secondary"
            customColor="#846ee6"
            text="Открыть доступ"
            onClick={handleOpenProModal}
          />
        </Box>
      )}

      <ProAccessModal
        isProChapter={chapter?.pro}
        open={isProModalOpen}
        onClose={handleCloseProModal}
      />
    </>
  );
};

export default ChapterSectionList;
