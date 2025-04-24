import { Container } from "@mui/material";
import { mentors } from "../MentorProfilePage/mentorsData";
import ProfileBanner from "./ProfileBanner";
import ProfileTabsCard from "./ProfileTabsCard";

export default function Profile() {
  return (
    <Container sx={{ mt: 4 }}>
      <ProfileBanner
        courseTitle="Frontend-разработчик React (базовый)"
        courseType="Basic"
        mentors={mentors}
      />

      <ProfileTabsCard />
    </Container>
  );
}
