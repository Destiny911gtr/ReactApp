import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Geolocation from '@react-native-community/geolocation';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

import * as colors from '../components/Colors';
import * as utils from '../components/Utils';
import styles from '../styles/ProfileView';
import { increaseCounter, decreaseCounter } from '../redux/actions';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ProfileView = ({ navigation, route }) => {
  const { counter, email } = useSelector(state => state.reducer);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const dispatch = useDispatch();
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
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.box}>
        <Text style={styles.text}>
          Email: {email}
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
                  const source = {
                    uri: JSON.stringify(response.assets[0].uri).replace(
                      /['"]+/g,
                      '',
                    ),
                  };
                  navigation.navigate('ImageView', {image: source.uri});
                }
              });
            })
          }>
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
                const source = {uri: response.assets[0].uri};
                console.log(response.assets[0].uri);
                navigation.navigate('ImageView', {
                  image: JSON.stringify(response.assets[0].uri).replace(
                    /['"]+/g,
                    '',
                  ),
                });
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
      <View style={styles.countcontainer}>
        <TouchableOpacity
          style={styles.countbtns}
          onPress={() => dispatch(decreaseCounter())}>
          <Icon name="chevron-left" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>

        <Text style={styles.counttext}>{counter}</Text>

        <TouchableOpacity
          style={styles.countbtns}
          onPress={() => dispatch(increaseCounter())}>
          <Icon name="chevron-right" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={signOut}>
        <Icon name="log-out" size={20} color={colors.backgroundCol} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileView;
