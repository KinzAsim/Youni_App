import React from 'react';
import {Location} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const LocationStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

export default LocationStack;
