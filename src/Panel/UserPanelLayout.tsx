import React, { useState } from "react";
import styles from "./UserPanelLayout.module.scss";
import { Sidebar } from "./Sidebar";
import { HeaderBar } from "./HeaderBar";
import { MainContent } from "./MainContent";

export const UserPanelLayout: React.FC = () => {
  const [activeTitle, setActiveTitle] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <Sidebar onActiveChange={setActiveTitle} />

      <div className={styles.main}>
        <HeaderBar title={activeTitle} />
        <MainContent />
      </div>
    </div>
  );
};
