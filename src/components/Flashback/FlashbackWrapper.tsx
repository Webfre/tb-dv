import React from "react";
import { useSelector } from "react-redux";
import { Flashback } from "./Flashback";
import {
  selectAllAccessCourses,
  selectIsAccessLoading,
} from "../../store/accessSlice";
import Promo from "../../ui/Promo";
import Spinner from "../../ui/Spinner";

const FlashbackWrapper: React.FC = () => {
  const accessCourses = useSelector(selectAllAccessCourses);
  const isLoading = useSelector(selectIsAccessLoading);

  if (isLoading) {
    return <Spinner />;
  }

  const hasAccess = accessCourses.length > 0;

  if (!hasAccess) {
    return (
      <Promo
        title="Повторение материала"
        subtitle="Флэшбек — это настраиваемая система тестирования с более чем 1000 вопросов по различным темам. Она помогает закрепить знания по пройденным модулям. В конце теста вы получаете статистику по правильным и неправильным темам, а система автоматически определяет пробелы и предлагает ссылки на материалы для повторения. Отлично подходит для быстрого повторения в дороге или если хотите освежить темы в памяти."
        videoSrc="/media/flashback_promo.mp4"
        posterSrc="/media/flashback_promo_preview.jpg"
      />
    );
  }

  return <Flashback />;
};

export default FlashbackWrapper;
