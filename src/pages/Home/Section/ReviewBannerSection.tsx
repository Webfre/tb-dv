import styles from "./ReviewBannerSection.module.scss";
import sectionStyles from "../MainLayout.module.scss";
import {
  FaSmileBeam,
  FaGrinStars,
  FaLaughSquint,
  FaGrinHearts,
  FaKissWinkHeart,
  FaThumbsUp,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReviewBannerSection = () => {
  const navigate = useNavigate();

  return (
    <div className={sectionStyles.section}>
      <div className={sectionStyles.sectionInner_main}>
        <div className={styles.banner}>
          <FaSmileBeam className={`${styles.emoji} ${styles.emoji1}`} />
          <FaGrinStars className={`${styles.emoji} ${styles.emoji2}`} />
          <FaLaughSquint className={`${styles.emoji} ${styles.emoji3}`} />
          <FaGrinHearts className={`${styles.emoji} ${styles.emoji4}`} />
          <FaKissWinkHeart className={`${styles.emoji} ${styles.emoji5}`} />
          <FaThumbsUp className={`${styles.emoji} ${styles.emoji6}`} />
          <FaHeart className={`${styles.emoji} ${styles.emoji7}`} />

          <button
            onClick={() => navigate("/feedback")}
            className={styles.reviewButton}
          >
            Отзывы
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBannerSection;
