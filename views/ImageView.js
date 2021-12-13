// Image view to view passed image file path
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import * as colors from '../components/Colors';

const ImageView = ({ route }) => {
    const imagePath = route.params.image;
    console.log(route.params.image);
    return (
      <View style={styles.container}>
        <Image
          source={{
            isStatic: true,
            uri: imagePath,
          }}
          style={styles.image}
        />
      </View>
    );
}

export default ImageView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});