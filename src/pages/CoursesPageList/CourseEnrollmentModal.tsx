import React from "react";
import { Modal, Box, Typography, Divider, IconButton } from "@mui/material";
import CourseEnrollmentPage from "./CourseEnrollmentPage";
import { courseList } from "../../DB";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./CoursesPageList.module.scss";

interface CourseEnrollmentModalProps {
  open: boolean;
  onClose: () => void;
  courseId: number;
}

const CourseEnrollmentModal: React.FC<CourseEnrollmentModalProps> = ({
  open,
  onClose,
  courseId,
}) => {
  const course = courseList.find((course) => course.id === courseId);

  if (!course) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          bgcolor: "background.paper",
          borderRadius: "16px",
          boxShadow: 24,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <IconButton onClick={onClose} className={styles.closeButton}>
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            width: "50%",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <Box>
            <img
              src={course.image}
              alt={course.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />

            <Typography variant="h5" fontWeight="bold">
              {course.title}
            </Typography>

            <Typography variant="body2" sx={{ mt: 1, color: "#666" }}>
              {course.description}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="body1" sx={{ color: "#999" }}>
                {course.totalPrice.toLocaleString()} ₽
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {course.price.toLocaleString()} ₽/мес.
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffd700",
                color: "#000",
                padding: "4px 8px",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Рассрочка на {course.paymentMonths} мес.
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "50%", padding: 4 }}>
          <CourseEnrollmentPage courseId={courseId} />
        </Box>
      </Box>
    </Modal>
  );
};

export default CourseEnrollmentModal;
