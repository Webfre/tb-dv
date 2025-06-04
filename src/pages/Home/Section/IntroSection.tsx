import styles from "./IntroSection.module.scss";
import sectionStyles from "../MainLayout.module.scss";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import video from "../Section/woosh.wav";
import classNames from "classnames";

interface IntroSectionProps {
  onStartClick: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onStartClick }) => {
  const [explode, setExplode] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(video);
    audioRef.current.volume = 0.3;
    audioRef.current.load();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMagicClick = () => {
    setExplode(true);

    // Воспроизведение звука
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.error("Audio play failed:", e));
    }

    setTimeout(() => setExplode(false), 2000);
  };

  const renderExplodingText = (text: string, isTitle: boolean = false) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={classNames(styles.char, {
          [styles.explode]: explode,
          [styles.titleChar]: isTitle,
        })}
        style={
          {
            animationDelay: `${i * 0.03}s`,
            "--tx": Math.random() * 2 - 1,
            "--ty": Math.random() * 3 - 1.5,
            "--r": Math.random() * 720 - 360,
          } as React.CSSProperties
        }
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      className={`${sectionStyles.section} ${sectionStyles.withBackgroundBlobs}`}
    >
      <div className={sectionStyles.sectionInner}>
        <h1 className={styles.title}>
          {renderExplodingText("Фронтенд — это не только ", true)}
          <span className={styles.accent2}>
            {renderExplodingText("код", true)}
          </span>
          <br />
          {renderExplodingText("Это магия, которая оживляет ", true)}
          <span className={styles.accent1}>
            {renderExplodingText("идеи", true)}
          </span>
        </h1>

        <p className={styles.subtitle}>
          <strong>{renderExplodingText("Frontarium")}</strong>
          {renderExplodingText(" — платформа, где учат создавать ")}
          <br />
          {renderExplodingText("современные веб-приложения.")}
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primary} onClick={onStartClick}>
            Давайте начнём
          </button>
          <button className={styles.secondary}>Подробнее</button>
        </div>

        <div className={styles.magicIconWrapper} onClick={handleMagicClick}>
          <FaWandMagicSparkles className={styles.magicIcon} />
          <span className={styles.magicHint}>немного магии ✨</span>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
