// src/state/authState.ts

import {atom, selector} from 'recoil';
// import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthStateType = {
  isLoggedIn: boolean;
  userToken: string | null;
};

// Atom สำหรับเก็บสถานะการตรวจสอบสิทธิ์
export const authState = atom<AuthStateType>({
  key: 'authState',
  default: {
    isLoggedIn: false,
    userToken: null,
  },
});

// Selector สำหรับเช็คสถานะการเข้าสู่ระบบ
export const isLoggedInSelector = selector<boolean>({
  key: 'isLoggedInSelector',
  get: ({get}) => {
    const state = get(authState);
    return state.isLoggedIn;
  },
});
