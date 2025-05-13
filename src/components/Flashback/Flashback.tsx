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
} from "../../dataFlashback/flashbackData";
import { FlashbackDrawer } from "./FlashbackDrawer";
import { Stepper, Step, StepLabel } from "@mui/material";
import { FlashbackTest } from "./FlashbackTest";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./Flashback.module.scss";
import BtnCustom from "../../ui/BtnCustom";
import { exampleQuestions } from "../../dataFlashback/flashbackQuestion";
import { getModulesAndSectionsFromProgress } from "./getModulesAndSectionsFromProgress";
import { useGetUserProgressQuery } from "../../api/progressApi";

export const Flashback = () => {
  const [open, setOpen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState<
    FlashbackQuestion[]
  >([]);

  const { data: progressData } = useGetUserProgressQuery();

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
        group: mod.title,
      }))
    );

  const onSubmit = (data: any) => {
    localStorage.setItem(FLASHBACK_SETTINGS_KEY, JSON.stringify(data));
    setOpen(false);
  };

  const handleStartTest = () => {
    const stored = localStorage.getItem(FLASHBACK_SETTINGS_KEY);
    let settings;

    if (stored) {
      const rawSettings = getValues();
      settings = {
        modules: rawSettings.modules ?? [],
        sections: rawSettings.sections ?? [],
        count: rawSettings.count,
      };
    } else {
      const generated = getModulesAndSectionsFromProgress(progressData);

      settings = {
        ...generated,
        count: 10,
      };
    }

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

        <Box className={styles.sectionsBlock} mt={2}>
          <Typography mb={1} variant="subtitle1" gutterBottom>
            Перечень тем, по которым будет составлен тест (вы всегда можете их
            изменить в настройках):
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {watch("sections").map((section: any, index: number) => (
              <Chip key={index} label={section.title} variant="outlined" />
            ))}
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
