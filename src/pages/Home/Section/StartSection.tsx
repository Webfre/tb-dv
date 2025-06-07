import { useState } from "react";
import { startTabs } from "./startTabs";
import styles from "./StartSection.module.scss";
import classNames from "classnames";

function StartSection() {
  const [activeTab, setActiveTab] = useState(1);
  const currentTab = startTabs.find((tab) => tab.id === activeTab)!;

  return (
    <>
      <section className={styles.container}>
        <span className={styles.subtitleTop}>Перспективы</span>
        <div className={styles.content}>
          <div className={styles.imageBlock}>
            <img src={currentTab.image} alt={currentTab.title} />

            <div className={styles.dots}>
              {startTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={classNames(styles.dot, {
                    [styles.activeDot]: activeTab === tab.id,
                  })}
                />
              ))}
            </div>
          </div>
          <div className={styles.textBlock}>
            <span className={styles.subtitle}>Перспективы</span>
            <h2 className={styles.title}>{currentTab.desc}</h2>

            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: currentTab.text }}
            />

            <button className={styles.primary}>Начать →</button>
          </div>
        </div>

        <div className={styles.tabs}>
          {startTabs.map((tab) => (
            <div
              key={tab.id}
              className={classNames(styles.tab, {
                [styles.active]: activeTab === tab.id,
              })}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className={styles.circle}>{`0${tab.id}`}</div>
              <span className={styles.tabTitle}>{tab.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default StartSection;
