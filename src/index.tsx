import ReactDOM from "react-dom/client";
import { CssBaseline, Container, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./ui/theme";
import { ToastContainer } from "react-toastify";
import { Flashback } from "./components/Flashback/Flashback";
import { GlobalHelpDrawer } from "./components/GlobalHelpDrawer/GlobalHelpDrawer";
import LiveCodingPage from "./components/CodeEditorBlock/LiveCodingPage";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import CheatsheetPage from "./pages/CheatsheetPage/CheatsheetPage";
import InterviewPage from "./pages/InterviewPage/InterviewPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage";
import Сourse from "./components/Сourse/Сourse";
import CourseTopicDetails from "./components/Сourse/CourseTopicDetails";
import TaskBook from "./components/TaskBook/TaskBook";
import TaskListPage from "./pages/TaskListPage/TaskListPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import CourseInfoPage from "./pages/CourseInfoPage/CourseInfoPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import Profile from "./components/Profile/Profile";
import UserDetails from "./components/AdminDashboard/UserDetails/UserDetails";
import { UserPanelLayout } from "./Panel/UserPanelLayout";
import CourseList from "./components/Сourse/CourseList";
import TestСourse from "./components/TestСourse/TestСourse";
import MentorProfilePage from "./components/MentorProfilePage/MentorProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CoursesPageList from "./pages/CoursesPageList/CoursesPageList";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

const AppRoutes = () => {
  const location = useLocation();
  const hideHeader = [
    "/register",
    "/login",
    "/reset-password",
    "/panel",
    "/panel/taskbook",
  ].includes(location.pathname);

  const content = (
    <Routes>
      {/* LOCAL PAGE */}
      <Route path="/" element={<Home />} />

      <Route
        path="/mentorprofilepage/:id"
        element={
          <ProtectedRoute>
            <MentorProfilePage />
          </ProtectedRoute>
        }
      />

      {/* PANEL ADMIN */}
      <Route
        path="/admin-dashboard"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/admin/user/:id"
        element={
          <AdminProtectedRoute>
            <UserDetails />
          </AdminProtectedRoute>
        }
      />

      {/* PANEL USER */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/panel"
        element={
          <ProtectedRoute>
            <UserPanelLayout />
          </ProtectedRoute>
        }
      >
        <Route path="course" element={<CourseList />} />
        <Route path="taskbook" element={<TaskBook />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="livecode" element={<LiveCodingPage />} />
        <Route path="cheatsheet" element={<CheatsheetPage />} />
        <Route path="interview" element={<InterviewPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="flashback" element={<Flashback />} />
      </Route>

      {/* LOGIN */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/course-info" element={<CourseInfoPage open={true} />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* COURSE PAGE */}
      <Route path="/listcourse" element={<CoursesPageList />} />

      <Route
        path="/test"
        element={
          <ProtectedRoute>
            <TestСourse />
          </ProtectedRoute>
        }
      />

      <Route
        path="/course-access/:id"
        element={
          <ProtectedRoute>
            <Сourse />
          </ProtectedRoute>
        }
      />

      <Route
        path="/course/:id"
        element={
          <ProtectedRoute>
            <CourseTopicDetails />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );

  return (
    <>
      <CssBaseline />
      {/* {!hideHeader && <Header />} */}
      {content}
      <GlobalHelpDrawer />
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      toastStyle={{
        backgroundColor: "#846ee6",
        color: "#fff",
        borderRadius: "12px",
        fontWeight: 500,
        fontSize: "14px",
      }}
    />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
