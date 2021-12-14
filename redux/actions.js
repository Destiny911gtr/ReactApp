import axios from 'axios';

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_APIDATA = 'SET_APIDATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

const url = `https://www.swapi.it/api/people`;

export function fetchApiData() {
    return async (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        });
        dispatch({
          type: SET_ERROR,
          payload: false,
        });
        try {
            const response = await axios.get(url);
            if (response) {
                dispatch({
                    type: SET_APIDATA,
                    payload: response.data.results,
                });
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                dispatch({
                  type: SET_ERROR,
                  payload: false,
                });
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                dispatch({
                    type: SET_ERROR,
                    payload: true,
                });
                console.log('Data fetching cancelled');
            } else {
                dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
                dispatch({
                    type: SET_ERROR,
                    payload: true,
                });
                console.log('Error fetching data');
            }
        }
    };
};


export const increaseCounter = counter => dispatch => {
  dispatch({
    type: INCREASE_COUNTER,
    payload: counter,
  });
};

export const decreaseCounter = counter => dispatch => {
  dispatch({
    type: DECREASE_COUNTER,
    payload: counter,
  });
};

export const setEmail = email => dispatch => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
};

export const setData = data => dispatch => {
  dispatch({
    type: SET_APIDATA,
    payload: data,
  });
};

export const setLoading = loading => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: loading,
  });
};

export const setError = error => dispatch => {
  dispatch({
    type: SET_ERROR,
    payload: error,
  });
};