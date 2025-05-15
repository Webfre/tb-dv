import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { htmlChapters } from "../../dataCourse/html/htmlChaptersData";
import { jsChapters } from "../../dataCourse/js/jsChapters";
import { cssChapters } from "../../dataCourse/css/cssChapters";
import { CourseChapter } from "../../dataCourse/CourseTopic";
import styles from "./CoursesPageList.module.scss";

interface CourseProgramProps {
  courseId: string[];
}

const chaptersMap: Record<string, CourseChapter[]> = {
  html: htmlChapters,
  css: cssChapters,
  js: jsChapters,
};

const CourseProgram: React.FC<CourseProgramProps> = ({ courseId }) => {
  const courseProgram = courseId.flatMap((id) => {
    const chapters = chaptersMap[id];
    if (!chapters) return [];

    return chapters.map((chapter) => ({
      module: chapter.title,
      topics: chapter.sections.map((section) => section.title),
    }));
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Программа курса
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        Курс включает тесты, задачи, практические работы с куратором, работу над
        боевыми проектами для портфолио, обсуждение различных тем и трендов
        веб-разработки, проведение спикер-клубов, внеурочных встреч и многое
        другое.
      </Typography>

      {courseProgram.map((module, index) => (
        <Accordion key={index} className={styles.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{module.module}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {module.topics.map((topic, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CourseProgram;
