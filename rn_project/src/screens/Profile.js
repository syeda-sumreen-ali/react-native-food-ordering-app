import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Switch To Home Stack Screen"
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="Switch To Details Screen of  Stack Screen"
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Details',
            params: {name: 'Home Details Screen coming from profile'},
          });
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    width: '70px',
    backgroundColor: 'red',
    color: 'blue',
    marginTop: '',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
