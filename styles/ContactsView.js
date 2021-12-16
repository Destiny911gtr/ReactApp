import {StyleSheet} from 'react-native';

import * as colors from '../components/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
  },
  itemContainer: {
    flexDirection: 'row',
    minHeight: 44,
    height: 63,
    backgroundColor: colors.secondaryCol,
    borderRadius: 10,
    padding: 10,
    marginVertical: '2%',
    marginHorizontal: '2%',
  },
  leftElementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 8,
  },
  rightSectionContainer: {
    marginLeft: 18,
    flexDirection: 'row',
    flex: 20,
  },
  mainTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  titleStyle: {
    color: colors.primaryCol,
    fontWeight: 'bold',
    fontSize: 16,
  },
  numberStyle: {
    color: colors.textCol,
    fontSize: 16,
  },
  // Avatar
  iconContainer: {
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryCol,
    height: '100%',
  },
  placeholderText: {
    fontWeight: '700',
    color: colors.secondaryCol,
  },
});

export default styles;