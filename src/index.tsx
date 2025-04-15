import ReactDOM from "react-dom/client";
import { CssBaseline, Container } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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

const AppRoutes = () => {
  return (
    <>
      <CssBaseline />
      <Header />

      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/live" element={<LiveCodingPage />} />
          <Route path="/cheatsheet" element={<CheatsheetPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/course" element={<Сourse />} />
          <Route path="/taskbook" element={<TaskBook />} />
          <Route path="/tasks/:id" element={<TaskListPage />} />
          <Route path="/course/:id" element={<CourseTopicDetails />} />
        </Routes>
      </Container>
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
