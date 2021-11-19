import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import * as colors from '../components/Colors';

let options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Profile = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>Email: {route.params.email}</Text>
      <Text style={styles.textBox}>
        Latitude: {route.params.coords.latitude}
      </Text>
      <Text style={styles.textBox}>
        Longitude: {route.params.coords.longitude}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.btnText}>Camera</Text>
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
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
              const source = {uri: response.uri};
              console.log('response', JSON.stringify(response));
              // this.setState({
              //   filePath: response,
              //   fileData: response.data,
              //   fileUri: response.uri,
              // });
            }
          })
        }>
        <Text style={styles.btnText}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.btnText}>Contacts</Text>
      </TouchableOpacity>
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
  textBox: {
    color: colors.foregroundCol,
  },
  btnText: {
    color: colors.backgroundCol,
  },
  btn: {
    width: '40%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: colors.backgroundCol,
    backgroundColor: colors.primaryCol,
  },
});

export default Profile;
