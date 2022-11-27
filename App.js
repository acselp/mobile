
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      {/* <AppStack />   */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
