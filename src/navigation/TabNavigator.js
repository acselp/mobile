import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/SericesScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#AD40AF'
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Roboto-Medium',
        },
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}
      >

      <Tab.Screen
        name="Acasa"
        component={HomeScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="home-outline" color={color} size={size} />
            </>
          ),
        })}
      />

      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="card-outline" color={color} size={size} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Datorii"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="newspaper-outline" color={color} size={size} />
            </>
          ),
        }}
      />

    <Tab.Screen
        name="Achitari"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
            <MaterialIcons name="receipt-long" color={color} size={size} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
