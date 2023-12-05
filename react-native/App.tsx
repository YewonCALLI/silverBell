/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {SplashScreen} from './app/screens/SplashScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#1a8867',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <SplashScreen />
    </SafeAreaView>
  );
}

export default App;
