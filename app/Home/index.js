import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';
import Search from '../mag/Search'
import Card from './Card'
import { Stack } from "expo-router";


export default function Library() {
    return (
        <>
     
            <Search/>
            <Card/>
        
        </>
    );
}