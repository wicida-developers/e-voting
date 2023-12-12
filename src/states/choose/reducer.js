import { ActionType } from "./action"

function chooseReducer(state = null, action = {}) {
  switch (action.type) {
    case ActionType.CHOOSE:
      return action.payload.choice
    default:
      return state
  }
}

export default chooseReducer
