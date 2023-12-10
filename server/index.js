/* eslint-disable no-undef */
import express from "express"
import cors from "cors"
import compression from "compression"
import connectDB from "./db/index.js"
import auth from "./middleware/auth.js"
import User from "./models/User.js"
import Poll from "./models/Poll.js"
import jwt from "jsonwebtoken"

const app = express()
const PORT = process.env.PORT || 3001

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())
app.use(cors())

app.get("/api", (_, res) => res.send({ message: "Hello World!" }))

app.get("/api/polls", async (_, res) => {
  try {
    const polls = await Poll.find()
    const data = polls.map(({ id, count }) => ({ [id]: count }))
    res.send({
      status: 200,
      message: "Data berhasil ditemukan",
      data: Object.assign({}, ...data),
    })
  } catch (err) {
    res.status(400).send({ status: 400, message: err.message })
  }
})

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body
  try {
    if (!username) throw new Error("Username tidak boleh kosong")
    if (!password) throw new Error("Password tidak boleh kosong")

    const user = await User.findOne({ username, password })
    if (!user) throw new Error("Username atau password salah")

    const jwtPayload = {
      username: user.username,
    }

    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET)

    res.send({ status: 200, message: "Login berhasil", token })
  } catch (err) {
    res.status(400).send({ status: 400, message: err.message })
  }
})

app.get("/api/users/me", auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username })
    if (!user) throw new Error("User tidak ditemukan")

    const data = {
      username: user.username,
      chosen: user.chosen,
    }

    res.send({ status: 200, message: "User ditemukan", data })
  } catch (err) {
    res.status(400).send({ status: 400, message: err.message })
  }
})

app.post("/api/choose", auth, async (req, res) => {
  const { choice } = req.body
  try {
    if (!choice) throw new Error("Choice tidak boleh kosong")

    const user = await User.findOne({ username: req.user.username })
    if (!user) throw new Error("User tidak ditemukan")

    if (user.chosen) throw new Error("Anda sudah memilih")

    const poll = await Poll.findOne({ id: choice })
    if (!poll) throw new Error("Poll tidak ditemukan")

    poll.count += 1
    await poll.save()

    user.chosen = true
    await user.save()

    res.send({ status: 200, message: "Berhasil memilih" })
  } catch (err) {
    res.status(400).send({ status: 400, message: err.message })
  }
})

app.all("*", (_, res) => res.status(404).send({ message: "Not Found!" }))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
