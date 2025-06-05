import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./ui/theme";
import { ToastContainer } from "react-toastify";
import { Route } from "react-router-dom";
import { Flashback } from "./components/Flashback/Flashback";
import { UserPanelLayout } from "./Panel/UserPanelLayout";
import CourseRouteWrapper from "./ui/CourseRouteWrapper";
import MentorProfilePage from "./components/MentorProfilePage/MentorProfilePage";
import TestWrapper from "./ui/TestWrapper";
import MentorList from "./components/MentorProfilePage/MentorList";
import CourseList from "./components/Сourse/CourseList";
import TaskBook from "./components/TaskBook/TaskBook";
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage";
import LiveCodingPage from "./components/CodeEditorBlock/LiveCodingPage";
import CheatsheetPage from "./pages/CheatsheetPage/CheatsheetPage";
import InterviewPage from "./pages/InterviewPage/InterviewPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserDetails from "./components/AdminDashboard/UserDetails/UserDetails";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./ui/ProtectedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import CourseInfoPage from "./pages/CourseInfoPage/CourseInfoPage";
import CoursesPageList from "./pages/CoursesPageList/CoursesPageList";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./pages/Home/MainLayout";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import { ReviewsBoard } from "./pages/ReviewsBoard/ReviewsBoard";

export const AppRoutes = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route path="/feedback" element={<ReviewsBoard />} />

        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />

        <Route
          path="/training"
          element={
            <MainLayout>
              <TrainingPage />
            </MainLayout>
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
          path="/admin/user/:id"
          element={
            <AdminProtectedRoute>
              <UserDetails />
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

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/course-info" element={<CourseInfoPage open={true} />} />
        <Route path="/listcourse" element={<CoursesPageList />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/panel"
          element={
            <ProtectedRoute>
              <UserPanelLayout />
            </ProtectedRoute>
          }
        >
          <Route path="course/:id" element={<CourseRouteWrapper />} />
          <Route path="mentorlist/:id" element={<MentorProfilePage />} />
          <Route path="test" element={<TestWrapper />} />
          <Route path="mentorlist" element={<MentorList />} />
          <Route path="course" element={<CourseList />} />
          <Route path="taskbook" element={<TaskBook />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="livecode" element={<LiveCodingPage />} />
          <Route path="cheatsheet" element={<CheatsheetPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="flashback" element={<Flashback />} />
        </Route>
      </Routes>
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
