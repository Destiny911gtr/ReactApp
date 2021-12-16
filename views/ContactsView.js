import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';

import ListView from '../components/ListView';
import styles from '../styles/ContactsView';
import {getContacts} from '../redux/actions';

const ContactsView = () => {
  const { contacts } = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={contacts}
          renderItem={contact => {
            {
              console.log('contact -> ' + JSON.stringify(contact));
            }
            return (
              <ListView
                key={contact.item.recordID}
                item={contact.item}
              />
            );
          }}
          keyExtractor={item => item.recordID}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactsView;
