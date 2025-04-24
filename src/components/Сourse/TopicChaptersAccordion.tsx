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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import StarIcon from "@mui/icons-material/Star";
import BookIcon from "@mui/icons-material/Book";
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
import { getSolvedCountBySection } from "./getSolvedCountBySection";

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

  const solvedCountBySectionId = getSolvedCountBySection(
    solvedTasks,
    practiceMock
  );

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
                    {isFinal ? (
                      <StarIcon
                        fontSize="small"
                        sx={{ mr: 1, color: "rgb(97, 97, 255)" }}
                      />
                    ) : testPassed === true ? (
                      <EditAttributesIcon
                        sx={{ mr: 1, fontSize: "28px" }}
                        color="success"
                        titleAccess="Тест пройден"
                      />
                    ) : testPassed === false ? (
                      <EditAttributesIcon
                        sx={{
                          mr: 1,
                          fontSize: "28px",
                          color: "rgb(197, 86, 86) !important",
                        }}
                        titleAccess="Тест не пройден"
                      />
                    ) : (
                      <BookIcon fontSize="small" sx={{ mr: 1 }} />
                    )}

                    {chapter.title}
                  </Typography>

                  <Stack direction="row" spacing={1} mr={1}>
                    {testCount > 0 && (
                      <Chip
                        label={`Тестов: ${testCount}`}
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
                          total={practiceCountBySectionId[section.id] || 0}
                          solved={solvedCountBySectionId[section.id] || 0}
                          onOpen={(tasks) => {
                            setChapterTasks(tasks);
                            setPracticeOpen(true);
                          }}
                          allTasks={practiceMock}
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
