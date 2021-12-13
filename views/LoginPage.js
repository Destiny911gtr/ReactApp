import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {VerifyCredentials} from '../components/Utils';
import * as colors from '../components/Colors';

GoogleSignin.configure();

const LoginPage = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(route.params?.userInfo ?? null);

  const handleEmailInput = text => {
    setEmail(text);
  };

  const handlePasswordInput = text => {
    setPassword(text);
  };

  const setUserInfoToState = userInfo => {
    setUserInfo(userInfo);
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfoToState({ userInfo });
      setEmail(userInfo.user.email);
      navigation.replace('ApiData');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/images/login_image.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.foregroundCol}
          onChangeText={handleEmailInput}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={colors.foregroundCol}
          onChangeText={handlePasswordInput}
          secureTextEntry={true}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            VerifyCredentials(email, password)
              ? navigation.navigate('Profile', {email})
              : null
          }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <GoogleSigninButton
          style={{width: 140, height: 48, marginTop: 20}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          // disabled={isSigninInProgress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 20,
    paddingTop: '20%',
    width: '100%',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom:'20%',
  },
  logo: {
    width: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  loginText: {
    color: colors.backgroundCol,
  },
  loginBtn: {
    width: '70%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: colors.backgroundCol,
    backgroundColor: colors.primaryCol,
  },
  textInput: {
    width: '70%',
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: colors.secondaryCol,
    color: colors.foregroundCol,
    alignItems: 'center',
  },
});

export default LoginPage;
