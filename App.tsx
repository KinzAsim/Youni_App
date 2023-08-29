import React from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {navigationRef} from '@services';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from '@redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
