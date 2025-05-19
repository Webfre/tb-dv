import React, { useRef } from "react";
import {
  Drawer,
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Chip,
  Tooltip,
  IconButton,
} from "@mui/material";
import { FrontariumFeatures } from "../CoursesPageList/FrontariumFeatures";
import { tabs } from "./tabs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./CoursesPageList.module.scss";
import CourseProgram from "./CourseProgram";
import BtnCustom from "../../ui/BtnCustom";
import { InfoCourse } from "../../DB/index_type";

interface CourseDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  course: InfoCourse | null;
  handleOpenModal: (courseId: number) => void;
}

const CourseDetailsDrawer: React.FC<CourseDetailsDrawerProps> = ({
  open,
  onClose,
  course,
  handleOpenModal,
}) => {
  const theme = useTheme();
  const drawerContentRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const smoothScrollTo = (id: string) => {
    if (drawerContentRef.current) {
      const element = drawerContentRef.current.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  if (!course) return null;

  return (
    <Drawer
      anchor={isMobile ? "bottom" : "top"}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: isMobile ? "100%" : "100%",
          height: isMobile ? "90vh" : "100vh",
          overflowY: "auto",
          position: "relative",
        },
      }}
    >
      <IconButton onClick={onClose} className={styles.closeButton}>
        <CloseIcon />
      </IconButton>

      <Container
        ref={drawerContentRef}
        sx={{
          py: 4,
        }}
      >
        <Box className={styles.tabs}>
          {tabs.map((tab) => (
            <Box
              className={styles.tabsItem}
              key={tab.id}
              onClick={() => smoothScrollTo(tab.id)}
            >
              {tab.label}
            </Box>
          ))}
        </Box>

        {/* Секция 1: Демо-баннер */}
        <Box id="overview" className={styles.containerInfo}>
          <Typography variant="h3" component="h1" gutterBottom>
            {course.title}
          </Typography>

          <Box>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {course.infoStats.map((stat, index) => (
                <Chip
                  className={styles.chipInfo}
                  key={index}
                  label={
                    <Typography variant="body1">
                      <strong>{stat.count}</strong> {stat.label}
                    </Typography>
                  }
                />
              ))}
            </Stack>
          </Box>

          <Box className={styles.getBtn}>
            <BtnCustom
              variant="contained"
              color="primary"
              fullWidth
              text="Записаться"
              sx={{ p: 2, fontSize: "18px" }}
              onClick={() => handleOpenModal(course.id)}
            />
          </Box>
        </Box>

        <Box id="profession" mt={2} className={styles.containerInfo}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            О профессии
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            {course.descriptionInfo.profession}
          </Typography>
          <Typography paragraph>{course.descriptionInfo.about}</Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Востребованность
          </Typography>
          <Typography paragraph>{course.descriptionInfo.demand}</Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Чем занимаются специалисты:
          </Typography>
          <List dense>
            {course.descriptionInfo.activities.map((item, index) => (
              <ListItem key={index} sx={{ py: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Перспективы:
          </Typography>
          <Grid container spacing={2}>
            {course.descriptionInfo.prospects.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{ p: 2, height: "100%", bgcolor: "background.paper" }}
                >
                  <Box display="flex">
                    <SchoolIcon color="primary" sx={{ mr: 1 }} />
                    <Typography>{item}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция 2: Кому подойдёт курс */}
        <Box id="audience" sx={{ paddingTop: "75px" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Кому подойдёт курс
          </Typography>

          <Grid container spacing={2}>
            {course.targetAudience.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={styles.targetAudience}>
                  <Box display="flex" alignItems="flex-start">
                    <AutoAwesomeIcon
                      color="primary"
                      sx={{ mr: 1.5, mt: 0.5 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция 3: О чём этот курс (Программа) */}
        <Box id="program" sx={{ paddingTop: "75px" }}>
          <CourseProgram courseId={course.courseId} />
        </Box>

        {/* Секция 4: Как проходит обучение */}
        <Box sx={{ paddingTop: "75px" }} id="learning">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Как проходит обучение
          </Typography>
          <Grid container spacing={3}>
            {course.learningProcess.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card className={styles.targetAudience}>
                  <Box className={styles.learningProcess}>
                    <item.icon fontSize="large" color="primary" />
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция 5: Чему вы научитесь */}
        <Box id="skills" sx={{ paddingTop: "75px" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Чему вы научитесь
          </Typography>
          <Grid container spacing={2}>
            {course.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper className={styles.targetAudience} elevation={2}>
                  <Box display="flex" alignItems="center">
                    <WorkOutlineIcon color="primary" sx={{ mr: 1 }} />
                    <Typography>{skill}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция 6: Инструменты и технологии */}
        <Box id="tools" sx={{ paddingTop: "75px" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Инструменты
          </Typography>
          <Grid container spacing={3}>
            {course.technologies.map((tech, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Tooltip title={tech.titleTooltip} arrow>
                  <Card className={styles.card}>
                    <tech.icon fontSize="large" color="primary" />
                    <Typography variant="h6" gutterBottom>
                      {tech.title}
                    </Typography>
                  </Card>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Секция 7: После обучения */}
        <Box id="portfolio" sx={{ paddingTop: "75px" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Портфолио
          </Typography>
          <Grid container spacing={3}>
            {course.projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className={styles.card}>
                  <CardContent>
                    <AssignmentIcon
                      color="primary"
                      sx={{ fontSize: 40, mb: 1 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <FrontariumFeatures />

        {/* Секция 8: Вопросы и ответы */}
        <Box id="faq" sx={{ paddingTop: "75px" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Отвечаем на вопросы
          </Typography>
          {course.faqs.map((faq, index) => (
            <Accordion className={styles.accordion} key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Кнопки действий */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 5,
            flexWrap: "wrap",
          }}
        >
          <BtnCustom
            variant="contained"
            color="primary"
            text="Записаться"
            onClick={() => handleOpenModal(course.id)}
            sx={{ px: 4, py: 2, fontSize: "16px" }}
          ></BtnCustom>
          <BtnCustom
            variant="outlined"
            color="primary"
            text="Вернуться к курсам"
            sx={{ px: 4, py: 2, fontSize: "16px" }}
            onClick={onClose}
          ></BtnCustom>
        </Box>
      </Container>
    </Drawer>
  );
};

export default CourseDetailsDrawer;
