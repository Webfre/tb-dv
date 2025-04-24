import React, { useState } from "react";
import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import Progress from "../Progress/Progress";
import UserInfo from "./UserInfo";

const tabLabels = ["Прогресс", "События", "Портфолио", "Избранное", "Инфо"];

const ProfileTabsCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: "20px",
        background: "#fdfdfd",
        mt: 4,
        mb: 4,
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      <Box p={3}>
        {activeTab === 0 && <Progress />}
        {activeTab === 1 && <Typography>Здесь будут события</Typography>}
        {activeTab === 2 && <Typography>Здесь будет портфолио</Typography>}
        {activeTab === 3 && <Typography>Здесь избранное</Typography>}
        {activeTab === 4 && <UserInfo />}
      </Box>
    </Paper>
  );
};

export default ProfileTabsCard;
