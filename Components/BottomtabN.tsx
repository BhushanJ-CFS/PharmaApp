import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screening from './Screening';
import BrowseM from './BrowseM';
import {Text, TextInput, View} from 'react-native';
import Drawer_page from './Drawer_page';
import Otherproduct from './Otherproduct';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import styles from '../Style_comp/BottomtabN _style';

const BottomTab = createBottomTabNavigator();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) => {
  if (routeName === 'Home') {
    const iconName = focused ? 'home' : 'home-outline';
    return <Icon name={iconName} size={size} color={color} />;
  } else if (routeName === 'Medicines') {
    return <Icon2 name="medicinebox" size={size} color={color} />;
  } else if (routeName === 'Healthcare') {
    const iconName = focused
      ? 'bottle-tonic-plus'
      : 'bottle-tonic-plus-outline';
    return <Icon3 name={iconName} size={size} color={color} />;
  } else if (routeName === 'Account') {
    const iconName = focused ? 'account' : 'account-outline';
    return <Icon3 name={iconName} size={size} color={color} />;
  }
};

const Healthcare = () => (
  <View style={{flex: 1}}>
    <TextInput
      placeholder="Search Medicine .."
      placeholderTextColor={'black'}
      style={styles.healthSearchInput}
    />
    <Otherproduct />
  </View>
);

const Account = () => <Drawer_page />;

const BottomtabN = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#0077b6',
        tabBarInactiveTintColor: '#03045e',
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.header,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
      })}>
      <BottomTab.Screen
        name="Home"
        component={Screening}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Medicines"
        component={BrowseM}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Healthcare"
        component={Healthcare}
        options={{headerShown: false}}
      />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
};

export default BottomtabN;
