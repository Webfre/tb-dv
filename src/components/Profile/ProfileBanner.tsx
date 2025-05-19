import React from "react";
import { Box, Typography, Chip, Paper, Avatar, Stack } from "@mui/material";
import { Mentor } from "../MentorProfilePage/mentorsData";
import { useNavigate } from "react-router-dom";

interface ProfileBannerProps {
  courseTitle: string;
  courseType: string;
  mentors: Mentor[];
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  courseTitle,
  courseType,
  mentors,
}) => {
  const navigate = useNavigate();

  const handleMentorClick = (
    event: React.MouseEvent<HTMLDivElement>,
    mentorId: number
  ) => {
    event.stopPropagation();
    navigate(`/mentorprofilepage/${mentorId}`);
  };

  return (
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
            onClick={(e) => handleMentorClick(e, mentor.id)}
            sx={{ cursor: "pointer" }}
          >
            <Avatar src={mentor.avatarUrl}>{mentor.name[0]}</Avatar>
            <Typography variant="body2" fontWeight={500} mt={1}>
              {mentor.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" align="center">
              {mentor.grade}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProfileBanner;
