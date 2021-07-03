import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TimerScreen from '../Screens/TimerScreen';
import AchievmentsScreen  from '../Screens/AchievmentsScreen';




export const AppStackNavigator = createStackNavigator({
  TimerScreen : {
    screen : TimerScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  AchievmentsScreen : {
    screen : AchievmentsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'TimerScreen'
  }
);
