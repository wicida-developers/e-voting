import { useState } from "react"
import { useDispatch } from "react-redux"
import { asyncSetAuthUser } from "../states/authUser/action"
import myToast from "../components/MyToast"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) return myToast.fire({ icon: "error", title: "Username dan password harus diisi" })
    dispatch(asyncSetAuthUser({ username, password }))
  }

  return (
    <main className="min-h-screen bg-blue-400 grid place-items-center px-8 md:px-0">
      <section className="max-w-md w-full bg-gray-50 py-12 px-9 rounded-lg mx-3 md:mx-0 md:shadow-md md:border md:border-gray-200">
        <h1 className="text-3xl font-bold mb-10">E-Vote Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full py-3 px-2 rounded-lg focus:border-2 focus:border-blue-400 focus:outline-none border border-gray-300"
              type="text"
              id="username"
              name="username"
              placeholder="masukkan username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label className="block font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full py-3 px-2 rounded-lg focus:border-2 focus:border-blue-400 focus:outline-none border border-gray-300"
              type="password"
              id="password"
              name="password"
              placeholder="masukkan password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            className="w-full py-3 px-2 rounded-lg bg-blue-400 text-white font-bold hover:bg-blue-500"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  )
}
