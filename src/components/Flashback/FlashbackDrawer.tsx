import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Drawer,
} from "@mui/material";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { FLASHBACK_SETTINGS_KEY } from "./schema";
import { FC } from "react";
import BtnCustom from "../../ui/BtnCustom";

export interface ChapterOption {
  title: string;
  group: string;
}

interface FlashbackDrawerProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  control: Control<any>;
  errors: FieldErrors<any>;
  modules: { id: string; title: string }[];
  chapters: ChapterOption[];
  reset: (values?: any) => void;
  setValue: (name: string, value: any) => void;
  watch: any;
}

const selectAllOption: ChapterOption = {
  title: "Выбрать все",
  group: "Служебные",
};

export const FlashbackDrawer: FC<FlashbackDrawerProps> = ({
  open,
  onClose,
  onSubmit,
  control,
  errors,
  modules,
  chapters,
  reset,
  setValue,
  watch,
}) => {
  const allOptions = [selectAllOption, ...chapters];
  const selectedSections = watch("sections") ?? [];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        onClose();
        reset();
      }}
    >
      <Box sx={{ width: 900, p: 3 }} component="form" onSubmit={onSubmit}>
        <Typography variant="h6" mb={1}>
          Настройки повторения
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          Выберите модули и разделы, которые хотите повторить. Можно выбрать
          несколько модулей и разделов. Используйте опцию{" "}
          <strong>«Выбрать все»</strong> для быстрого выбора всех доступных
          разделов.
        </Typography>

        <Controller
          name="modules"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              multiple
              limitTags={4}
              disableCloseOnSelect
              options={modules}
              getOptionLabel={(option) =>
                typeof option === "string"
                  ? modules.find((mod) => mod.id === option)?.title || option
                  : option.title
              }
              isOptionEqualToValue={(option, value) =>
                typeof value === "string"
                  ? option.id === value
                  : option.id === value.id
              }
              value={modules.filter((mod) =>
                (field.value ?? []).includes(mod.id)
              )}
              onChange={(_, selected) => {
                const selectedIds = selected.map((item) => item.id);
                field.onChange(selectedIds);

                const filteredSections = selectedSections.filter(
                  (section: ChapterOption) =>
                    selected.some((mod) => mod.title === section.group)
                );

                setValue("sections", filteredSections);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "20px" } }}
                  label="Темы"
                  error={!!errors.modules}
                  helperText={errors.modules?.message as string}
                />
              )}
            />
          )}
        />

        <Box mt={2}>
          <Controller
            name="sections"
            control={control}
            render={({ field }) => (
              <Autocomplete
                {...field}
                multiple
                disableCloseOnSelect
                options={allOptions}
                groupBy={(option) => option.group}
                getOptionLabel={(option) => option.title}
                isOptionEqualToValue={(option, value) =>
                  option.title === value.title
                }
                limitTags={4}
                onChange={(_, value) => {
                  const hasSelectAll = value.some(
                    (v) => v.title === selectAllOption.title
                  );
                  if (hasSelectAll) {
                    field.onChange(chapters);
                  } else {
                    field.onChange(
                      value.filter((v) => v.title !== selectAllOption.title)
                    );
                  }
                }}
                value={field.value ?? []}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Разделы"
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    }}
                    error={!!errors.sections}
                    helperText={errors.sections?.message as string}
                  />
                )}
              />
            )}
          />
        </Box>

        <Box mt={2}>
          <Controller
            name="count"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Кол-во вопросов</InputLabel>
                <Select
                  sx={{ borderRadius: "20px" }}
                  {...field}
                  label="Кол-во вопросов"
                >
                  {[10, 15, 20, 25].map((count) => (
                    <MenuItem key={count} value={count}>
                      {count}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>

        <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
          <BtnCustom
            text="Отмена"
            onClick={() => {
              onClose();
              reset();
            }}
          />

          <BtnCustom
            text="Сбросить настройки"
            variant="outlined"
            onClick={() => {
              localStorage.removeItem(FLASHBACK_SETTINGS_KEY);
              reset({
                modules: [],
                sections: [],
                count: 10,
              });
            }}
          />

          <BtnCustom text="Сохранить" type="submit" variant="contained" />
        </Box>
      </Box>
    </Drawer>
  );
};
