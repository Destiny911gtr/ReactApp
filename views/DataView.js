import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import axios from 'axios';

import styles from '../styles/DataView';

const DataView = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = `https://www.swapi.it/api/people`;
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        console.log(response.data);
        setIsLoading(false);
        setData(response.data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Data fetching cancelled');
        } else {
          console.log('Error fetching data');
        }
      }
    };
    fetchUsers();
    return () => source.cancel('Data fetching cancelled');
  }, []);

  return (
    <View style={styles.container}>
      {!isLoading && (
        <View style={styles.listContainer}>
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
      )}
      {isLoading && (
        <View style={styles.LoadingContainer}>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default DataView;
