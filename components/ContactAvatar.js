// Access Device’s Contact List in React Native App
// https://aboutreact.com/access-contact-list-react-native/

import React from 'react';
import {Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from '../styles/ContactsView';

const Avatar = props => {
  const renderImage = () => {
    const {img, width, height, roundedImage} = props;
    const {imageContainer, image} = styles;

    const viewStyle = [imageContainer];
    if (roundedImage)
      viewStyle.push({borderRadius: Math.round(width + height) / 2});
    return (
      <View style={viewStyle}>
        <Image style={image} source={img} />
      </View>
    );
  };

  const renderPlaceholder = () => {
    const {placeholder, width, height, roundedPlaceholder} = props;
    const {placeholderContainer, placeholderText} = styles;

    const viewStyle = [placeholderContainer];
    if (roundedPlaceholder)
      viewStyle.push({borderRadius: Math.round(width + height) / 2});

    return (
      <View style={viewStyle}>
        <View style={viewStyle}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            minimumFontScale={0.01}
            style={[{fontSize: Math.round(width) / 2}, placeholderText]}>
            {placeholder}
          </Text>
        </View>
      </View>
    );
  };

  const {img, width, height} = props;
  const {container} = styles;
  return (
    <View style={[styles.iconContainer, props.style, {width, height}]}>
      {img ? renderImage() : renderPlaceholder()}
    </View>
  );
};

Avatar.propTypes = {
  img: Image.propTypes.source,
  placeholder: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  roundedImage: PropTypes.bool,
  roundedPlaceholder: PropTypes.bool,
};

Avatar.defaultProps = {
  roundedImage: true,
  roundedPlaceholder: true,
};

export default Avatar;
