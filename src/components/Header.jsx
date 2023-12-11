import { useNavigate } from "react-router-dom"
import HimaTiLogo from "../assets/hima-ti.png"
import { Button } from "@material-tailwind/react"

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="header flex flex-row justify-between items-center w-full h-20 ">
      <div className="logo flex flex-row items-center">
        <img src={HimaTiLogo} alt="HimaTi Logo" className="h-10 w-10" />
        <div className="logo-text ml-2 text-gray-700 font-bold text-lg"></div>
      </div>
      <div className="button flex flex-row items-center">
        <Button
          onClick={() => navigate("/login")}
          className="bg-transparent text-loginBg border-loginBg border-2 shadow-none hover:bg-blue-400 hover:text-blue-gray-50"
        >
          Login
        </Button>
      </div>
    </div>
  )
}
