import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Test from "./pages/Test";

const App = () => (
  <Router>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
