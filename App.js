import React, { useEffect } from 'react';
import {Alert, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import Icon from 'react-native-vector-icons/Feather';
import { Provider } from 'react-redux';

import LoginView from './views/LoginView';
import ProfileView from './views/ProfileView';
import ContactsView from './views/ContactsView';
import DataView from './views/DataView';
import ImageView from './views/ImageView';
import * as colors from './components/Colors';
import {store} from './redux/store';

const Stack = createNativeStackNavigator();


export default function App() {
  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      console.log('Your Firebase Token is:', fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      getFcmToken();
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage.notification.title).replace(/"/g, ''),
        JSON.stringify(remoteMessage.notification.body).replace(/"/g, ''),
      );
    });
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginView}
            options={{
              headerTintColor: colors.foregroundCol,
              headerStyle: {backgroundColor: colors.backgroundCol},
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileView}
            options={{
              headerTintColor: colors.foregroundCol,
              headerStyle: {backgroundColor: colors.backgroundCol},
            }}
          />
          <Stack.Screen
            name="Contacts"
            component={ContactsView}
            options={{
              headerTintColor: colors.foregroundCol,
              headerStyle: {backgroundColor: colors.backgroundCol},
            }}
          />
          <Stack.Screen
            name="ImageView"
            component={ImageView}
            options={{
              headerTintColor: colors.foregroundCol,
              headerStyle: {backgroundColor: colors.backgroundCol},
            }}
          />
          <Stack.Screen
            name="ApiData"
            component={DataView}
            options={({navigation}) => ({
              headerTintColor: colors.foregroundCol,
              headerStyle: {backgroundColor: colors.backgroundCol},
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Icon
                    name="settings"
                    size={20}
                    color={colors.foregroundCol}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
