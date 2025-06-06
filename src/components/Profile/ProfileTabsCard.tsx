import React, { useState } from "react";
import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import { tabs_sx } from "../../styles/global";
import Progress from "../Progress/Progress";
import UserInfo from "./UserInfo";

interface ProfileTabsCardProps {
  selectedCourseId: string;
  hasAccess: boolean;
}

const ProfileTabsCard: React.FC<ProfileTabsCardProps> = ({
  selectedCourseId,
  hasAccess,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabLabels = hasAccess
    ? ["Прогресс", "Избранное", "Инфо"]
    : ["Избранное", "Инфо"];

  const tabContent = hasAccess
    ? [
        <Progress courseId={selectedCourseId} />,
        <Typography>Здесь избранное</Typography>,
        <UserInfo />,
      ]
    : [<Typography>Здесь избранное</Typography>, <UserInfo />];

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
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} sx={tabs_sx} />
        ))}
      </Tabs>

      <Box p={3}>{tabContent[activeTab]}</Box>
    </Paper>
  );
};

export default ProfileTabsCard;
