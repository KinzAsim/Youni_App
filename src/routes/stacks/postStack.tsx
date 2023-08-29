import React from 'react';
import {Post} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const PostStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

export default PostStack;
