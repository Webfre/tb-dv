import React from "react";
import { Typography, Box, CardContent } from "@mui/material";
import BtnCustom from "../../ui/BtnCustom";
import styles from "./CoursesPageList.module.scss";

interface CourseCardContentProps {
  course: {
    totalPrice: number;
    paymentMonths: number;
    id: number;
  };
  onOpenDrawer: (course: any) => void;
  onOpenModal: (id: number) => void;
}

const CourseCardContent: React.FC<CourseCardContentProps> = ({
  course,
  onOpenDrawer,
  onOpenModal,
}) => {
  return (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography className={styles.priceInfo}>
          {course.totalPrice.toLocaleString()} ₽
        </Typography>
        <Box>
          <Typography
            className={styles.totalPrice}
            variant="h6"
            sx={{ fontWeight: "bold" }}
          >
            {(course.totalPrice / course.paymentMonths).toLocaleString()} ₽/мес.
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "4px",
              px: 0.5,
            }}
          >
            Рассрочка на {course.paymentMonths} мес.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <BtnCustom
          text="О курсе"
          variant="outlined"
          fullWidth
          onClick={() => onOpenDrawer(course)}
        />

        <BtnCustom
          text="Записаться"
          variant="contained"
          color="primary"
          onClick={() => onOpenModal(course.id)}
          fullWidth
        />
      </Box>
    </CardContent>
  );
};

export default CourseCardContent;
