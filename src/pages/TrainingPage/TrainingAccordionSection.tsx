import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./TrainingPage.module.scss";

interface AccordionSectionProps {
  title: string;
  content: React.ReactNode;
}

const TrainingAccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  content,
}) => {
  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={styles.summary}
      >
        <Typography className={styles.subtitle}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>{content}</AccordionDetails>
    </Accordion>
  );
};

export default TrainingAccordionSection;
