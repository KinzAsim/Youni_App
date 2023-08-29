import React from 'react';
import MainTabs from './tabs/mainTabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Routes = () => {
  return (
    <SafeAreaProvider>
      <MainTabs />
    </SafeAreaProvider>
  );
};

export default Routes;
