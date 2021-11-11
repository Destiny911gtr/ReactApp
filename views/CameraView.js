import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CameraComponent from '../components/Camera';
import * as colors from '../components/Colors';

const Camera = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <CameraComponent />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.backgroundCol,
  },
});

export default Camera;
