// src/navigation/AppNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';
import {isLoggedInSelector} from '~/states/authState';
import HomeScreen from '~/screens/HomeScreen';
import LoginScreen from '~/screens/LoginScreen';
import ProfileScreen from '~/screens/ProfileScreen';
import {RootStackParams} from 'types/navigations';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
