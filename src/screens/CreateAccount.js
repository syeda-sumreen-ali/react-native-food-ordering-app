import React, {useContext} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

import {AuthContext} from '../context';

const CreateAccount = ({navigation}) => {
  const {signUp} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>CreateAccount</Text>
      <Button title="Create Account" onPress={() => signUp()} />
      <Button
        title="Sign In"
        onPress={() => navigation.push('SignIn')}
        style={styles.button}
      />
    </View>
  );
};

export default CreateAccount;

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
