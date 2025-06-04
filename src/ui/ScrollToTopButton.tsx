import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTopButton.module.scss";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(percent);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div className={styles.wrapper} onClick={handleClick}>
      <svg className={styles.progressCircle} viewBox="0 0 36 36">
        <path
          className={styles.bg}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={styles.progress}
          strokeDasharray={`${scrollPercent}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <FaArrowUp className={styles.icon} />
    </div>
  ) : null;
};

export default ScrollToTopButton;
