import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {styles} from '../Style_comp/Welcome_style';
const Welcome_page = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CFPharma</Text>

      <Icon
        name="house-medical"
        size={100}
        color="#03045e"
        style={styles.icon}
      />

      <Text style={styles.tagline}>Your Health, Our Priority</Text>

      <Text style={styles.description}>
        Get medicines, wellness products, and expert advice — all in one place,
        anytime.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CustomerAuthTabs')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome_page;
