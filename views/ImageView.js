// Image view to view passed image file path
import React from "react";
import { View, Image } from "react-native";

import styles from "../styles/ImageView";

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