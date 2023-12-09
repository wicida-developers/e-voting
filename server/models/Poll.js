import { model, Schema } from "mongoose"

const PollSchema = new Schema({
  id: String,
  count: {
    type: Number,
    default: 0,
  },
})

export default model("Poll", PollSchema)
