import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { closeHelp } from "../../store/uiSlice";
import { RootState } from "../../store/store";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useLocation } from "react-router-dom";
import { helpContent } from "./helpContent";

export const GlobalHelpDrawer = () => {
  const open = useSelector((state: RootState) => state.ui.helpOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  const currentHelp = helpContent.find((item) =>
    location.pathname.toLowerCase().startsWith(item.path.toLowerCase())
  );

  return (
    <Drawer anchor="right" open={open} onClose={() => dispatch(closeHelp())}>
      <Box sx={{ width: 600, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          {currentHelp?.title || "Справка"}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="body2" sx={{ mb: 2 }}>
          {currentHelp?.descr || (
            <Typography variant="body2" sx={{ mb: 2 }}>
              Эта справка автоматически подстраивается под страницу, на которой
              вы находитесь. Она помогает понять, как использовать
              функциональность текущего раздела: будь то теория, тесты, задачи
              или проекты.
              <br />
              Просто нажмите на значок{" "}
              <InfoOutlinedIcon sx={{ fontSize: "20px" }} /> в шапке, и вы
              получите описание и пошаговые рекомендации, если они
              предусмотрены.
            </Typography>
          )}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}></Typography>

        {currentHelp?.steps && (
          <Stepper orientation="vertical" nonLinear activeStep={-1}>
            {currentHelp.steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
      </Box>
    </Drawer>
  );
};
