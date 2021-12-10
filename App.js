import React, { useEffect } from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';

import LoginPage from './views/LoginPage';
import Profile from './views/Profile';
import CameraComponent from './views/CameraView';
import ContactsView from './views/ContactsView';
import DataView from './views/DataView';
import * as colors from './components/Colors';

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerTintColor: colors.foregroundCol,
            headerStyle: {backgroundColor: colors.backgroundCol},
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTintColor: colors.foregroundCol,
            headerStyle: {backgroundColor: colors.backgroundCol},
          }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraComponent}
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
          name="ApiData"
          component={DataView}
          options={{
            headerTintColor: colors.foregroundCol,
            headerStyle: {backgroundColor: colors.backgroundCol},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
