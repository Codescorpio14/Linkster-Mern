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
import Unauthorized from "./pages/Unauthorized";
import Dashboard from "./pages/Dashboard";

import AdminPage from "./pages/Admin/AdminPage";
import ManageUsers from "./pages/Admin/ManageUsers";

import AuthUser from "./utils/AuthUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}

        <Route index element={<Home />} />
        <Route path="account" element={<Authentication />} />
        <Route path="explore" element={<Explore />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />

        {/* Protected Routes */}

        <Route element={<AuthUser allowedRole={["member", "admin"]} />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="my-links" element={<MyLinks />} />

            {/* Admin Only */}

            <Route element={<AuthUser allowedRole={["admin"]} />}>
              <Route path="admin" element={<AdminPage />}>
                <Route index element={<ManageUsers />} />
              </Route>
            </Route>
          </Route>
        </Route>

        {/* Error Routes */}

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
