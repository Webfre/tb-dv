import React, { useEffect, useRef, useState } from "react";
import {
  useGetSolvedTasksQuery,
  useGetUserProgressQuery,
} from "../../api/progressApi";
import { useLocation, useNavigate } from "react-router-dom";
import { practiceMock } from "../../DB/taskData";
import clsx from "clsx";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import {
  getTestAttemptsCount,
  getTestTitle,
} from "../../lib/getTestAttemptsCount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SectionDrawer from "../SectionDrawer/SectionDrawer";
import PracticeDrawer from "../PracticeDrawer/PracticeDrawer";
import PracticeChipProgress from "./PracticeChipProgress";
import ChapterIcon from "./ChapterIcon";
import TaskStatusChip from "./TaskStatusChip";
import TestChip from "./TestChip";
import styles from "./TopicChaptersAccordion.module.scss";
import {
  CourseChapter,
  CourseSection,
  PracticeTask,
} from "../../DB/index_type";

interface TopicChaptersAccordionProps {
  chapters: CourseChapter[];
  topicTestKeys?: string[];
}

const TopicChaptersAccordion: React.FC<TopicChaptersAccordionProps> = ({
  chapters,
  topicTestKeys = [],
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId } = location.state || {};
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(
    null
  );
  const [openSection, setOpenSection] = useState<CourseSection | null>(null);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [chapterTasks, setChapterTasks] = useState<PracticeTask[]>([]);
  const chapterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();
  const { data: progressData } = useGetUserProgressQuery({ courseId });

  const isChapterTestPassed = (testKey?: string): boolean | null => {
    if (!testKey || !progressData?.history?.[testKey]) return null;
    const entries = progressData.history[testKey];
    const best = Math.max(...entries.map((entry: any) => entry.percentage));
    return best >= 50;
  };

  const handleOpen = (section: CourseSection) => {
    setOpenSection(section);
  };

  const handleClose = () => {
    setOpenSection(null);
  };

  const handleTestClick = (
    e: React.MouseEvent,
    testKey?: string,
    chapterTitle?: string
  ) => {
    e.stopPropagation();
    if (testKey && chapterTitle) {
      navigate("/test", {
        state: {
          name: chapterTitle,
          selectedTest: testKey,
          courseId: courseId,
        },
      });
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const chapterId = searchParams.get("chapterId");

    if (chapterId) {
      setExpandedChapterId(chapterId);
      setHighlightedId(chapterId);

      const element = chapterRefs.current[chapterId];

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      const timeout = setTimeout(() => setHighlightedId(null), 2000);
      return () => clearTimeout(timeout);
    }
  }, [location.search]);

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Главы и разделы
      </Typography>

      {chapters.map((chapter) => {
        const isFinal = chapter.final;
        const testCount = chapter.testKeys?.length || 0;
        const testKey = chapter.testKeys?.[0] || topicTestKeys?.[0];
        const testPassed = isChapterTestPassed(testKey);

        return (
          <Box
            key={chapter.id}
            mb={1}
            ref={(el) => {
              chapterRefs.current[chapter.id] = el as HTMLDivElement | null;
            }}
          >
            <Accordion
              key={chapter.id}
              defaultExpanded={false}
              expanded={expandedChapterId === chapter.id}
              onChange={(_, expanded) => {
                setExpandedChapterId(expanded ? chapter.id : null);
              }}
              className={clsx(
                styles.accordion,
                isFinal && styles.final,
                highlightedId === chapter.id && styles.pulse
              )}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <ChapterIcon isFinal={isFinal} testPassed={testPassed} />
                    {chapter.title}
                  </Typography>

                  <Stack direction="row" spacing={1} mr={1}>
                    {testCount > 0 && (
                      <TestChip
                        testTitle={getTestTitle(
                          chapter.testKeys?.[0] || topicTestKeys?.[0]
                        )}
                        attempts={getTestAttemptsCount(
                          progressData,
                          chapter.testKeys?.[0] || topicTestKeys?.[0]
                        )}
                        maxAttempts={2}
                        onClick={(e) =>
                          handleTestClick(
                            e,
                            chapter.testKeys?.[0] || topicTestKeys?.[0],
                            chapter.title
                          )
                        }
                      />
                    )}
                  </Stack>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <List
                  disablePadding
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  {chapter.sections.map((section) => (
                    <ListItem
                      key={section.id}
                      className={styles.sectionItem}
                      onClick={() => handleOpen(section)}
                    >
                      <ListItemText primary={section.title} />

                      <Stack direction="row" spacing={1} alignItems="center">
                        <PracticeChipProgress
                          sectionId={section.id}
                          onOpen={(tasks) => {
                            setChapterTasks(tasks);
                            setPracticeOpen(true);
                          }}
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
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}

      <SectionDrawer section={openSection} onClose={handleClose} />

      <PracticeDrawer
        open={practiceOpen}
        onClose={() => setPracticeOpen(false)}
        tasks={chapterTasks}
        solvedTasks={solvedTasks}
      />
    </Box>
  );
};

export default TopicChaptersAccordion;
