import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { increaseCounter } from '../redux/actions';

import * as colors from './Colors';

const Counter = ({counter}) => {
    return (
      <View style={styles.countcontainer}>
        <TouchableOpacity
          style={styles.countbtns}
          >
          <Icon name="chevron-left" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>

        <Text style={styles.counttext}>{counter}</Text>

        <TouchableOpacity
          style={styles.countbtns}
          onPress={increaseCounter}>
          <Icon name="chevron-right" size={20} color={colors.backgroundCol} />
        </TouchableOpacity>
      </View>
    );
  }

const mapStateToProps = (state) => ({
  counter: state.mainReducer.counter,
});

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  countcontainer: {
    // flex: 3,
    borderRadius: 10,
    backgroundColor: colors.secondaryCol,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counttext: {
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: '600',
    color: colors.foregroundCol,
  },
  countbtns: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: colors.primaryCol,
  },
});
