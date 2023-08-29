import React from 'react';
import {Event} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const EventStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
};

export default EventStack;
