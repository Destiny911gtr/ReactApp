import {StyleSheet} from 'react-native';

import * as colors from '../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;