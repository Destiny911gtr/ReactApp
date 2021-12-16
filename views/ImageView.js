// Image view to view passed image file path
import React from "react";
import { View, Image, StatusBar } from "react-native";

import styles from "../styles/ImageView";

const ImageView = ({ route }) => {
    const imagePath = route.params.image;
    console.log(route.params.image);
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
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