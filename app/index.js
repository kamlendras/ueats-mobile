import React, { useState, useRef } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "./BottomNavigation";
import { ImageBackground } from "react-native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const image = {
  uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80",
};
const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", barStyle: "light-content" }}
    >
      <StatusBar style="light" backgroundColor="black" translucent={true} />
      <AuthContext.Provider value={authContext}>
        <NavigationContainer
          independent={true}
          options={{ headerShown: false }}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen
                name="Splash"
                component={SplashScreen2}
                options={{
                  headerShown: false,
                }}
              />
            ) : state.userToken == null ? (
              // No token found, user isn't signed in
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  headerShown: false,
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
            ) : (
              // User is signed in
              <Stack.Screen
                name="BottomNavigation"
                options={{ headerShown: false }}
                component={BottomNavigation}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaView>
  );
}

function SplashScreen2() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={2}
        source={image}
        resizeMode="cover"
        style={styles.imagebg}
      >
        {showMessage && (
          <View style={styles.message}>
            <Text>Value : {value}</Text>
            <Text>Formatted Value : {formattedValue}</Text>
            <Text>Valid : {valid ? "true" : "false"}</Text>
          </View>
        )}

        <View style={styles.no1}>
          <Text style={styles.no1text}>
            India's No.1 <Text style={{ color: "red" }}>Healthy</Text> and{" "}
            <Text style={{ color: "red" }}>Hygienic</Text> Food Service.
          </Text>
        </View>
        <View style={styles.phoneno}>
          <PhoneInput
            value={username}
            // onChangeText={setUsername}
            forwardref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={
              ((text) => {
                setValue(text);
              },
              setUsername)
            }
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            <Text>Check</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otp}>
          <OTPInputView
            style={{ width: "80%", height: 200 }}
            pinCount={4}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>

        <View style={styles.continue}>
          <Button
            title="CONTINUE"
            color="#06c167"
            onPress={() => signIn({ username, password })}
          />
        </View>
      </ImageBackground>
    </View>
  );
}





const styles = StyleSheet.create({
  progress: {
    height: 10,
    width: undefined,
   
  },

  container: {
    flex: 1,
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },

  continue: {
    padding: 10,
    borderRadius: 100,
    position: "absolute",
    width: "100%",
    bottom: 10,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  no1: {
    padding: 10,
    alignItems: "center",

    position: "absolute",
    bottom: 290,
  },
  no1text: {
    fontSize: 52,

    color: "#06c167",
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  phoneno: {
    padding: 10,
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    width: "100%",
    bottom: 180,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  otp: {
    alignItems: "center",
    Color: "white",
    padding: 30,
    borderRadius: 100,
    position: "absolute",
    width: "100%",
    bottom: 10,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  underlineStyleBase: {
    borderWidth: 5,
    backgroundColor: "white",
    borderBottomWidth: 5,
    borderColor: "#06c167",
  },

  underlineStyleHighLighted: {
    borderColor: "green",
  },
});
