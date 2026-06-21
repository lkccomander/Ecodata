import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import PlatformPage from "./pages/PlatformPage";
import PricingPage from "./pages/PricingPage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<PlatformPage />} />
        <Route path="/overview" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}
