import * as React from 'react';
import { Platform } from 'react-native';
import {  Text } from 'react-native';
import Search from '../mag/Search'
import Card from './Card'
import { Stack } from "expo-router";
import AppBar from '../AppBar'
import { Chip } from 'react-native-paper';
import { View, StyleSheet, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ScrollView} from "react-native";
export default function Home() {
    return (
      <>
      <AppBar/>
         {/* <ScrollView vertical={true} showsVerticalScrollIndicator={true}> */}
        <Chip mode='outlined' icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
        <Chip
              icon="heart"
              onPress={() => {}}
              onClose={() => {}}
              style={styles.chip}
            >
              Icon
            </Chip>
            <Search/>
            <Card/>
            {/* </ScrollView> */}
            </>
    );
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 12,
    },
    chip: {
      margin: 4,
    },
    tiny: {
      marginVertical: 2,
      marginRight: 2,
      marginLeft: 2,
      minHeight: 19,
      lineHeight: 19,
    },
    bigTextFlex: {
      flex: 1,
    },
    bigTextStyle: {
      flex: -1,
    },
    fullWidthChip: {
      marginVertical: 4,
      marginHorizontal: 12,
    },
    customBorderRadius: {
      borderRadius: 16,
    },
  });