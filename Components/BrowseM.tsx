import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Style_comp/BrowseM_style';

const BrowseM = ({navigation}: any) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (item: Product) => {
    setCartItems((prev: any) => [...prev, item]);
  };

  type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: any;
    dosage: string;
    type: string;
    manufacturer: string;
    expiryDate: string;
    requiresPrescription: boolean;
  };

  const ArrayM: Product[] = [
    {
      id: '101',
      name: 'Paracetamol',
      price: 25,
      quantity: 1,
      image: require('../Image/paracetemol.jpg'),
      dosage: '500mg',
      type: 'Tablet',
      manufacturer: 'Cipla',
      expiryDate: '2026-03-01',
      requiresPrescription: false,
    },
    {
      id: '102',
      name: 'Benadryl',
      price: 85,
      quantity: 1,
      image: require('../Image/benadrly.jpg'),
      dosage: '100mg',
      type: 'Tablet',
      manufacturer: 'Johnson & Johnson',
      expiryDate: '2025-11-30',
      requiresPrescription: false,
    },
    {
      id: '103',
      name: 'Amoxicillin',
      price: 60,
      quantity: 1,
      image: require('../Image/Amoxicillian.jpg'),
      dosage: '250mg',
      type: 'Capsule',
      manufacturer: 'Sun Pharma',
      expiryDate: '2026-01-15',
      requiresPrescription: false,
    },
    {
      id: '104',
      name: 'Volini Spray',
      price: 120,
      quantity: 1,
      image: require('../Image/vollini.jpg'),
      dosage: '60ml Roll in Tube',
      type: 'Spray',
      manufacturer: 'Sun Pharma',
      expiryDate: '2025-09-10',
      requiresPrescription: false,
    },
    {
      id: '105',
      name: 'Otrivin Nasal Drops',
      price: 55,
      quantity: 1,
      image: require('../Image/otrivindrops.jpg'),
      dosage: '10ml Dropper Bottle',
      type: 'Drops',
      manufacturer: 'Novartis',
      expiryDate: '2025-12-05',
      requiresPrescription: false,
    },
  ];

  const renderProduct = ({item}: {item: Product}) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>
        {item.dosage} • {item.type}
      </Text>
      <Text style={styles.price}>₹ {item.price}</Text>
      <Text style={styles.manufacturer}>by {item.manufacturer}</Text>
      <TouchableOpacity style={styles.squareButton} onPress={() => handleAddToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search Medicine .."
          placeholderTextColor={'black'}
          style={styles.searchInput}
        />
        <Icon
          name={'cart-plus'}
          size={30}
          color={'#03045e'}
          style={styles.cartIcon}
          onPress={() => navigation.navigate('Cart', {cartItems})}
        />
      </View>
      <FlatList
        data={ArrayM}
        contentContainerStyle={styles.listWrap}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BrowseM;
