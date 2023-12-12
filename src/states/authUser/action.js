import myToast from "../../components/MyToast"
import api from "../../lib/api"

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
}

function setAuthUser(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: { authUser },
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
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: error.message,
      })
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

export { ActionType, setAuthUser, asyncSetAuthUser, asyncUnsetAuthUser }
