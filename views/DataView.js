import React, {useState, useEffect} from 'react';
import {
  RefreshControl,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from '../styles/DataView';
import {fetchApiData} from '../redux/actions';

const DataView = () => {
  const {data, loading, error} = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(fetchApiData());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {!loading && !error && (
        <View style={styles.listContainer}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            data={data}
            keyExtractor={data => data.id}
            renderItem={({item}) => {
              return (
                <View style={styles.itemBackground}>
                  <Text style={styles.headerText}>
                    {item.name} - {item.gender}
                  </Text>
                  <Text style={styles.subText}>
                    Skin: {item.skin_color}, Hair Color: {item.hair_color}
                  </Text>
                  <Text style={styles.subText}>
                    Weight: {item.mass}, Birth: {item.birth_year}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      )}
      {loading && !error && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      )}
      {!loading && error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error loading data</Text>
        </View>
      )}
    </View>
  );
};

export default DataView;
