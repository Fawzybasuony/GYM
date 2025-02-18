import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/About";
import ContactUS from "./pages/contactUs/ContactUS";
import { PublicLayout } from "./routes/Layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUS" element={<ContactUS />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
