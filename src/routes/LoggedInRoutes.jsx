import { Routes, Route } from "react-router-dom"
import VotePage from "../pages/VotePage"

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/vote" element={<VotePage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
