import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WaterNavigation from './WaterNavigation';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        sceneContainerStyle: {backgroundColor: '#fff'},
        headerStyle: {backgroundColor: '#fff'},
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginRight: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
      
      >

      <Drawer.Screen
        name="Home"
        component={TabNavigator}

        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Setări"
        component={WaterNavigation}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}

      />
      
     
      <Drawer.Screen
        name="Despre"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Limba"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="language-outline" size={22} color={color} />
          ),
        }}
      />

      
    </Drawer.Navigator>
  );
};

export default AppStack;
