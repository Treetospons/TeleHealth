// src/screens/LoginScreen.tsx

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../hooks/useAuth';

const LoginScreen = () => {
  const {login} = useAuth();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default LoginScreen;
