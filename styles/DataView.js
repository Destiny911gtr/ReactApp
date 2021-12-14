import {StyleSheet} from 'react-native';

import * as colors from '../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    paddingBottom: '3%',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
  },
  listItem: {
    flex: 1,
  },
});

export default styles;