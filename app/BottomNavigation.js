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
import Home from "./Home";
import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";
import Scan from "./Scan";

const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <NavigationContainer independent={true}   headerMode='none'>

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
          component={Search}
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
          component={Cart}
        />
         <Tab.Screen
          useHeaderHeight={false}
          name="Scan"
          options={{
            tabBarLabel: "Scan",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={"qr-code"}
                size={26}
                color={color}
              />
            ),
          }}
          component={Scan}
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
