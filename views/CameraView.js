import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CameraComponent from '../components/CameraComponent';
import * as colors from '../components/Colors';

const Camera = () => {
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
