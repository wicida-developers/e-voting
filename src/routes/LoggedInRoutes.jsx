import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
