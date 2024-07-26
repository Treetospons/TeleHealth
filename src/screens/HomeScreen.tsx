// src/screens/HomeScreen.tsx

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../hooks/useAuth';
import {RootStackParams} from 'types/navigations';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParams, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const {logout} = useAuth();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
