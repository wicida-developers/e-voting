import api from "../../lib/api"
import myToast from "../../components/MyToast"
import { setAuthUserChosen } from "../authUser/action"

const ActionType = {
  CHOOSE: "CHOOSE",
}

function choose(choice) {
  return {
    type: ActionType.CHOOSE,
    payload: { choice },
  }
}

function asyncChoose(choice) {
  return async function (dispatch) {
    try {
      console.log("choice", choice)
      await api.choose(choice)
      dispatch(choose(choice))
      dispatch(setAuthUserChosen(true))
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: error.message,
      })
    }
  }
}

export { ActionType, choose, asyncChoose }
