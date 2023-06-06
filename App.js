
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

function App() {

  const MyTheme = {
    colors: {
      background: 'white'
    },
  };

  return (
    <NativeBaseProvider>
    <AuthProvider>
      <AppNav />
    </AuthProvider>
    </NativeBaseProvider>
  );
}

export default App;
