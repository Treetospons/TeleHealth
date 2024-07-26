/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigator from 'navigations/AppNavigator';
import React from 'react';
import {RecoilRoot} from 'recoil';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
}

export default App;
