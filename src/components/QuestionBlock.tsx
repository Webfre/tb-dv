import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

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
    <Box sx={{ mb: 2, p: 2, borderRadius: 2, bgcolor: "#f9f9f9" }}>
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
                  checked={isChecked}
                  onChange={() => onChange(id, idx)}
                  disabled={disabled}
                />
              }
              label={
                <Typography
                  sx={{
                    color: disabled
                      ? isCorrect
                        ? "green"
                        : isChecked
                        ? "red"
                        : "inherit"
                      : "inherit",
                  }}
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
