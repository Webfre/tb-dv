import React, { useState } from "react";
import { LiaThumbtackSolid } from "react-icons/lia";
import { Tooltip } from "@mui/material";
import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { menuItemsSideBar } from "./menuItemsSideBar";
import { useSelector } from "react-redux";
import { FcLock } from "react-icons/fc";
import {
  selectAllAccessCourses,
  selectIsAccessLoading,
} from "../store/accessSlice";
import TelegramIcon from "@mui/icons-material/Telegram";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FeatureRequestButton from "../components/GlobalHelpDrawer/FeatureRequestButton";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import Spinner from "../ui/Spinner";

interface SidebarProps {
  onActiveChange: (title: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onActiveChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessCourses = useSelector(selectAllAccessCourses) || [];
  const isLoading = useSelector(selectIsAccessLoading);
  const [isFeatureDialogOpen, setIsFeatureDialogOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const sortedMenuItems = [...menuItemsSideBar].sort((a, b) => {
    const aRequires = a.requiresAccess ? 1 : 0;
    const bRequires = b.requiresAccess ? 1 : 0;
    return aRequires - bRequires;
  });

  const isCollapsed = !isPinned && !hovered;

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  const handlePinToggle = () => {
    setIsPinned((prev) => !prev);
  };

  React.useEffect(() => {
    const matchedItem = menuItemsSideBar.find((item) => {
      if (item.url === location.pathname) return true;
      if (item.nested && location.pathname.startsWith(item.url + "/"))
        return true;
      return false;
    });

    if (matchedItem) {
      onActiveChange(matchedItem.title);
    } else {
      onActiveChange("");
    }
  }, [location.pathname]);

  React.useEffect(() => {
    const storedPinned = localStorage.getItem("sidebarPinned");
    if (storedPinned !== null) {
      setIsPinned(storedPinned === "true");
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("sidebarPinned", String(isPinned));
  }, [isPinned]);

  if (isLoading) {
    return <Spinner />;
  }

  const hasAccess = accessCourses.length > 0;

  return (
    <aside
      className={classNames(styles.sidebar, {
        [styles.collapsed]: isCollapsed,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.toggleWrapper}>
        {!isCollapsed && (
          <span onClick={() => navigate("/")} className={styles.logoText}>
            Frontarium
          </span>
        )}

        <button
          className={classNames(styles.toggle, { [styles.pinned]: isPinned })}
          onClick={handlePinToggle}
        >
          <LiaThumbtackSolid />
        </button>
      </div>

      <nav className={styles.menu}>
        {sortedMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = matchPath(
            { path: item.url, end: false },
            location.pathname
          );

          const locked = item.requiresAccess && !hasAccess;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.url)}
              className={classNames(styles.menuItem, {
                [styles.active]: !!isActive,
                [styles.locked]: locked,
              })}
            >
              <Icon className={styles.icon} />
              {!isCollapsed && (
                <span className={styles.title}>
                  {item.title}
                  {locked && <FcLock className={styles.lockIcon} />}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.footerIcons}>
          <Tooltip title="Телеграмм канал" arrow>
            <a
              href="https://t.me/frontarium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className={styles.footerIcon} />
            </a>
          </Tooltip>

          <Tooltip title="Техподдержка" arrow>
            <button
              type="button"
              onClick={() => setIsFeatureDialogOpen(true)}
              className={styles.footerIconButton}
            >
              <SupportAgentIcon className={styles.footerIcon} />
            </button>
          </Tooltip>
        </div>
      </div>

      <FeatureRequestButton
        open={isFeatureDialogOpen}
        onClose={() => setIsFeatureDialogOpen(false)}
      />
    </aside>
  );
};
