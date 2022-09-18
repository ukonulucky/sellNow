import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import About from "./screen/About";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";
import { set } from "react-native-reanimated";
import Login from "./screen/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";


// the tap navigator is used to navigate between different screens in the app
const Stack = createNativeStackNavigator();

Splash.preventAutoHideAsync();

export default function App() {
  const [font, setFont] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
 
  
  let [fontLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Black.ttf"),
    quickSand: require("./assets/fonts/Quicksand-Regular.ttf"),
  });


  const getUser = async () => {
    
    try {
      const result = await AsyncStorage.getItem("userInfo")
        console.log("this is the result from the app", result)
        if (result.email && result.password) {
            setUserLogin(true)
         } 
      return
    } catch (error) {
       console.warn(error)
    }
    }
    
    useEffect(() => {    
   getUser()
   }, [])
    

  useEffect(() => {
    const fetchFont = async () => {
      if (fontLoaded) {
        setFont(true);
        await Splash.hideAsync();
      }
    };
    fetchFont();
  }, []);

  if (!font) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        //  initialRouteName={ userLogin ? "Home" : "Login"}
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Login" component={Login} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
