// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Home_page = ({route}:any) => {
//   const {username} = route.params;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Welcome {username}</Text>
//     </View>
//   );
// };

// export default Home_page;

// const styles = StyleSheet.create({});
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Profile = ({route}: any) => (
  <View>
    <Text>Profile</Text>
  </View>
);

const Order = ({route}: any) => (
  <View>
    <Text>Order</Text>
  </View>
);

const About = () => (
  <View>
    <Text>Settings</Text>
  </View>
);

const Logout = () => (
  <View>
    <Text>Logout</Text>
  </View>
);

const Drawer_page = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#caf0f8',
          width: 240,
        },
        drawerLabelStyle: {fontSize: 15, fontWeight: 'bold'},
        drawerActiveTintColor: '#03045e',
        drawerInactiveTintColor: '#333',
        headerStyle: {
          backgroundColor: '#03045e',
        },
        headerTintColor: 'white',
      }}>
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="Orders" component={Order} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default Drawer_page;
