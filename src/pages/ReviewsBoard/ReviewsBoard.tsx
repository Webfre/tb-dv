import { useState } from "react";
import { FaRegStickyNote, FaThumbtack, FaTrash } from "react-icons/fa";
import {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewPositionMutation,
} from "../../api/featureRequestApi";
import { BsChatLeftText } from "react-icons/bs";
import { EmojiPicker } from "./EmojiPicker";
import { colors } from "./emojis";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewsBoard.module.scss";
import Draggable from "react-draggable";
import React from "react";
import { toast } from "react-toastify";
import CustomToast from "../../ui/CustomToast";
import { GrSend } from "react-icons/gr";
import { useGetMyProfileQuery } from "../../api/userApi";

export const ReviewsBoard = () => {
  const navigate = useNavigate();
  const [newText, setNewText] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("😊");
  const [selectedColor, setSelectedColor] = useState("#ffeb3b");

  const { data: stickers = [], refetch } = useGetReviewsQuery();
  const [createReview] = useCreateReviewMutation();
  const { data: userData } = useGetMyProfileQuery();
  const [deleteReview] = useDeleteReviewMutation();
  const [updatePosition] = useUpdateReviewPositionMutation();
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const addSticker = async () => {
    if (!newText.trim()) {
      toast(
        <CustomToast
          message="Введите текст"
          icon={<BsChatLeftText color="white" />}
        />
      );
      return;
    }

    if (newText.length > 200) {
      toast(
        <CustomToast
          message="Максимальная длина отзыва — 200 символов"
          icon={<BsChatLeftText color="white" />}
        />
      );
      return;
    }

    if (!isAuthenticated) {
      toast(
        <CustomToast
          message="Авторизуйтесь, чтобы отправить отзыв"
          icon={<FaRegStickyNote color="white" />}
        />
      );
      return;
    }

    const newSticker = {
      text: newText,
      emoji: selectedEmoji,
      color: selectedColor,
      positionX: 50,
      positionY: 50,
      rotation: Math.floor(Math.random() * 15 - 7),
    };

    try {
      await createReview(newSticker).unwrap();
      setNewText("");
      refetch();

      toast(
        <CustomToast
          message="Отзыв успешно отправлен!"
          icon={<GrSend color="white" />}
        />
      );
    } catch (error) {
      console.error("Ошибка при создании отзыва", error);
    }
  };

  const handleStop = (id: string, x: number, y: number) => {
    void updatePosition({ id, positionX: x, positionY: y })
      .unwrap()
      .catch((error) => {
        console.error("Ошибка при обновлении позиции", error);
      });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteReview(id).unwrap();
      toast(
        <CustomToast message="Отзыв удалён" icon={<FaTrash color="white" />} />
      );
      refetch();
    } catch (error) {
      console.error("Ошибка при удалении", error);
    }
  };

  return (
    <div className={styles.board}>
      <div className={styles.controls}>
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          className={styles.logo}
        >
          Frontarium
        </Typography>

        <div className={styles.toolsGroup}>
          <div className={styles.colorPicker}>
            {colors.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className={selectedColor === color ? styles.active : ""}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          <EmojiPicker
            selectedEmoji={selectedEmoji}
            onSelect={setSelectedEmoji}
          />
        </div>

        {isAuthenticated && (
          <>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Поделитесь, как Frontarium помог вам в обучении"
              className={styles.input}
              maxLength={200}
            />
            <button onClick={addSticker} className={styles.addButton}>
              <FaRegStickyNote /> Добавить отзыв
            </button>
          </>
        )}
      </div>

      <div className={styles.scrollArea}>
        <div className={styles.boardContent}>
          {stickers.map((sticker) => {
            const nodeRef = React.createRef<HTMLDivElement>();

            return (
              <Draggable
                key={sticker.id}
                defaultPosition={{
                  x: sticker.positionX,
                  y: sticker.positionY,
                }}
                onStop={(_, data) => handleStop(sticker.id, data.x, data.y)}
                nodeRef={nodeRef as React.RefObject<HTMLElement>}
                disabled={sticker.userId !== userData?.id}
              >
                <div ref={nodeRef}>
                  <div
                    className={styles.sticker}
                    style={{
                      backgroundColor: sticker.color,
                      transform: `rotate(${sticker.rotation}deg)`,
                    }}
                  >
                    <div className={styles.stickerHeader}>
                      <span className={styles.emoji}>{sticker.emoji}</span>
                      {userData?.isAdmin && (
                        <button
                          className={styles.deleteButton}
                          onClick={() => handleDelete(sticker.id)}
                        >
                          <FaTrash size={12} />
                        </button>
                      )}
                    </div>
                    <div className={styles.stickerText}>{sticker.text}</div>
                    <div className={styles.stickerFooter}>
                      <span className={styles.author}>
                        {sticker.userFirstName}
                      </span>
                      <FaThumbtack className={styles.pin} />
                    </div>
                  </div>
                </div>
              </Draggable>
            );
          })}
        </div>
      </div>
    </div>
  );
};
