import {PermissionsAndroid} from 'react-native';
//
// Verify email and password
//
export function VerifyCredentials(email, password) {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  if (!pattern.test(email)) {
    alert('Please enter a valid email');
    return false;
  } else {
    if (password.length < 8) {
      alert('Your password must be more than 7 characters');
      return false;
    } else {
      return true;
    }
  }
}
//
// Request location permission
//
export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message:
          'This App needs access to your location ' +
          'so we can know where you are.',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use locations ');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
//
// Request camera permission
//
export async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message:
          'This App needs access to your camera '
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use camera ');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
