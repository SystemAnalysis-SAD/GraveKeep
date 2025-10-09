import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./api/auth";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./api/PublicRoute,";
import HomeMain from "./pages/Home/Home_Main";
import Memorial from "./pages/Memorial/Memorial";
import MemorialMain from "./pages/Memorial/Memorial_Main";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeMain />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/memorial/search"
            element={
              <PublicRoute>
                <MemorialMain />
              </PublicRoute>
            }
          />

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
