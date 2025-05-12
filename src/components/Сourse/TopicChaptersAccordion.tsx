import React, { useEffect, useRef, useState } from "react";
import {
  useGetSolvedTasksQuery,
  useGetUserProgressQuery,
} from "../../api/progressApi";
import { useLocation, useNavigate } from "react-router-dom";
import { practiceMock } from "../../data/taskData";
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
  Chip,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  getTestAttemptsCount,
  getTestTitle,
} from "../../lib/getTestAttemptsCount";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuizIcon from "@mui/icons-material/Quiz";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  CourseChapter,
  CourseSection,
  PracticeTask,
} from "../../dataCourse/CourseTopic";
import SectionDrawer from "../SectionDrawer/SectionDrawer";
import PracticeDrawer from "../PracticeDrawer/PracticeDrawer";
import jwtDecode from "jwt-decode";
import styles from "./TopicChaptersAccordion.module.scss";
import PracticeChipProgress from "./PracticeChipProgress";
import ChapterIcon from "./ChapterIcon";

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
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(
    null
  );
  const [openSection, setOpenSection] = useState<CourseSection | null>(null);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [chapterTasks, setChapterTasks] = useState<PracticeTask[]>([]);
  const chapterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();

  const token = localStorage.getItem("token");
  const decoded: any = token ? jwtDecode(token) : null;
  const userId = decoded?.sub;

  const { data: progressData } = useGetUserProgressQuery(userId!, {
    skip: !userId,
  });

  const practiceCountBySectionId = practiceMock.reduce((acc, task) => {
    if (task.sectionId) {
      acc[task.sectionId] = (acc[task.sectionId] || 0) + 1;
    }

    return acc;
  }, {} as Record<string, number>);

  const isChapterTestPassed = (testKey?: string): boolean | null => {
    if (!testKey || !progressData?.history?.[testKey]) return null;
    const entries = progressData.history[testKey];
    const best = Math.max(...entries.map((entry: any) => entry.percentage));
    return best >= 60;
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
        },
      });
    }
  };

  useEffect(() => {
    const targetId = location.state?.scrollToChapterId;

    if (targetId) {
      setExpandedChapterId(targetId);
      setHighlightedId(targetId);

      const element = chapterRefs.current[targetId];

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      const timeout = setTimeout(() => setHighlightedId(null), 2000);
      return () => clearTimeout(timeout);
    }
  }, [location.state]);

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
                      <>
                        <Chip
                          label={`Тест: ${getTestTitle(
                            chapter.testKeys?.[0] || topicTestKeys?.[0]
                          )}`}
                          icon={<QuizIcon fontSize="small" />}
                          size="small"
                          color="primary"
                          onClick={(e) =>
                            handleTestClick(
                              e,
                              chapter.testKeys?.[0] || topicTestKeys?.[0],
                              chapter.title
                            )
                          }
                        />

                        <Tooltip title="Количество попыток пройденного теста">
                          <Chip
                            label={`${getTestAttemptsCount(
                              progressData,
                              chapter.testKeys?.[0] || topicTestKeys?.[0]
                            )} / 2`}
                            size="small"
                            color="secondary"
                            variant="outlined"
                          />
                        </Tooltip>
                      </>
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
      />
    </Box>
  );
};

export default TopicChaptersAccordion;
