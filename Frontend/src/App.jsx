import {
  HashRouter as Hash,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./api/auth";
import PublicRoute from "./api/PublicRoute,";
import MainLayout from "./pages/MainLayout ";

// Pages
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Admin/Dashboard";
import Home from "./pages/Home/Home";
import Search from "./pages/Memorial/Memorial";
import PurposeMain from "./pages/Purpose/PurposeMain";
import NotFound from "./pages/404/NotFound";
import Custom404 from "./Notfound";
// import MemorialMain from "./pages/Memorial/Memorial_Main";

export default function App() {
  return (
    <AuthProvider>
      <Hash>
        <Routes>
          {/* Public routes with main layout */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <MainLayout />
              </PublicRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/purpose" element={<PurposeMain />} />
            <Route path="/purpose/:id" element={<PurposeMain />} />
            <Route path="memorial/search" element={<Search />} />
          </Route>

          {/* Public routes without main layout (like auth pages) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* 404 route */}
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </Hash>
    </AuthProvider>
  );
}
