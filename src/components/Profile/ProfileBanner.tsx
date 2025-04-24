import React from "react";
import { Box, Typography, Chip, Paper, Avatar, Stack } from "@mui/material";
import { Mentor } from "./mentorsData";
import styles from "./ProfileBanner.module.scss";

interface ProfileBannerProps {
  courseTitle: string;
  courseType: "Basic" | "Pro";
  mentors: Mentor[];
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  courseTitle,
  courseType,
  mentors,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "20px",
        padding: 3,
        background: "#f5f5f5",
        mb: 4,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        position="relative"
      >
        <Box>
          <Chip
            sx={{ mb: 2 }}
            label={`Грейд: ${
              courseType === "Pro"
                ? "Junior, Junior+ / Middle"
                : "Trainee, Junior"
            }`}
            color="info"
          />

          <Typography variant="h5" fontWeight={600}>
            Курс: {courseTitle}
          </Typography>
        </Box>

        <Stack direction="row" spacing={3}>
          {mentors.map((mentor, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar src={mentor.avatarUrl}>{mentor.name[0]}</Avatar>
              <Typography variant="body2" fontWeight={500} mt={1}>
                {mentor.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                align="center"
              >
                {mentor.specialization}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default ProfileBanner;
