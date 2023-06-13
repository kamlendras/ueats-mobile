import * as React from 'react';
import { useState } from "react";
import { Appbar } from 'react-native-paper';
import {View, } from 'react-native';
import {  Dialog,  } from 'react-native-paper';
import { List } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { useRouter } from 'expo-router';
import {

  DialogWithRadioBtns} from './Dialogs';
  import { NavigationContainer } from '@react-navigation/native';
  import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
  import { Avatar ,Card, IconButton} from 'react-native-paper';
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  const Stack = createNativeStackNavigator();
type ButtonVisibility = {
  [key: string]: boolean | undefined;
};
const MyComponent = () => {
  // const router = useRouter();
 
    const [visible, setVisible] = React.useState<ButtonVisibility>({});
  // const { isV3 } = useTheme();

  const _toggleDialog = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });

  const _getVisible = (name: string) => !!visible[name];
  

  // 2
  const [visible1, setVisible1] = React.useState(false);

  const showModal1 = () => setVisible1(true);
  const hideModal1 = () => setVisible1(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin:10, height:'50%', borderRadius:30,};
// 3
const [visible2, setVisible2] = React.useState(false);

const showModal2 = () => setVisible2(true);
const hideModal2 = () => setVisible2(false);
const containerStyle2 = {backgroundColor: 'white', padding: 20, margin:10, height:'50%', borderRadius:30,};
    return (
      <View>
         <Portal>
        <Modal visible={visible1} onDismiss={hideModal1} contentContainerStyle={containerStyle}>
          {/* <Text>Example Modal.  Click outside this area to dismiss.</Text> */}
        
          <Card.Title
    title="K SINGH"
    subtitle="+91 9473611651"
    left={(props) => <Avatar.Text  {...props}  label="KS" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
  <List.Item    left={() => ( <List.Icon icon="account-settings-outline" />)} 
  // onPress={() => {}} 
  // onPress={() => navigation.navigate("Settings")}
  title="Settings" />
  <List.Item    left={() => ( <List.Icon icon="help-circle-outline" />)} onPress={() => {}} title="Help" />
        </Modal>
        {/* 2 */}
        <Modal visible={visible2} onDismiss={hideModal2} contentContainerStyle={containerStyle}>
          {/* <Text>Example Modal.  Click outside this area to dismiss.</Text> */}
        
          <Card.Title
    title="Home"
    subtitle="mahaveer nagar 3rd, parijat colony, KOTA, RAJASTHAN, 324005, India"
    left={(props) => <Avatar.Icon icon="map-marker-check-outline"   {...props}  />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
  <List.Item    left={() => ( <List.Icon icon="map-marker-plus-outline" />)} 
  // onPress={() => {}} 
  // onPress={() => navigation.navigate("Settings")}
  title="add work address" />
  <List.Item    left={() => ( <List.Icon icon="map-marker-plus-outline" />)} onPress={() => {}} title="add another address" />
        </Modal>
      </Portal>
    <Appbar.Header mode='small'elevation={5}  statusBarHeight={0}>
       <Appbar.Action icon="map-marker-outline" 
      //  onPress={() => {}} 
      onPress={showModal2}
       />
       <Appbar.Content title="Home" icon="earth" />
        <Appbar.Action icon="earth"
        //  onPress={() => {}} 
        onPress={_toggleDialog('dialog2')}
        
        />
        <Appbar.Action icon='account-circle-outline' 
        // onPress={() => {}} 
        onPress={showModal1}
        />
    </Appbar.Header>
    <DialogWithRadioBtns
        visible={_getVisible('dialog2')}
        close={_toggleDialog('dialog2')}
      />
  </View>
);12
}




export default MyComponent;