import { MAIN_TYPES } from "./types";

const initialState = {
    counter: 0,
    email: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case MAIN_TYPES.INCREASE_COUNTER :
        return {
            ...state,
            counter: counter + 1,
        };
      case MAIN_TYPES.DECREASE_COUNTER:
        return {
            ...state,
            counter: state.counter - 1
        };
      default:
        return state
    }
  };

export default reducer;