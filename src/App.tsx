import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/blogs";
import Home from "./pages/Home";
import ToolsPage from "./pages/tools";

function App() {
  return (
    <Routes>
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
