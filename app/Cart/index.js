import * as React from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';
export default function Library({ navigation }) {
    return (
        <>
        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
            {/* <Text
                onPress={() => navigation.navigate('Home')}

                style={{ fontSize: 26, fontWeight: 'bold' }}>Baskets
                </Text> */}
                 <Lottie source={require('../../assets/cart.json')} autoPlay loop />
        {/* </View> */}
        </>
    );
}