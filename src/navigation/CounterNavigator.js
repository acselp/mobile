import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddCounterScreen from "../screens/AddCounterScreen";
import ListCounterScreen from "../screens/ListCounterScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const CounterNavigator = () => {
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
        name="Scanare"
        component={HomeScreen}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="speedometer-outline" color={color} size={size} />
            </>
          ),
        })}
      />

      <Tab.Screen
        name="Adaugă"
        component={AddCounterScreen}
        options={{
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="add-circle-outline" color={color} size={size} />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Vizualizeară"
        component={ListCounterScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <>
            <Ionicons name="search-outline" color={color} size={size} />
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

export default CounterNavigator;
