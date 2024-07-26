// src/hooks/useAuth.ts

import {useRecoilState} from 'recoil';
import {authState} from '~/states/authState';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const login = async () => {
    // จำลองการเข้าสู่ระบบ
    setAuth({isLoggedIn: true, userToken: 'dummy-token'});
    await AsyncStorage.setItem('userToken', 'dummy-token');
  };

  const logout = async () => {
    setAuth({isLoggedIn: false, userToken: null});
    await AsyncStorage.removeItem('userToken');
  };

  return {
    isLoggedIn: auth.isLoggedIn,
    login,
    logout,
  };
};
