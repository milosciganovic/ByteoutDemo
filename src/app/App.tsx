import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNav } from './RootStackNav';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </>
  );
};

export default App;
