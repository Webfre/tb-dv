import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useSearchParams } from "react-router-dom";
import { menuItemsSideBar } from "./menuItemsSideBar";
import { courseList, mockTopics } from "../DB";

// Исключения (полные или частичные маршруты)
const excludedRoutes = ["/panel/mentorlist"];

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x && x !== "panel");

  const isExcluded = excludedRoutes.some((excludedPath) =>
    location.pathname.startsWith(excludedPath)
  );

  if (isExcluded || pathnames.length <= 1) return null;

  const breadcrumbs: { label: string; path: string }[] = [];

  // 1. Курсы (из menuItemsSideBar)
  const courseMenuItem = menuItemsSideBar.find(
    (item) => item.url === "/panel/course"
  );
  if (courseMenuItem) {
    breadcrumbs.push({
      label: courseMenuItem.breadcrumbs?.[0]?.label || courseMenuItem.title,
      path: courseMenuItem.url,
    });
  }

  // 2. Курс
  const courseId = pathnames[1];
  const course = courseList.find((c) => c.id === Number(courseId));
  if (course) {
    breadcrumbs.push({
      label: course.title,
      path: `/panel/course/${course.id}`,
    });
  }

  // 3. Тема (если есть topicId в query)
  const topicId = searchParams.get("topicId");
  if (topicId) {
    const topic = mockTopics.find((t) => t.id === topicId);
    if (topic) {
      breadcrumbs.push({
        label: topic.title,
        path: `/panel/course/${courseId}?topicId=${topic.id}`,
      });
    }
  }

  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      separator="›"
      sx={{
        "& .MuiBreadcrumbs-separator": {
          color: "#947ef6",
        },
        "& .MuiLink-root": {
          color: "#947ef6",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
        "& .MuiTypography-root": {
          color: "#947ef6",
          fontWeight: 500,
        },
      }}
    >
      {breadcrumbs.map((crumb, index) =>
        index < breadcrumbs.length - 1 ? (
          <Link key={crumb.path} href={crumb.path}>
            {crumb.label}
          </Link>
        ) : (
          <Typography key={crumb.path} color="text.primary">
            {crumb.label}
          </Typography>
        )
      )}
    </MUIBreadcrumbs>
  );
};
