import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  IconButton,
  Typography,
  Collapse,
  Chip,
  Tooltip,
} from "@mui/material";
import { FLASHBACK_SETTINGS_KEY, schema, steps } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  filterFlashbackQuestions,
  flashbackModules,
  FlashbackQuestion,
} from "../../lib/getFlashbackData";
import { FlashbackDrawer } from "./FlashbackDrawer";
import { Stepper, Step, StepLabel } from "@mui/material";
import { FlashbackTest } from "./FlashbackTest";
import { exampleQuestions } from "../../DB/flashbackQuestion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./Flashback.module.scss";
import BtnCustom from "../../ui/BtnCustom";
import { HintBlock } from "../../ui/HintBlock";

export const Flashback = () => {
  const [open, setOpen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<
    FlashbackQuestion[]
  >([]);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<any>({
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
        group: mod.id,
      }))
    );

  const onSubmit = (data: any) => {
    localStorage.setItem(FLASHBACK_SETTINGS_KEY, JSON.stringify(data));
    reset(data);
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

    setStartTest(false);
    setFilteredQuestions([]);

    setTimeout(() => {
      setFilteredQuestions(selected);
      setRestartKey((prev) => prev + 1);
      setStartTest(true);
    }, 50);
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
        <HintBlock
          title="Повторение материала"
          text="Флэшбек — это настраиваемая система тестирования с более чем 1000 вопросов по различным темам. Она помогает закрепить знания по пройденным модулям. В конце теста вы получаете статистику по правильным и неправильным темам, а система автоматически определяет пробелы и предлагает ссылки на материалы для повторения. Отлично подходит для быстрого повторения в дороге или если хотите освежить темы в памяти."
        />

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

        <Box className={styles.sectionsBlock} mt={2}>
          <Typography mb={1} variant="subtitle1" gutterBottom>
            Перечень тем, по которым будет составлен тест (вы всегда можете их
            изменить в настройках):
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {watch("sections").length > 0 ? (
              watch("sections").map((section: any, index: number) => (
                <Chip key={index} label={section.title} variant="outlined" />
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                Вы пока еще не выбрали темы для прохождения теста
              </Typography>
            )}
          </Box>
        </Box>

        <Box className={styles.startTest}>
          <BtnCustom
            text="Повторить материал"
            variant="contained"
            sx={{ fontSize: "21px" }}
            fullWidth
            onClick={handleStartTest}
          />

          <Tooltip title="Настройки теста" arrow>
            <IconButton
              className={styles.startTestBtn}
              onClick={() => setOpen(true)}
            >
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {startTest && (
        <FlashbackTest
          key={restartKey}
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
        setValue={setValue}
        watch={watch}
        modules={flashbackModules}
        chapters={availableChapters}
        reset={reset}
      />
    </Box>
  );
};
