import { model, Schema } from "mongoose"

const UserSchema = new Schema({
  username: String,
  password: String,
  chosen: {
    type: Boolean,
    default: false,
  },
})

export default model("User", UserSchema)
