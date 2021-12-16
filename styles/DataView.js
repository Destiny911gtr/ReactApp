import {StyleSheet} from 'react-native';

import * as colors from '../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
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
  itemBackground: {
    backgroundColor: colors.secondaryCol,
    borderRadius: 10,
    padding: 10,
    marginVertical: '2%',
    marginHorizontal: '2%',
  },
  headerText: {
    color: colors.primaryCol,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: colors.textCol,
    fontSize: 14,
  },
  listItem: {
    flex: 1,
  },
  borderLine: {
    paddingTop: '2%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderCol,
  },
});

export default styles;