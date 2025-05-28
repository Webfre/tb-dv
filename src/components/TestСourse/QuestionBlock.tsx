import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import classNames from "classnames";
import styles from "./QuestionBlock.module.scss";
import { checkbox_sx } from "../../styles/global";

interface QuestionBlockProps {
  id: number;
  name: string;
  variants: string[];
  selectedAnswers: number[];
  correctAnswers: number[] | undefined;
  onChange: (questionId: number, optionIndex: number) => void;
  disabled: boolean;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({
  id,
  name,
  variants,
  selectedAnswers,
  correctAnswers,
  onChange,
  disabled,
}) => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant="h6">{name}</Typography>
      <FormGroup>
        {variants.map((option, idx) => {
          const isCorrect = correctAnswers?.includes(idx);
          const isChecked = selectedAnswers.includes(idx);

          return (
            <FormControlLabel
              key={idx}
              control={
                <Checkbox
                  sx={checkbox_sx}
                  checked={isChecked}
                  onChange={() => onChange(id, idx)}
                  disabled={disabled}
                />
              }
              label={
                <Typography
                  className={classNames(styles.text, {
                    [styles.correct]: disabled && isCorrect,
                    [styles.wrong]: disabled && isChecked && !isCorrect,
                  })}
                >
                  {option}
                </Typography>
              }
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default QuestionBlock;
