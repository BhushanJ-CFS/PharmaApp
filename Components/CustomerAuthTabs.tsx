import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomerLogin from './CustomerLogin';
import CustomerRegistration from './CustomerRegistration';
import Login from './Login';

const CTab = createMaterialTopTabNavigator();

export default function CustomerAuthTabs() {
  return (
    <CTab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#0F0F0F'},
        tabBarActiveTintColor: 'rgb(66, 206, 222)',
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: '#007BFF',
          height: 3,
          borderRadius: 2,
        },
      }}>
      <CTab.Screen name="Login" component={Login} />
      <CTab.Screen name="Registration" component={CustomerRegistration} />
    </CTab.Navigator>
  );
}
