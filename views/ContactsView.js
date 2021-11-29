import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import Contacts from 'react-native-contacts';
import ListView from '../components/ListView';
import * as colors from '../components/Colors';

const ContactsView = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        console.log('contacts -> ', contacts);
        setContacts(contacts);
      })
      .catch(err => {
        if (err === 'denied') {
          alert('Permission to access contacts was denied');
          console.warn('Permission to access contacts was denied');
        }
      });
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
  },
});

export default ContactsView;
