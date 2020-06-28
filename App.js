import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GomiHomeScreen from './src/screens/GomiHomeScreen';
import GomiUsageScreen from './src/screens/GomiUsageScreen';
import GomiSettingScreen from './src/screens/GomiSettingScreen';
import SoundSettingScreen from './src/screens/SoundSettingScreen';
import ReminderSettingScreen from './src/screens/ReminderSettingScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ホーム" component={GomiHomeScreen} />
        <Tab.Screen name="使い方" component={GomiUsageScreen} />
        <Tab.Screen name="設定" component={GomiSettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
