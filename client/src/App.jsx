import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import MyLinks from "./pages/MyLinks";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import AuthUser from "./utils/AuthUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Authentication />} />
        <Route path="explore" element={<Explore />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        {/* Protected Routes */}

        <Route element={<AuthUser />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="my-links" element={<MyLinks />} />
          </Route>
        </Route>
        {/* Error Routes */}

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
