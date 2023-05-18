import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// Screens
import Home from "./Home/Page";
import Browse from "./Browse/Page";
import Baskets from "./Baskets/Page";
import Account from "./Account/Page";
import QR from "./QR/Page";
// import Homeicon from '../assets/Home.svg';
// import HomeOutline from '../assets/HomeOuline.svg';

// const createScreenOptions = {
//   activeTintColor: '#000000',
//   inactiveTintColor: '#616161',
//   backgroundColor: '#000000',
// }
const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <NavigationContainer>

      <Tab.Navigator
   
        initialRouteName="Home"
        shifting="false"
        screenOptions={{
          tabBarActiveTintColor: '#000000',
        }}
      >
        <Tab.Screen
          name="Home"
          useHeaderHeight={false}
          tabBarActiveTintColor='tomato'
          tabBarInactiveTintColor='gray'
          options={{
            tabBarLabel: "Home ",
            headerShown: false,
            tabBarIcon: ({ color,focused}) => (
              <MaterialIcons color={color}  name="home-filled" size={26}  />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          useHeaderHeight={false}
          name="Search"
          options={{
            tabBarLabel: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome 
                name={"search"}
                size={26}
                color={color}
              />
            ),
          }}
          component={Browse}
        />

        <Tab.Screen
          useHeaderHeight={false}
          name="Cart"
          options={{
            tabBarLabel: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={"cart-sharp"} size={26} color={color} />
            ),
          }}
          component={Baskets}
        />
         <Tab.Screen
          useHeaderHeight={false}
          name="QR"
          options={{
            tabBarLabel: "QR",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={"qr-code"}
                size={26}
                color={color}
              />
            ),
          }}
          component={QR}
        />
        <Tab.Screen
          useHeaderHeight={false}
          name="Menu"
          options={{
            tabBarLabel: "Menu",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Entypo
                name={"menu"}
                size={26}
                color={color}
              />
            ),
          }}
          component={Account}
        />
         
      </Tab.Navigator>
    
    </NavigationContainer>
  
  );
}
export default BottomNavigation;
