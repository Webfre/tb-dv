import ReactDOM from "react-dom/client";
import { CssBaseline, Container } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import LiveCodingPage from "./components/CodeEditorBlock/LiveCodingPage";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import Test from "./components/Test/Test";
import Header from "./components/Header";
import CheatsheetPage from "./pages/CheatsheetPage";
import InterviewPage from "./pages/InterviewPage";
import ProjectsPage from "./pages/ProjectsPage";
import RoadmapPage from "./pages/RoadmapPage";
import Сourse from "./components/Сourse/Сourse";
import CourseTopicDetails from "./components/Сourse/CourseTopicDetails";
import TaskBook from "./components/TaskBook/TaskBook";
import TaskListPage from "./pages/TaskListPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminProtectedRoute from "./ui/AdminProtectedRoute";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseInfoPage from "./pages/CourseInfoPage";

const AppRoutes = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/course-info";

  return (
    <>
      <CssBaseline />
      {!hideHeader && <Header />}

      <Container maxWidth="lg">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course-info" element={<CourseInfoPage />} />

          <Route
            path="/admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute>
                <Test />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tests"
            element={
              <ProtectedRoute>
                <Tests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/live"
            element={
              <ProtectedRoute>
                <LiveCodingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cheatsheet"
            element={
              <ProtectedRoute>
                <CheatsheetPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/interview"
            element={
              <ProtectedRoute>
                <InterviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roadmap"
            element={
              <ProtectedRoute>
                <RoadmapPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course"
            element={
              <ProtectedRoute>
                <Сourse />
              </ProtectedRoute>
            }
          />
          <Route
            path="/taskbook"
            element={
              <ProtectedRoute>
                <TaskBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <TaskListPage />
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
        </Routes>
      </Container>
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
    <App />
  </Provider>
);
