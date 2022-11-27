import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
          marginLeft: 0,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
     
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
        name="Apa"
        component={MessagesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="water-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Salubrizare"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="trash-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Achitare Servicii"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
