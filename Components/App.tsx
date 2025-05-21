import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Login from './Login';
import Welcome_page from './Welcome_page';
import CustomerAuthTabs from './CustomerAuthTabs';
import Screening from './Screening';
import BottomTabN from './BottomtabN';
import BottomtabN from './BottomtabN';
import Cart from './Cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome_page}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomerAuthTabs"
            component={CustomerAuthTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="BottomtabN"
            component={BottomtabN}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
