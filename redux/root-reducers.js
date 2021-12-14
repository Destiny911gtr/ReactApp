import { combineReducers } from "redux";

import reducer from "./reducers";

const rootReducers = combineReducers({
    mainReducer: reducer,
});

export default rootReducers;