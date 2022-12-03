import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
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
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>

      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="home-outline" color={color} size={size} />
            <Text style={{color: "white"}}>Acasa</Text>
            </>
          ),
        })}
      />

      <Tab.Screen
        name="Services"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="card-outline" color={color} size={size} />
            <Text style={{color: "white"}}>Servicii</Text>
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
            <Text style={{color: "white"}}>Datorii</Text>
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
            <Text style={{color: "white"}}>Achitari</Text>
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
