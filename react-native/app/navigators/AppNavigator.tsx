import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SplashScreen} from 'app/screens/SplashScreen';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
}
