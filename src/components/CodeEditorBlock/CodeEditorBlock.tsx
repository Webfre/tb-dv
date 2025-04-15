import React, { useState } from "react";
import { Box, Typography, Button, Grid, Alert } from "@mui/material";
import { useCodeCheck } from "./useCodeCheck";
import { Task } from "./tasks/types";
import Editor from "@monaco-editor/react";

interface CodeEditorBlockProps {
  task: Task | null;
  code: string;
  onChange: (code: string) => void;
}

const CodeEditorBlock: React.FC<CodeEditorBlockProps> = ({
  task,
  code,
  onChange,
}) => {
  const [results, setResults] = useState<(boolean | null)[]>([]);
  const [compileError, setCompileError] = useState<string | null>(null);

  const handleCheckCode = useCodeCheck({
    task,
    code,
    setResults,
    setCompileError,
  });

  return (
    <Box>
      <Typography variant="h6">
        {task ? `Название: ${task.title}` : "Задача не выбрана"}
      </Typography>

      <Editor
        height="600px"
        defaultLanguage="javascript"
        value={code}
        onChange={(val) => onChange(val || "")}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />

      {task && (
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          fullWidth
          onClick={handleCheckCode}
        >
          Проверить
        </Button>
      )}

      {compileError && (
        <Alert severity="error" sx={{ mt: 3 }}>
          💥 Ошибка при компиляции: {compileError}
        </Alert>
      )}

      {results.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Результаты: выполнено на{" "}
            {Math.round(
              (results.filter((r) => r === true).length / results.length) * 100
            )}
            %
          </Typography>

          <Grid container spacing={0}>
            {results.map((res, index) => (
              <Grid
                key={index}
                item
                xs
                sx={{
                  height: 15,
                  bgcolor:
                    res === true ? "green" : res === false ? "red" : "orange",
                  borderRadius: 2,
                }}
              />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CodeEditorBlock;
