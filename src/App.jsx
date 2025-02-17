// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import "./styles.css";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
};

export default App;