import { Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MaintabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        labelStyle: {
          fontWeight: "bold"
        },
        showIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color: string }) => <Fontisto name="camera" color={Colors[colorScheme].background} size={18} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoNavigator}
      />
    </MainTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: '' }}
      />
    </TabTwoStack.Navigator>
  );
}
