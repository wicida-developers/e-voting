import { useDispatch, useSelector } from "react-redux"
import Routes from "./routes"
import { useEffect } from "react"
import { asyncPreloadProcess } from "./states/isPreload/action"
import Loading from "./components/Loading"

function App() {
  const isPreload = useSelector((state) => state.isPreload)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  if (isPreload) return <Loading />

  return (
    <main className="App">
      <Routes />
    </main>
  )
}

export default App
