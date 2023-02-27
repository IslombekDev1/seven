import { createStore } from "redux";
import rootReducer from "../reducers/rootReduser";

//            bu function hamisha 1 dona Reduser qabul qiladi
const store = createStore(rootReducer);

export {store}