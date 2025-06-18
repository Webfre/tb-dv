import React, { useEffect, useRef, useState } from "react";
import {
  useGetSolvedTasksQuery,
  useGetUserProgressQuery,
} from "../../api/progressApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { practiceMock } from "../../DB/taskData";
import clsx from "clsx";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionDrawer from "../SectionDrawer/SectionDrawer";
import PracticeDrawer from "../PracticeDrawer/PracticeDrawer";
import styles from "./TopicChaptersAccordion.module.scss";
import {
  CourseChapter,
  CourseSection,
  PracticeTask,
} from "../../DB/index_type";
import { chip_sx } from "../../styles/global";
import ProChipWithTooltip from "./ProChipWithTooltip";
import ChapterSectionList from "./ChapterSectionList";

interface TopicChaptersAccordionProps {
  chapters: CourseChapter[];
  topicTestKeys?: string[];
  isPro: boolean;
}

const TopicChaptersAccordion: React.FC<TopicChaptersAccordionProps> = ({
  chapters,
  topicTestKeys = [],
  isPro,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: courseId } = useParams<{ id: string }>();
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(
    new Set()
  );

  const [openSection, setOpenSection] = useState<CourseSection | null>(null);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [chapterTasks, setChapterTasks] = useState<PracticeTask[]>([]);
  const chapterRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const { data: solvedTasks = [] } = useGetSolvedTasksQuery();

  const { data: progressData } = useGetUserProgressQuery({
    courseId: courseId ?? "",
  });

  const isChapterTestPassed = (testKey?: string): boolean | null => {
    if (!testKey || !progressData?.history?.[testKey]) return null;
    const entries = progressData.history[testKey];
    if (!Array.isArray(entries)) return null;
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
      navigate("/panel/test", {
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
      setExpandedChapters((prev) => {
        const newSet = new Set(prev);
        newSet.add(chapterId);
        return newSet;
      });

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
      {chapters.map((chapter) => {
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
              expanded={expandedChapters.has(chapter.id)}
              onChange={(_, isExpanded) => {
                setExpandedChapters((prev) => {
                  const newSet = new Set(prev);
                  if (isExpanded) {
                    newSet.add(chapter.id);
                  } else {
                    newSet.delete(chapter.id);
                  }
                  return newSet;
                });
              }}
              className={clsx(
                styles.accordion,
                highlightedId === chapter.id && styles.pulse
              )}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box className={styles.accordionSummary}>
                  <Box className={styles.chapterTitle}>
                    {!isPro && chapter?.pro && (
                      <ProChipWithTooltip
                        sx={chip_sx}
                        style={{ marginRight: "10px" }}
                      />
                    )}
                    {chapter.title}
                  </Box>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <ChapterSectionList
                  chapter={chapter}
                  handleOpen={handleOpen}
                  isPro={isPro}
                  practiceMock={practiceMock}
                  solvedTasks={solvedTasks}
                  progressData={progressData}
                  setChapterTasks={setChapterTasks}
                  setPracticeOpen={setPracticeOpen}
                  testCount={testCount}
                  topicTestKeys={topicTestKeys}
                  testPassed={testPassed}
                  handleTestClick={handleTestClick}
                />
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
