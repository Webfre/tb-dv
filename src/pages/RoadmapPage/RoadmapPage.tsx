import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { levels } from "./roadmap";
import { Link } from "react-router-dom";
import { getFullTopics, getLevelIcon } from "./getLevelIcon";
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
            borderRadius: "20px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "20px",
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
