import { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsagePage from "./pages/Usage";
import CommunityPage from "./pages/CommunityPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [active, setActive] = useState("Users API");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/usage"
          element={<UsagePage active={active} setActive={setActive} />}
        />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
