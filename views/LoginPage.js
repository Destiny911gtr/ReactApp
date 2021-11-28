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

import {VerifyCredentials} from '../components/Utils';
import * as colors from '../components/Colors';



const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = text => {
    setEmail(text);
  };

  const handlePasswordInput = text => {
    setPassword(text);
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
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() =>
          VerifyCredentials(email, password)
            ? navigation.navigate('Profile', {email})
            : null
        }>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 20,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
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
