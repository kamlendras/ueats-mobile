import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView} from "react-native-safe-area-context";
import BottomNavigation from "./BottomNavigation";
import * as SplashScreen from "expo-splash-screen";
import {
  Button,
  ProgressBar,
  Paragraph,
  MD2Colors,
  MD3Colors,
  useTheme,
} from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";
export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (

    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", barStyle: "light-content" }}
    >
      <StatusBar style="light" backgroundColor="black" translucent={true} />
      <Stack.Screen options={{  headerShown: false, }} />
{/* 
      <ProgressBar
        indeterminate
        progress={0.8}
        color={MD3Colors.error50}
        style={{ marginTop: 20, height: 10, width: undefined }}
      /> */}

      <BottomNavigation />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  progress: {
    height: 10,
    width: undefined,
    // borderColor: 'white',
    // borderWidth: 1,
    // borderStyle: 'solid' ,
  },
});




// import { useState} from 'react';
// import { View,Text,ScrollView,SafeAreaView} from 'react-native';
// import {Stack,useRouter} from 'expo-router';
// import {COLORS,icons,images,SIZES} from '../constants';
// import {
//     Nearbyjobs,
//     Popularjobs,
//     ScreenHeaderBtn,
//     Welcome,
//   } from "../components";
// const Home = () => {
//     const router = useRouter();
//     return(
//         <SafeAreaView style={{flex :1,backgroundColor:COLORS.lightWhite}}>
//         <Stack.Screen 
//         options={{
//             headerStyle: { backgroundColor: COLORS.lightWhite },
//             headerShadowVisible: false,
//             headerLeft: () => (
//               <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
//             ),
//             headerRight: () => (
//               <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
//             ),
//             headerTitle: "",
//           }}
//         />
//         </SafeAreaView>
//     )
// }
// export default Home;