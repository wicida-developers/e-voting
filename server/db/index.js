/* eslint-disable no-undef */
import { connect } from "mongoose"

export default async function connectDB() {
  try {
    await connect(process.env.DATABASE_URL)
    console.log("Database connected")
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
