const { connect } = require("mongoose")

async function connectDB() {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Database connected")
  } catch (err) {
    console.log(err)
  }
}

module.exports = { connectDB }
