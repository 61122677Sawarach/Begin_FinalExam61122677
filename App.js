import React from 'react';
import { Button, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import StaffScreen from './pages/StaffScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#66CCCC',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    StaffView: { screen: StaffScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#66CCCC',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo1.png')
                  : require('./asset/logo1.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 60 / 2,
              }}
            />
          );
        } else if (routeName === 'Settings') {
          return (
            <Image
              source={
                focused
                  ? require('./asset/logo4.png')
                  : require('./asset/logo4.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 60 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#000000',
    },
  }
);
export default createAppContainer(App);