// import "expo-router/entry";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './c/BottomNavigation';
import * as SplashScreen from 'expo-splash-screen'
import { ProgressBar, MD3Colors } from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native' ;

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);
  return (
    <SafeAreaProvider  
    style={{ flex: 1, backgroundColor: "white", barStyle: "light-content"}}
    >
<StatusBar
 style="light" backgroundColor="black" translucent = {true}/>

     <ProgressBar progress={0.8} color={MD3Colors.error50}    style={{marginTop: 20 , height :10,width: undefined}} />
    
    <BottomNavigation/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  progress: {
    height: 10,
    width:undefined
    // borderColor: 'white',
    // borderWidth: 1,
    // borderStyle: 'solid' ,
  }
}) ;
