import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import WelcomeScreen from './Screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  //WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},
  BottomTab:{screen:AppTabNavigator}

})
const AppContainer = createAppContainer(switchNavigator)