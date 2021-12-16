// Access Device’s Contact List in React Native App
// https://aboutreact.com/access-contact-list-react-native/

import React, {memo} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';
import Avatar from './ContactAvatar';
import styles from '../styles/ContactsView';

const getAvatarInitials = textString => {
  if (!textString) return '';
  const text = textString.trim();
  const textSplit = text.split(' ');
  if (textSplit.length <= 1) return text.charAt(0);
  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
  return initials;
};

const ListView = props => {
  const shouldComponentUpdate = () => {
    return false;
  };
  const { item } = props;

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <View style={styles.leftElementContainer}>
            <Avatar
              img={item.hasThumbnail ? {uri: item.thumbnailPath} : undefined}
              placeholder={getAvatarInitials(
                `${item.givenName} ${item.familyName}`,
              )}
              width={40}
              height={40}
            />
          </View>
          <View style={styles.rightSectionContainer}>
            <View style={styles.mainTitleContainer}>
              <Text
                style={
                  styles.titleStyle
                }>{`${item.givenName} ${item.familyName}`}</Text>
              <Text style={ styles.numberStyle }>{`${item.phoneNumbers[0].number}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ListView);

ListView.propTypes = {
  item: PropTypes.object,
};
