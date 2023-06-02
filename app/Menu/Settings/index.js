import * as React from 'react';
import { View } from 'react-native';
import { Menu } from 'react-native-paper';
import { List } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Settings from "../../../assets/icons/settings.svg";
const MyComponent = ({navigation }) => (
  <View style={styles.menu}>

    <List.Item  onPress={() => {}} title="Change Account"
     left={() => (
        <List.Icon
          icon='account-convert-outline'
        />
      )} />
    <List.Item    left={() => ( <List.Icon icon="form-textbox-password" />)} onPress={() => {}} title="Change Password" />
    <List.Item    left={() => ( <List.Icon icon="logout" />)}
    //  onPress={() => {}} 
    onPress={() => navigation.navigate("SignIn")}
     title="Logout" />
    <List.Item    left={() => ( <List.Icon icon="earth-arrow-right" />)} onPress={() => {}} title="Change Language"  />
    <List.Item    left={() => ( <List.Icon icon="brush-variant" /> )} 
    onPress={() => {}}
     title="Change Theme"   />
  </View>
);

export default MyComponent;
const styles = StyleSheet.create({
    menu: {
 padding:16,
        

     
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