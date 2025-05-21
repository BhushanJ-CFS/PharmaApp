import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../Style_comp/Otherproduct_style';

const Otherproduct = ({route}: any) => {
  type Product = {
    id: string;
    name: string;
    image: any;
  };

  const ArrayM: Product[] = [
    {id: '1', name: 'Skin Care', image: require('../Image/Shopskin.jpg')},
    {id: '2', name: 'Vitamins & Supplements', image: require('../Image/shopvitamin.jpg')},
    {id: '3', name: 'Diabetes Essentials', image: require('../Image/shopdiebetics.jpg')},
    {id: '4', name: 'Mother and BabyCare', image: require('../Image/shopbabycare.jpg')},
    {id: '5', name: 'Personal Care', image: require('../Image/shoppersonal.jpg')},
    {id: '6', name: 'Homeopathy Care', image: require('../Image/shophomo.jpg')},
    {id: '7', name: 'Mother and BabyCare', image: require('../Image/shopbabycare.jpg')},
    {id: '8', name: 'Personal Care', image: require('../Image/shoppersonal.jpg')},
    {id: '9', name: 'Homeopathy Care', image: require('../Image/shophomo.jpg')},
  ];

  const renderproduct = ({item}: {item: Product}) => (
    <TouchableOpacity style={styles.centeredItem}>
      <View style={styles.productcard}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.productText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={ArrayM}
        contentContainerStyle={styles.wrap}
        keyExtractor={item => item.id}
        renderItem={renderproduct}
        numColumns={3}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Shop By Categories</Text>
          </View>
        }
      />
    </View>
  );
};

export default Otherproduct;
