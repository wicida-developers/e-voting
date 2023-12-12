import myToast from "../../components/MyToast"
import api from "../../lib/api"

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  SET_AUTH_USER_CHOSEN: "SET_AUTH_USER_CHOSEN",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
}

function setAuthUser(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: { authUser },
  }
}

function setAuthUserChosen(chosen) {
  return {
    type: ActionType.SET_AUTH_USER_CHOSEN,
    payload: { chosen },
  }
}

function unsetAuthUser() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  }
}

function asyncSetAuthUser({ username, password }) {
  return async function (dispatch) {
    try {
      const authUser = await api.login({ username, password })
      dispatch(setAuthUser(authUser))
      return { error: false }
    } catch (error) {
      const response = error.response
      myToast.fire({
        icon: "error",
        title: response.data.message,
      })
      return { error: true }
    }
  }
}

function asyncUnsetAuthUser() {
  return async function (dispatch) {
    try {
      api.removeAccessToken()
      dispatch(unsetAuthUser())
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: error.message,
      })
    }
  }
}

export { ActionType, setAuthUser, asyncSetAuthUser, asyncUnsetAuthUser, setAuthUserChosen }
