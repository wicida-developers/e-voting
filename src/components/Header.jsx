import { useNavigate } from "react-router-dom"
import HimaTiLogo from "../assets/hima-ti.png"
import { Button } from "@material-tailwind/react"
import { useSelector } from "react-redux"

export default function Header() {
  const authUser = useSelector((state) => state.authUser)

  const navigate = useNavigate()
  return (
    <div
      className="header flex flex-row fixed bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 
    top-0 z-10 px-5 xl:px-10 justify-between items-center w-full h-20 "
    >
      <div className="logo flex flex-row items-center">
        <img src={HimaTiLogo} alt="HimaTi Logo" className="w-10 md:w-16" />
        <div className="logo-text ml-2 text-gray-700 font-bold text-lg"></div>
      </div>
      <div className="button flex flex-row items-center">
        {authUser ? (
          <Button
            onClick={() => navigate("/vote")}
            className="bg-loginBg text-white border-whitext-white border-2 shadow-none "
          >
            Vote
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="bg-loginBg text-white border-loginBg border-2 shadow-none "
          >
            Login
          </Button>
        )}
      </div>
    </div>
  )
}
