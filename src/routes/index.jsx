import { useSelector } from "react-redux"
import LoggedInRoutes from "./LoggedInRoutes"
import LoggedOutRoutes from "./LoggedOutRoutes"

export default function Routes() {
  const authUser = useSelector((state) => state.authUser)

  return authUser ? <LoggedInRoutes /> : <LoggedOutRoutes />
}
