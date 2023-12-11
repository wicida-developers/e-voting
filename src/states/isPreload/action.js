import api from "../../lib/api"
import { setAuthUser } from "../authUser/action"

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
}

function setIsPreload(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: { isPreload },
  }
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const authUser = await api.getMe()
      dispatch(setAuthUser(authUser.data))
    } catch (error) {
      dispatch(setAuthUser(null))
    } finally {
      dispatch(setIsPreload(false))
    }
  }
}

export { ActionType, setIsPreload, asyncPreloadProcess }
