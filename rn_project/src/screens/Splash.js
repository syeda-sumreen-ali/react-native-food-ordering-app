import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Loading....</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
