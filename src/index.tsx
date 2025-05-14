import ReactDOM from "react-dom/client";
import { CssBaseline, Container, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
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
import Progress from "./components/Progress/Progress";

import TestСourse from "./components/TestСourse/TestСourse";
import MentorProfilePage from "./components/MentorProfilePage/MentorProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import CourseProtectedRoute from "./ui/CourseProtectedRoute";

const AppRoutes = () => {
  const location = useLocation();
  const hideHeader = ["/register", "/login", "/reset-password"].includes(
    location.pathname
  );

  return (
    <>
      <CssBaseline />
      {!hideHeader && <Header />}

      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course-info" element={<CourseInfoPage open={true} />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/live" element={<LiveCodingPage />} />
          <Route path="/cheatsheet" element={<CheatsheetPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/taskbook" element={<TaskBook />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/tasks/:id" element={<TaskListPage />} />

          <Route
            path="/flashback"
            element={
              <CourseProtectedRoute>
                <Flashback />
              </CourseProtectedRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            }
          />

          <Route
            path="/course"
            element={
              <CourseProtectedRoute>
                <Сourse />
              </CourseProtectedRoute>
            }
          />

          <Route
            path="/test"
            element={
              <ProtectedRoute>
                <TestСourse />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mentorprofilepage/:id"
            element={
              <ProtectedRoute>
                <MentorProfilePage />
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
      </Container>

      <GlobalHelpDrawer />
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
    <ToastContainer position="top-right" autoClose={3000} />
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
