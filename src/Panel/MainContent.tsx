import React, { useRef, useState, useEffect } from "react";
import styles from "./MainContent.module.scss";
import { FaArrowUp } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";

export const MainContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = contentRef.current?.scrollTop || 0;
      setShowScrollTop(scrollTop > 500);
    };

    const container = contentRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className={styles.content} ref={contentRef}>
      <Outlet />

      {showScrollTop && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </main>
  );
};
