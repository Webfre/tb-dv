import { Container } from "@mui/material";
import { useCheckCourseAccessQuery } from "../../api/userApi";
import { mentors } from "../MentorProfilePage/mentorsData";
import ProfileBanner from "./ProfileBanner";
import ProfileTabsCard from "./ProfileTabsCard";

export default function Profile() {
  const { data } = useCheckCourseAccessQuery();
  const hasAccess = data?.hasAccess;

  return (
    <Container sx={{ mt: 4 }}>
      {hasAccess && (
        <ProfileBanner
          courseTitle="Frontend-разработчик React (базовый)"
          courseType="Basic"
          mentors={mentors}
        />
      )}

      <ProfileTabsCard />
    </Container>
  );
}
