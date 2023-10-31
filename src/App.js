import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MoreData from "./pages/MoreData";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/post:info" element={<MoreData />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
