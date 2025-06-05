import { useState, useRef, useEffect } from "react";
import styles from "./ReviewsBoard.module.scss";
import { FaSmile } from "react-icons/fa";
import { emojis } from "./emojis";

interface EmojiPickerProps {
  selectedEmoji: string;
  onSelect: (emoji: string) => void;
}

export const EmojiPicker = ({ selectedEmoji, onSelect }: EmojiPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Закрытие при нажатии Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.emojiPicker} ref={pickerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.emojiButton}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FaSmile /> {selectedEmoji}
      </button>

      {isOpen && (
        <div className={styles.emojiList}>
          {emojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => {
                onSelect(emoji);
                setIsOpen(false);
              }}
              className={styles.emojiItem}
              aria-label={`Emoji ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
