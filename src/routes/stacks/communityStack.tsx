import React from 'react';
import {Community} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const CommunityStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Community" component={Community} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
