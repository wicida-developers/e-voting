import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import VotePage from "../pages/VotePage"

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vote" element={<VotePage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
