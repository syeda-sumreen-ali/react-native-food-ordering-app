import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        style={styles.button}
        title="Home Details"
        onPress={() => {
          navigation.push('Details', {name: 'Home Details Screen'});
        }}
      />
      <Button
        style={styles.button}
        title="Toggle Drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    width: '70px',
    backgroundColor: 'red',
    color: 'blue',
    marginTop: '100px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
