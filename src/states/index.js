import { configureStore } from "@reduxjs/toolkit"
import authUserReducer from "./authUser/reducer"
import isPreloadReducer from "./isPreload/reducer"
import chooseReducer from "./choose/reducer"

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    choose: chooseReducer,
  },
})

export default store
