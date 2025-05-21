import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../Style_comp/login_styles';
import { ScrollView } from 'react-native-gesture-handler';
import BottomtabN from './BottomtabN';
export default function Login({navigation}: any) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  // const handlesignin = () => {
  //   {
  //     if (username && password) {
  //       Alert.alert('Signed in successfully');
  //     } else {
  //       Alert.alert('Please fill in both fields');
  //     }
  //   }
  // };
  return (
    <SafeAreaView style={styles.full}>
      <ScrollView style={styles.maincontainer}>
        {/* <TouchableOpacity
          style={{margin: 30}}
          onPress={() => navigation.goBack()}>
          <Icons
            name="arrow-left"
            size={30}
            color="#EA4335"
            style={{marginRight: 10}}
          />
        </TouchableOpacity> */}
        <Text style={styles.logintext}> Welcome Back !</Text>
        <Text style={styles.ssubtext}>Please sign in to your account </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          style={styles.usernamecontainer}
          onChangeText={setusername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#FFFFFF"
          style={styles.passnamecontainer}
          onChangeText={setpassword}
        />
        <Text style={styles.forgot}>Forgot password</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomtabN', {username: username})}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gbutton}>
          <Icons
            name="google"
            size={24}
            color="#EA4335"
            style={{marginRight: 10}}
          />
          <Text
            onPress={() => {
              Alert.alert('Sign In successfully');
            }}
            style={styles.gbuttonText}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.subtext,styles.side]}>Don't Hava An Account ? </Text>
            <Text style={{color: '#03045e', marginTop: 18}}>
              Click On Registration
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
