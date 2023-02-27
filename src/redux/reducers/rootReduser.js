import { combineReducers } from "redux";
import createReducer from "../reducers/create-reducer";
import likedReduser from "../reducers/like-rduser";

//2ta reducerlani 1ta qivoldik
const rootReducer = combineReducers({
  createReducer,
  likedReduser
})

export default rootReducer