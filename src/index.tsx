import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import Home from "./pages/Home";
import Test from "./components/Test";
import Tests from "./pages/Tests";
import Header from "./components/Header";
import LiveCodingPage from "./reit/LiveCodingPage";
import CheatsheetPage from "./pages/CheatsheetPage";
import InterviewPage from "./pages/InterviewPage";
import ProjectsPage from "./pages/ProjectsPage";
import RoadmapPage from "./pages/RoadmapPage";

const App = () => (
  <Router>
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
      </Routes>
    </Container>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
