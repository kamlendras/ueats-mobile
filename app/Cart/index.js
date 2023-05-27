import * as React from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';
export default function Library() {
    return (
       
        <View 
    
        >
              <Lottie source={require('../../assets/cart.json')} autoPlay loop />
         
        </View>
      
    );
}