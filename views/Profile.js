import React, {useState} from 'react';
import {View, Text, StyleSheet, ToastAndroid, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import Geolocation from '@react-native-community/geolocation';

import * as colors from '../components/Colors';
import * as utils from '../components/Utils';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

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

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Email: {route.params.email}</Text>
        <Text style={styles.text}>Latitude: {latitude}</Text>
        <Text style={styles.text}>Longitude: {longitude}</Text>
      </View>
      <View style={[{flexDirection: 'row'}]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Camera')}>
          <Icon name="camera" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            launchImageLibrary(options, response => {
              console.log('Response = ', response);

              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
                alert(response.customButton);
              } else {
                const source = { uri: response.uri };
                ToastAndroid.show(
                  JSON.stringify(response.assets[0]['uri']),
                  ToastAndroid.LONG,
                );
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
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ApiData')}>
          <Icon name="download-cloud" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>
      </View>
    </View>
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
