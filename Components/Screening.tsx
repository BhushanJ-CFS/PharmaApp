import {
  Pressable,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Octicons';
import M from 'react-native-vector-icons/FontAwesome5';
import T from 'react-native-vector-icons/Fontisto';
import W from 'react-native-vector-icons/FontAwesome';
import C from 'react-native-vector-icons/Ionicons';
import L from 'react-native-vector-icons/SimpleLineIcons';
import Otherproduct from './Otherproduct';
import {styles} from '../Style_comp/Screening_style';

const Screening = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>CFPharma</Text>
          <L
            name="logout"
            size={30}
            color="white"
            style={{marginTop: 30}}
            onPress={() => navigation.navigate('CustomerAuthTabs')}
          />
        </View>

        <View style={styles.locationRow}>
          <Icons name="location" size={15} color="white" />
          <Text style={styles.locationText}>Pune</Text>
        </View>

        <View style={styles.imageOptionRow}>
          <Image
            source={require('../Image/car.png')}
            style={styles.doctorImage}
            resizeMode="contain"
          />
          <View style={styles.optionColumn}>
            <Pressable
              style={styles.optionBox}
              onPress={() => navigation.navigate('Medicines')}>
              <Text style={styles.optionText}>Medicine</Text>
              <M name={'pills'} size={25} />
            </Pressable>
            <View style={styles.optionBox}>
              <Text style={styles.optionText}>Lab Tests</Text>
              <T name={'blood-test'} size={25} />
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              marginTop: 5,
              fontWeight: '600',
              padding: 8,
            }}>
            Or You can Order via
          </Text>
        </View>
        <Pressable style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.via}>
            <W name={'whatsapp'} size={15} color={'white'} />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {'  '}
              Whatsapp
            </Text>
          </View>
          <View style={styles.via}>
            <M name="notes-medical" size={15} color={'white'} />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {'  '}
              Prescription
            </Text>
          </View>
          <View style={styles.via}>
            <C name="call" size={15} color={'white'} />
            <Text style={{color: 'white', fontWeight: 'bold'}}>{'  '}Call</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView style={styles.scrollSection}>
        <Otherproduct />
      </ScrollView>
    </View>
  );
};

export default Screening;
