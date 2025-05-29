import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleMode } from "../store/themeSlice";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <div
      className={styles.themeToggle_mobile}
      onClick={() => dispatch(toggleMode())}
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </div>
  );
};

export default ThemeToggle;
