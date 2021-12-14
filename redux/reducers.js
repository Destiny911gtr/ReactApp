import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_EMAIL,
  SET_APIDATA,
  SET_LOADING,
  SET_ERROR,
  SET_LATITUDE,
  SET_LONGITUDE,
} from './actions';

const initialState = {
  counter: 0,
  email: '',
  data: [],
  loading: true,
  error: false,
  latitude: 0,
  longitude: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_APIDATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LATITUDE:
      return {
        ...state,
        latitude: action.payload,
      };
    case SET_LONGITUDE:
      return {
        ...state,
        longitude: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
