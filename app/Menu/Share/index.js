import React from 'react';
import {Alert, Share, View,} from 'react-native';
import {  StyleSheet, Text,TouchableOpacity} from "react-native";
import Lottie from 'lottie-react-native';
import { Button, List, useTheme } from 'react-native-paper';
const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
      title: 'App link',
    message: 'Download the App Now , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
    url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
       
        <
    
        >

        <Lottie style={styles.cartinit} source={require('../../../assets/share2.json')} autoPlay loop />
        <Text  style={styles.text}>Get Free Delivery for your  {'\n'} Next order.</Text> 
             <View   style={styles.button}>
                  <Button
         mode="contained-tonal"
        //  onPress={() => {}}
         title="Share"
         onPress={onShare}
       >
       
Share Now
       </Button>
       </View>
        </>
      
    );
}
export default ShareExample;
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
      fontSize: 25 ,
    
      position: "absolute",
      width: "100%",
      bottom: 60,
      // borderColor: 'white',
      // borderWidth: 1,
      // borderStyle: 'solid' ,
    },
    cartinit: {
 
        alignItems:'center',
        position: "absolute",
        width: "100%",
        bottom: 40,
    //  marginLeft:10,
        
        // borderColor: 'white',
        // borderWidth: 1,
        // borderStyle: 'solid' ,
      },
});