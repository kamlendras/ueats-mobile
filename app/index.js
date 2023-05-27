import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView} from "react-native-safe-area-context";
import BottomNavigation from "./BottomNavigation";
// import SignIn from "./SignIn";
import * as SplashScreen from "expo-splash-screen";
import {ImageBackground} from 'react-native';
import { View, StyleSheet, Text } from "react-native";
// import { Link, Stack } from "expo-router";
import { Button,  TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const image = {uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80'};
const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();
function SplashScreen2() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.imagebg}>
      <TextInput
        placeholder="Phone No."
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="OTP"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.continue}><Button title="CONTINUE" color="#06c167" onPress={() => signIn({ username, password })} /></View>
      </ImageBackground>
    </View>
  );
}
// { navigation }
export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
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
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
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

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );


  return (

    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", barStyle: "light-content" }}
      >
       <StatusBar style="light" backgroundColor="black" translucent={true} />
       <Stack.Screen options={{  headerShown: false }} /> 
 
{/* 
      <ProgressBar
      indeterminate
      progress={0.8}
      color={MD3Colors.error50}
      style={{ marginTop: 20, height: 10, width: undefined }}
    /> */}

<AuthContext.Provider value={authContext} options={{  headerShown: false, }} >
      <NavigationContainer independent={true} options={{  headerShown: false, }} >
        <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" options={{  headerShown: false, }}  component={SplashScreen2} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="all" options={{  headerShown: false, }} component={BottomNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

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


  container: {
    flex: 1,
  },
  imagebg: {
    flex: 1,
    justifyContent: 'center',

  },

  continue:{
    padding:10,
    borderRadius: 100,
    position: "absolute",
    width: "100%",
    bottom: 10,
    },
});



