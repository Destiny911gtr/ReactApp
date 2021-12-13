import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, ToastAndroid, TouchableOpacity} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Icon from 'react-native-vector-icons/Feather';
import Geolocation from '@react-native-community/geolocation';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

import * as colors from '../components/Colors';
import * as utils from '../components/Utils';
import Counter from '../components/CounterComponent';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};
const store = createStore(reducer);

const Profile = ({navigation, route}) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  utils.requestLocationPermission();
  Geolocation.getCurrentPosition(
    info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
      console.log(info.coords.latitude);
      console.log(info.coords.longitude);
    },
    console.log('error getting location'),
    {
      enableHighAccuracy: false,
      timeout: 20000,
      maximumAge: 1000,
    },
  );

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.replace('Login', {userInfo: null});
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.box}>
          <Text style={styles.text}>
            Email: {route.params?.email ?? 'Not Available'}
          </Text>
          <Text style={styles.text}>Latitude: {latitude}</Text>
          <Text style={styles.text}>Longitude: {longitude}</Text>
        </View>
        <View style={[{flexDirection: 'row'}]}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              utils.requestCameraPermission().then(() => {
                launchCamera(options, response => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image capture');
                  } else if (response.error) {
                    console.log('Camera Error: ', response.error);
                  } else {
                    const source = {uri: JSON.stringify(response.assets[0].uri).replace(/['"]+/g, '')};
                    navigation.navigate('ImageView', {image: source.uri});
                  }
                });
              })}>
            <Icon name="camera" size={20} color={colors.backgroundCol} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              launchImageLibrary(options, response => {
                // console.log('Response = ', response);

                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else {
                  const source = { uri: response.assets[0].uri };
                  console.log(response.assets[0].uri);
                  navigation.navigate('ImageView', {image: JSON.stringify(response.assets[0].uri).replace(/['"]+/g, '')});
                }
              })
            }>
            <Icon name="image" size={20} color={colors.backgroundCol} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Contacts')}>
            <Icon name="users" size={20} color={colors.backgroundCol} />
          </TouchableOpacity>
        </View>
        <View>
          <Counter />
        </View>
        <TouchableOpacity style={styles.btn} onPress={signOut}>
          <Icon name="log-out" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.secondaryCol,
    alignItems: 'center',
  },
  text: {
    color: colors.foregroundCol,
  },
  btnText: {
    color: colors.backgroundCol,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    color: colors.backgroundCol,
    backgroundColor: colors.primaryCol,
  },
});

export default Profile;
