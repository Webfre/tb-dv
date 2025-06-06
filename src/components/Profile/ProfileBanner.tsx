import React from "react";
import { Box, Typography, Chip, Avatar, Stack } from "@mui/material";
import { Mentor } from "../MentorProfilePage/mentorsData";
import { useNavigate } from "react-router-dom";
import { chip_sx } from "../../styles/global";

interface ProfileBannerProps {
  courseTitle: string;
  courseType: string;
  mentors: Mentor[];
  isSelected: boolean;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  courseTitle,
  courseType,
  mentors,
  isSelected,
}) => {
  const navigate = useNavigate();

  const handleMentorClick = (
    event: React.MouseEvent<HTMLDivElement>,
    mentorId: number
  ) => {
    event.stopPropagation();
    navigate(`/panel/mentorlist/${mentorId}`);
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
          sx={{ ...chip_sx, marginBottom: "10px" }}
          label={`Грейд: ${
            courseType === "Pro"
              ? "Junior, Junior+ / Middle"
              : "Trainee, Junior"
          }`}
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
            <Typography
              color={isSelected ? "rgb(250, 250, 250)" : "text.secondary"}
              variant="caption"
              align="center"
            >
              {mentor.grade}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProfileBanner;
