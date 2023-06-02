import * as React from 'react';
import { View, StyleSheet, Text,TouchableOpacity, } from "react-native";
import Lottie from 'lottie-react-native';
import { Button, List, useTheme } from 'react-native-paper';
export default function Library() {
    return (
       
        <
    
        >

        <Lottie style={styles.cartinit} source={require('../../../assets/favorites.json')} autoPlay loop />
        <Text  style={styles.text}>Your Favorites will appear here.</Text> 
             <View   style={styles.button}>
         <Button
         mode="contained-tonal"
         onPress={() => {}}
       
       >
       
Browse
       </Button>
       </View>
        </>
      
    );
}
const styles = StyleSheet.create({
    button: {
 
      alignItems:'center',

      position: "absolute",
      width: "100%",
      bottom: 10,
      // borderColor: 'white',
      // borderWidth: 1,
      // borderStyle: 'solid' ,
    },
    text: {
 
      alignItems:'center',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 15 ,
 
      position: "absolute",
      width: "100%",
      bottom: 60,
      // borderColor: 'white',
      // borderWidth: 1,
      // borderStyle: 'solid' ,
    },
    cartinit: {
 
        alignItems:'center',
    //  marginLeft:10,
        
        // borderColor: 'white',
        // borderWidth: 1,
        // borderStyle: 'solid' ,
      },
});