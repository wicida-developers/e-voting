import { ActionType } from "./action"

function authUserReducer(state = null, action) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser
    case ActionType.UNSET_AUTH_USER:
      return null
    case ActionType.SET_AUTH_USER_CHOSEN:
      return {
        ...state,
        chosen: action.payload.chosen,
      }
    default:
      return state
  }
}

export default authUserReducer
