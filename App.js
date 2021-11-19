import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginPage from './views/LoginPage';
import Profile from './views/Profile';
import CameraComponent from './views/CameraView';
import * as colors from './components/Colors';
import ContactsView from './views/ContactsView';

const Stack = createNativeStackNavigator();


export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
