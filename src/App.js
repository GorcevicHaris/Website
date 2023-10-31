import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
