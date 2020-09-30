import React, {useContext} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

import {AuthContext} from '../context';

const SignIn = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>SignIn Component</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        style={styles.button}
        title="Create Account"
        onPress={() => navigation.push('CreateAccount')}
      />
    </View>
  );
};

export default SignIn;

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
    flex: 1,
  },
});
