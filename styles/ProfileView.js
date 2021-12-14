import { StyleSheet } from "react-native";

import * as colors from '../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.secondaryCol,
    alignItems: 'center',
  },
  text: {
    color: colors.foregroundCol,
  },
  btnText: {
    color: colors.backgroundCol,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    color: colors.backgroundCol,
    backgroundColor: colors.primaryCol,
  },
});

export default styles;