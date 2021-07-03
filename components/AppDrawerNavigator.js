import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import TimerScreen from '../Screens/TimerScreen';
import AchievmentsScreen  from '../Screens/AchievmentsScreen';
import NotificationScreen from '../Screens/NotificationsScreen';
import SettingScreen from '../Screens/SettingScreen'
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';



export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  Notification : {
    screen : NotificationScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
