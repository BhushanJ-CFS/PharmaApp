import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from '../Style_comp/CustomerRegistration_style';

export default function CustomerRegistration({navigation}: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    Alert.alert('Registration successful! Please login.');
    navigation.navigate('BottomtabN');
  };

  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.maincontainer}>
        <Text style={styles.logintext}>Create Your Account</Text>
        <Text style={styles.ssubtext}>Please fill the form to register</Text>

        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#FFFFFF"
          style={styles.usernamecontainer}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          style={styles.usernamecontainer}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#FFFFFF"
          style={styles.passnamecontainer}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Icon
          name="truck-medical"
          size={100}
          color="#03045e"
          style={styles.icon}
        />
        <Text style={styles.stext}>
          One step closer to better health — register now
        </Text>
      </View>
    </SafeAreaView>
  );
}
