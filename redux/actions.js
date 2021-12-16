import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import Contacts from 'react-native-contacts';

import * as utils from '../components/Utils';

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_APIDATA = 'SET_APIDATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_LATITUDE = 'SET_LATITUDE';
export const SET_LONGITUDE = 'SET_LONGITUDE';
export const SET_CONTACTS = 'SET_CONTACTS';

const url = `https://www.swapi.it/api/people`;

export function fetchApiData() {
  return async dispatch => {
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
}

export function getLocation() {
  return async dispatch => {
    utils.requestLocationPermission().then(() => {
      Geolocation.getCurrentPosition(
        info => {
          dispatch({
            type: SET_LATITUDE,
            payload: info.coords.latitude,
          });
          dispatch({
            type: SET_LONGITUDE,
            payload: info.coords.longitude,
          });
        },
        console.log('error getting location'),
        {
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 1000,
        },
      );
    });
  };
}

export function getContacts() {
  return async dispatch => {
    utils.requestContactsPermission().then(() => {
      Contacts.getAll()
        .then(contacts => {
          {
            contacts.sort(
              (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
            );
            const trimmedContacts = contacts
              .filter(c => c.phoneNumbers.length > 0)
              .map(c => {
                return {
                  hasThumbnail: c['hasThumbnail'],
                  thumbnailPath: c['thumbnailPath'],
                  givenName: c['givenName'],
                  familyName: c['familyName'],
                  recordID: c['recordID'],
                  phoneNumbers: c['phoneNumbers'],
                };
              });
            dispatch({
              type: SET_CONTACTS,
              payload: trimmedContacts,
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    });
  };
}

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

export const setLatitude = latitude => dispatch => {
  dispatch({
    type: SET_LATITUDE,
    payload: latitude,
  });
};

export const setLongitude = longitude => dispatch => {
  dispatch({
    type: SET_LONGITUDE,
    payload: longitude,
  });
};
