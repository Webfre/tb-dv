import React from "react";
import { Alert, AlertTitle, Box, Stack } from "@mui/material";
import { HintBlock } from "./HintBlock";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaComments } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import styles from "./Promo.module.scss";
import BtnCustom from "./BtnCustom";

interface PromoProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  posterSrc?: string;
}

const Promo: React.FC<PromoProps> = ({
  title,
  subtitle,
  videoSrc,
  posterSrc,
}) => {
  const navigate = useNavigate();

  return (
    <Box p={2}>
      <div className={styles.textBlock}>
        <HintBlock title={title} text={subtitle} />
      </div>

      <Alert
        icon={<FcLock size={24} />}
        sx={{
          mb: 4,
          borderRadius: 4,
          backgroundColor: "#f5f5f5",
          color: "#111",
          fontSize: "15px",
          lineHeight: 1.6,
        }}
      >
        <AlertTitle>
          Доступ к этому разделу открывается после выбора обучающего курса.
        </AlertTitle>
        Чтобы открыть доступ, вы можете выбрать подходящий курс или записаться
        на консультацию.
        <Stack direction="row" spacing={2} mt={2}>
          <BtnCustom
            text="Приобрести курс"
            icon={<FaGraduationCap />}
            customColor="#846ee6"
            variant="contained"
            onClick={() => navigate("/training")}
          />
          <BtnCustom
            text="Записаться на консультацию"
            icon={<FaComments />}
            variant="outlined"
            customColor="#846ee6"
            onClick={() => navigate("/about#contacts")}
          />
        </Stack>
      </Alert>

      <div className={styles.videoContainer}>
        <video className={styles.video} controls poster={posterSrc}>
          <source src={videoSrc} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </Box>
  );
};

export default Promo;
