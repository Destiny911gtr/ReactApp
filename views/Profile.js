import React from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import * as colors from '../components/Colors';

const Profile = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>Email: {route.params.email}</Text>
      <Button title="Camera" onPress={() => navigation.navigate('Camera')}/>
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
});

export default Profile;