import { model, Schema } from "mongoose"

const PollSchema = new Schema({
  id: Number,
  count: {
    type: Number,
    default: 0,
  },
})

export default model("Poll", PollSchema)
