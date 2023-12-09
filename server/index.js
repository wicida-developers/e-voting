/* eslint-disable no-undef */
import express from "express"
import cors from "cors"
import compression from "compression"
import connectDB from "./db/index.js"
const app = express()
const PORT = process.env.PORT || 3001

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression())
app.use(cors())

app.get("/api", (_, res) => res.send({ message: "Hello World!" }))

// app.get("/api/polls", async (_, res) => {})
// app.post("/api/login", auth, async (req, res) => {})
// app.get("/api/users/me", auth, async (req, res) => {})
// app.post("/api/choose", auth,async (req, res) => {})

// app.put("/api/mhs/:nim", async (req, res) => {
//   const { nim } = req.params
//   const { pilihan } = req.body
//   try {
//     if (!nim) throw new Error("NIM tidak boleh kosong")
//     if (!pilihan) throw new Error("Pilihan tidak boleh kosong")

//     const mahasiswa = await Mahasiswa.findOne({ nim })

//     if (!mahasiswa) throw new Error("NIM anda tidak ditemukan")
//     if (mahasiswa.pilihan) throw new Error(`${nim} sudah memilih`)

//     mahasiswa.pilihan = pilihan
//     await mahasiswa.save()

//     res.send({ status: 200, message: "Data berhasil diubah" })
//   } catch (err) {
//     res.status(400).send({ status: 400, message: err.message })
//   }
// })

app.all("*", (_, res) => res.status(404).send({ message: "Not Found!" }))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
