import "./App.css";
import Navbar from "./components/navBar/Navbar";
import MainHome from "./blog-pages/mainPage/MainHome";
import Login from "./blog-pages/login/Login";
import Register from "./blog-pages/register/Register";
import Settings from "./blog-pages/settings/Settings";
import Single from "./blog-pages/single/Single";
import Write from "./blog-pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NotFound from "./blog-pages/NotFound";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/posts" element={<MainHome />} />
        <Route path="/*" element={<NotFound  />} />

        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={ <Login />} />
        <Route path="/post/:id" element={<Single />} />

        <Route path="/write" element={currentUser ? <NotFound /> : <Login />} />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />

      </Routes>
    </Router>
  );
}

export default App;
