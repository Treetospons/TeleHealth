import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '~/screens/ProfileScreen';
import DetailScreen from '~/screens/DetailScreen';
import {RootStackParams} from '~/types/navigations/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          animation: 'flip',
        }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
