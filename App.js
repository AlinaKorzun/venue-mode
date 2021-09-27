import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {VenueMode} from 'venue-mode';

export default function App() {
  const [location, setLocation] = useState('');

  useEffect(() => {
    console.log("LOCATION", location)
  }, [location]);

  console.log('ff')

  return (
      <View style={styles.container}>
        <VenueMode setLocation={setLocation}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
