import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import { LiaThumbtackSolid } from "react-icons/lia";
import { useNavigate, useLocation } from "react-router-dom";
import { menuItemsSideBar } from "./menuItemsSideBar";

interface SidebarProps {
  onActiveChange: (title: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onActiveChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [hovered, setHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const isCollapsed = !isPinned && !hovered;

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  const handlePinToggle = () => {
    setIsPinned((prev) => !prev);
  };

  const activeItem = menuItemsSideBar.find(
    (item) => item.url === location.pathname
  );

  React.useEffect(() => {
    if (activeItem) {
      onActiveChange(activeItem.title);
    }
  }, [location.pathname]);

  return (
    <aside
      className={classNames(styles.sidebar, {
        [styles.collapsed]: isCollapsed,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.toggleWrapper}>
        <button
          className={classNames(styles.toggle, { [styles.pinned]: isPinned })}
          onClick={handlePinToggle}
        >
          <LiaThumbtackSolid />
        </button>
      </div>

      <nav className={styles.menu}>
        {menuItemsSideBar.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.url)}
              className={classNames(styles.menuItem, {
                [styles.active]: location.pathname === item.url,
              })}
            >
              <Icon className={styles.icon} />

              {!isCollapsed && (
                <span className={styles.title}>{item.title}</span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
