import { createStore } from "redux";
import rootReducers from "./root-reducers";

const store = createStore(rootReducers);

export default store;