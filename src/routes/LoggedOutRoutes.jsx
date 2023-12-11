import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage"

export default function LoggedOutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
