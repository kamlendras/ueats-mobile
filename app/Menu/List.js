import * as React from "react";
import { List, MD3Colors, Divider } from "react-native-paper";
import { Text, View, StyleSheet, Button } from 'react-native';
import Track from "../../assets/icons/trackorder.svg";
import Favorites from "../../assets/icons/favoriteblue.svg";
import Order from "../../assets/icons/box.svg";
import OrderHistory from "../../assets/icons/orderhistory.svg";
import Coupon from "../../assets/icons/coupon.svg";
import Gift from "../../assets/icons/gift.svg";
import Freed from "../../assets/icons/freed.svg";
import Shareearn from "../../assets/icons/shareearn.svg";
import Call from "../../assets/icons/call.svg";
import Chat from "../../assets/icons/chat2.svg";
import Settings from "../../assets/icons/settings.svg";
import Help from "../../assets/icons/help.svg";
import Email from "../../assets/icons/email.svg";
import { ScrollView} from "react-native";
import { TouchableRipple } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackMain from './Track';
import {Linking,Platform} from "react-native";
// import { HStack, VStack } from 'react-native-flex-layout';
const MyComponent = ({ navigation }) => (
  <>
 
  <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <List.Section>
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          {/* <List.Subheader>Some title</List.Subheader> */}
          <List.Item
         
            title="Track Real-Time Order"
            onPress={() => navigation.navigate("Track")}
            left={() => (
              <List.Icon
                icon={(props) => <Track width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
    
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            onPress={() => navigation.navigate("Favorites")}
            title="Favorites"
            left={() => (
              <List.Icon
                icon={(props) => (
                  <Favorites width={26} height={26} {...props} />
                )}
              />
            )}
          />
        </TouchableRipple>
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Your Orders"
            onPress={() => navigation.navigate("Order")}
            left={() => (
              <List.Icon
                icon={(props) => <Order width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        {/* <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Order History"
            left={() => (
              <List.Icon
                icon={(props) => (
                  <OrderHistory width={26} height={26} {...props} />
                )}
              />
            )}
          />
        </TouchableRipple> */}
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
          onPress={() => navigation.navigate("Coupon")}
            title="Coupon"
            left={() => (
              <List.Icon
                icon={(props) => <Coupon width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
          onPress={() => navigation.navigate("Gifts")}
            title="Gifts"
            left={() => (
              <List.Icon
                icon={(props) => <Gift width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            onPress={() => navigation.navigate("Share and Get Free Delivery")}
            title="Share and Get Free Delivery"
            left={() => (
              <List.Icon
                icon={(props) => <Freed width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
           onPress={() => navigation.navigate("Share and Earn")}
            title="Share and Earn"
            left={() => (
              <List.Icon
                icon={(props) => (
                  <Shareearn width={26} height={26} {...props} />
                )}
              />
            )}
          />
        </TouchableRipple>
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Call Us"
            onPress={()=>{Linking.openURL('tel:+919473611651');} }
            left={() => (
              <List.Icon
                icon={(props) => <Call width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Chat with Us"
            left={() => (
              <List.Icon
                icon={(props) => <Chat width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Email Us"
            onPress={() => Linking.openURL('mailto:STREETSFOODSINDIA@gmail.com') }
    //   title="support@example.com"
            left={() => (
              <List.Icon
                icon={(props) => <Email width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Settings"
            left={() => (
              <List.Icon
                icon={(props) => <Settings width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
        <Divider />
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <List.Item
            title="Help"
            left={() => (
              <List.Icon
                icon={(props) => <Help width={26} height={26} {...props} />}
              />
            )}
          />
        </TouchableRipple>
      </List.Section>
    </View>
  </ScrollView>
  </>
);
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  playingSpace: {
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F5F5F5",
  },
  margin: {
    marginHorizontal: "15",
  },
  text: { textAlign: "center" },
});
export default MyComponent;