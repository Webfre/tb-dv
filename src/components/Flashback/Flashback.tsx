import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, Typography, Collapse } from "@mui/material";
import { FLASHBACK_SETTINGS_KEY, schema, steps } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  filterFlashbackQuestions,
  flashbackModules,
  FlashbackQuestion,
} from "./flashbackData";
import { FlashbackDrawer } from "./FlashbackDrawer";
import { Stepper, Step, StepLabel } from "@mui/material";
import { FlashbackTest } from "./FlashbackTest";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./Flashback.module.scss";
import BtnCustom from "../../ui/BtnCustom";
import { exampleQuestions } from "./data/flashbackQuestion";

export const Flashback = () => {
  const [open, setOpen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState<
    FlashbackQuestion[]
  >([]);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      modules: [],
      sections: [],
      count: 10,
    },
  });

  const selectedModules = watch("modules") ?? [];

  const availableChapters = flashbackModules
    .filter((mod) => selectedModules.includes(mod.id))
    .flatMap((mod) =>
      mod.chapters.map((chapter) => ({
        title: chapter.title,
        group: mod.title,
      }))
    );

  const onSubmit = (data: any) => {
    localStorage.setItem(FLASHBACK_SETTINGS_KEY, JSON.stringify(data));
    setOpen(false);
  };

  const handleStartTest = () => {
    const rawSettings = getValues();
    const settings = {
      modules: rawSettings.modules ?? [],
      sections: rawSettings.sections ?? [],
      count: rawSettings.count,
    };
    const selected = filterFlashbackQuestions(settings, exampleQuestions);
    setFilteredQuestions(selected);
    setStartTest(true);
  };

  useEffect(() => {
    const stored = localStorage.getItem(FLASHBACK_SETTINGS_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        reset(parsed);
      } catch (e) {
        console.warn("Ошибка загрузки flashback настроек", e);
      }
    }
  }, [reset]);

  return (
    <Box p={2}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Повторение материала
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Регулярное повторение — ключ к долгосрочному запоминанию. Согласно{" "}
          <strong>эффекту интервалов</strong>, изученный материал лучше
          сохраняется в памяти, если возвращаться к нему с определённой
          периодичностью. Исследования показывают, что повторение спустя 1–2
          дня, затем через 5–7 дней и снова через 2–3 недели значительно
          повышает уровень усвоения.
        </Typography>

        <Box className={styles.recom}>
          <Box
            onClick={() => setShowTips((prev) => !prev)}
            display="flex"
            alignItems="center"
          >
            <Typography variant="subtitle1" flexGrow={1}>
              Рекомендации
            </Typography>

            <IconButton>
              {showTips ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>

          <Collapse in={showTips}>
            <Stepper orientation="vertical" nonLinear activeStep={-1}>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Collapse>
        </Box>

        <Box className={styles.startTest}>
          <BtnCustom
            text="Повторить материал"
            variant="contained"
            sx={{ fontSize: "21px" }}
            fullWidth
            onClick={handleStartTest}
          />

          <IconButton
            className={styles.startTestBtn}
            onClick={() => setOpen(true)}
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      {startTest && (
        <FlashbackTest
          questions={filteredQuestions}
          onFinish={() => setStartTest(false)}
        />
      )}

      <FlashbackDrawer
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        errors={errors}
        modules={flashbackModules}
        chapters={availableChapters}
        reset={reset}
      />
    </Box>
  );
};
