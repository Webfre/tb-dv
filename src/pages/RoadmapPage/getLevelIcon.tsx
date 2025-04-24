import MoodIcon from "@mui/icons-material/Mood"; // Trainee
import AddReactionIcon from "@mui/icons-material/AddReaction"; // Junior
import PsychologyIcon from "@mui/icons-material/Psychology"; // Junior+
import BuildIcon from "@mui/icons-material/Build"; // Middle
import WhatshotIcon from "@mui/icons-material/Whatshot"; // Middle+
import StarsIcon from "@mui/icons-material/Stars"; // Senior
import { roadmap } from "./roadmap";

export const getLevelIcon = (level: string) => {
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

export const getFullTopics = (level: string) => {
  if (level === "ВСЕ") return roadmap;
  return {
    [level]: roadmap[level as keyof typeof roadmap] || [],
  };
};
