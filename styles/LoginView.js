import { StyleSheet } from 'react-native';

import * as colors from '../components/Colors';

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
    paddingBottom: '20%',
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

export default styles;