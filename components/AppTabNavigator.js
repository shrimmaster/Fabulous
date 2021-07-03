import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import AchievmentsScreen from '../Screens/AchievmentsScreen';
import TimerScreen from '../Screens/TimerScreen';

export const AppTabNavigator = createBottomTabNavigator({
  Timer : {
    screen: TimerScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/timer.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Study Timer",
    }
  },
  Achievments: {
    screen: AchievmentsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/achievments.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Achievments and goals",
    }
  }
});
