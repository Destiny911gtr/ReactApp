import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';

import * as colors from '../components/Colors';

const DataView = ({route}) => {
  const data = route.params.data.results;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={data => data.id}
        renderItem={({item}) => {
          return (
            <View style={{paddingBottom: '2%'}}>
              <Text style={styles.headerText}>
                {item.name} - {item.gender}
              </Text>
              <Text style={styles.subText}>
                Skin: {item.skin_color}, Hair Color: {item.hair_color}
              </Text>
              <Text style={styles.subText}>
                Weight: {item.mass}, Birth: {item.birth_year}
              </Text>
              <View
                style={{
                  paddingTop: '2%',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderColor: '#515151',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundCol,
    paddingHorizontal: 10,
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

export default DataView;
