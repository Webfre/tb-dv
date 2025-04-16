import React, { useEffect, useRef, useState } from "react";
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
import StarIcon from "@mui/icons-material/Star";
import BookIcon from "@mui/icons-material/Book";
import QuizIcon from "@mui/icons-material/Quiz";
import CodeIcon from "@mui/icons-material/Code";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CourseChapter, CourseSection, PracticeTask } from "./CourseTopic";
import SectionDrawer from "./SectionDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import PracticeDrawer from "./PracticeDrawer";
import { practiceMock } from "../../data/taskData";
import styles from "./TopicChaptersAccordion.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

interface TopicChaptersAccordionProps {
  chapters: CourseChapter[];
  topicTestKeys?: string[];
  topicPracticeIds?: string[];
}

const TopicChaptersAccordion: React.FC<TopicChaptersAccordionProps> = ({
  chapters,
  topicTestKeys = [],
  topicPracticeIds = [],
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

  const isChapterTestPassed = (testKey?: string): boolean | null => {
    if (!testKey) return null;
    const historyRaw = localStorage.getItem(`history_${testKey}`);
    if (!historyRaw) return null;

    try {
      const history = JSON.parse(historyRaw);
      const best = Math.max(...history.map((h: any) => h.percentage));
      return best >= 60;
    } catch {
      return null;
    }
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
        const practiceCount = chapter.practiceIds?.length || 0;

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
              className={highlightedId === chapter.id ? styles.pulse : ""}
              sx={{
                borderRadius: "20px !important",
                overflow: "hidden",
                "&:before": {
                  display: "none",
                },
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                ...(isFinal && {
                  border: "1px solid rgb(97, 97, 255)",
                  bgcolor: "rgba(223, 223, 252, 0.777)",
                }),
              }}
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
                      <CheckCircleIcon
                        fontSize="small"
                        sx={{ mr: 1 }}
                        color="success"
                        titleAccess="Тест пройден"
                      />
                    ) : testPassed === false ? (
                      <DoNotDisturbOnIcon
                        fontSize="small"
                        sx={{ mr: 1, color: "rgb(197, 86, 86) !important" }}
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
                    {!isFinal && practiceCount > 0 && (
                      <Chip
                        label={`Практик: ${practiceCount}`}
                        icon={<CodeIcon fontSize="small" />}
                        size="small"
                        color="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          const ids = isFinal
                            ? topicPracticeIds
                            : chapter.practiceIds;
                          const matched = practiceMock.filter((task) =>
                            ids?.includes(task.id)
                          );
                          setChapterTasks(matched);
                          setPracticeOpen(true);
                        }}
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
                      sx={{
                        border: "1px dashed #ccc",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleOpen(section)}
                    >
                      <ListItemText primary={section.title} />
                      <KeyboardArrowRightIcon color="action" />
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
