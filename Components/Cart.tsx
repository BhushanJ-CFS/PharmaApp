import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cart = ({route}: any) => {
  const {cartItems} = route.params;
  return (
    <ScrollView>
      {cartItems.map((item: any) => (
        <View
          key={item.id}
          style={{padding: 10 ,backgroundColor:"white", margin: 5}}>
          <Text style={{fontSize:20}}>
            {item.name} - ₹{item.price}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
