import {
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { HintBlock } from "../../ui/HintBlock";
import { getAccessibleCourses } from "../../lib/hasAccessToCourses";
import { courseList } from "../../DB";
import { PurpleSelect } from "../../ui/PurpleSelect";
import { label_sx_light, menu_item_sx_light } from "../../styles/global";
import { useSelector } from "react-redux";
import { selectAllAccessCourses } from "../../store/accessSlice";

interface TestCourseAccessProps {
  render: (selectedCourseId: string) => React.ReactNode;
}

export default function TestCourseAccess({ render }: TestCourseAccessProps) {
  const accessCourses = useSelector(selectAllAccessCourses) || [];
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const filteredCourses = getAccessibleCourses(courseList, accessCourses);

  useEffect(() => {
    if (filteredCourses.length > 0) {
      setSelectedCourseId(filteredCourses[0].id.toString());
    }
  }, [filteredCourses]);

  const handleSelectCourse = (e: SelectChangeEvent<string>) => {
    setSelectedCourseId(e.target.value);
  };

  return (
    <Box p={2}>
      <HintBlock
        title="Система тестирования на курсе"
        text={`Система тестирования на курсе помогает закрепить материал после изучения лекций и практики.
Каждый тест связан с определённой темой, и его прохождение рекомендуется только после ознакомления с теорией.
У вас есть 2 попытки на прохождение каждого теста.

Если результат менее 50% — тест считается не пройденным, от 50% и выше — засчитывается.
Обращайте внимание на ошибки и правильные ответы, чтобы понять, где есть пробелы.
Рекомендуем повторно изучить материал перед второй попыткой.`}
      />

      {filteredCourses.length > 0 && (
        <Box mt={3} mb={2}>
          <FormControl fullWidth size="small">
            <InputLabel sx={label_sx_light}>Выберите курс:</InputLabel>
            <PurpleSelect
              label="Выберите курс:"
              styleVariant="light"
              value={selectedCourseId}
              onChange={(e) =>
                handleSelectCourse(e as SelectChangeEvent<string>)
              }
            >
              {filteredCourses.map((course) => (
                <MenuItem
                  key={course.id}
                  value={course.id.toString()}
                  sx={menu_item_sx_light}
                >
                  {course.title} ({course.courseType})
                </MenuItem>
              ))}
            </PurpleSelect>
          </FormControl>
        </Box>
      )}

      {selectedCourseId && render(selectedCourseId)}
    </Box>
  );
}
