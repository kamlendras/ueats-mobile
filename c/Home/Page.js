import * as React from 'react';
import { View, Text } from 'react-native';
import Search from '../Search/Search'
import Card from './Card'
export default function Library({ navigation }) {
    return (
        <>
            <Text>hello</Text>
            <Search/>
            <Card/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home</Text>
        </View>
        </>
    );
}