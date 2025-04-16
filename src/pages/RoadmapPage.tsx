import React, { useState } from "react";
import MoodIcon from "@mui/icons-material/Mood"; // Trainee
import AddReactionIcon from "@mui/icons-material/AddReaction"; // Junior
import PsychologyIcon from "@mui/icons-material/Psychology"; // Junior+
import BuildIcon from "@mui/icons-material/Build"; // Middle
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Middle+
import StarsIcon from "@mui/icons-material/Stars"; // Senior

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Box,
  Link as MuiLink,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { levels, roadmap } from "../data/roadmap";
import { Link } from "react-router-dom";

const getFullTopics = (level: string) => {
  if (level === "ВСЕ") return roadmap;
  if (level === "Junior") {
    return {
      Junior: [...(roadmap.Trainee || []), ...(roadmap.Junior || [])],
    };
  }
  return {
    [level]: roadmap[level as keyof typeof roadmap] || [],
  };
};

const getLevelIcon = (level: string) => {
  switch (level) {
    case "Trainee":
      return <MoodIcon />;
    case "Junior":
      return <AddReactionIcon />;
    case "Junior+":
      return <PsychologyIcon />;
    case "Middle":
      return <BuildIcon />;
    case "Middle+":
      return <WhatshotIcon />;
    case "Senior":
      return <StarsIcon />;
    default:
      return <MoodIcon />;
  }
};

const RoadmapPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState("ВСЕ");
  const topicsByLevel = getFullTopics(selectedLevel);

  return (
    <Container sx={{ py: 2 }}>
      <Typography mb={1} variant="h3">
        Frontend Developer Roadmap
      </Typography>

      <Typography mb={4} variant="h6">
        Roadmap (дорожная карта) - это структурированный объект (или список),
        содержащий перечень ключевых тем, технологий и умений, которые
        необходимо изучить и освоить разработчику на каждом уровне
        профессионального роста.
      </Typography>

      <FormControl
        fullWidth
        sx={{
          borderRadius: "20px",
          mb: 2,
        }}
      >
        <InputLabel id="level-select-label">Грейд</InputLabel>
        <Select
          labelId="level-select-label"
          value={selectedLevel}
          label="Грейд"
          onChange={(e) => setSelectedLevel(e.target.value)}
          sx={{
            borderRadius: "20px", // закругление самого select
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "20px", // закругление рамки
            },
          }}
        >
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {Object.entries(topicsByLevel).map(([level, topics]) => (
        <Accordion
          key={level}
          defaultExpanded
          sx={{ borderRadius: "20px", mb: 2, overflow: "hidden" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Chip icon={getLevelIcon(level)} label={level} color="primary" />
          </AccordionSummary>
          <AccordionDetails>
            <Box component="ul" sx={{ pl: 2 }}>
              {topics.map((topic, idx) => (
                <li key={idx}>
                  {topic === "Практические задачи (ссылка)" ? (
                    <MuiLink
                      component={Link}
                      to="/projects"
                      underline="hover"
                      sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                      {topic}
                    </MuiLink>
                  ) : (
                    <Typography>{topic}</Typography>
                  )}
                </li>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default RoadmapPage;
