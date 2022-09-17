import React, { useState , useCallback} from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./screen/Home"
import About from "./screen/About"
import { FontAwesome5 } from "@expo/vector-icons"

// the tap navigator is used to navigate between different screens in the app
const Tap = createBottomTabNavigator()

 export default function App() {
   return (
     <NavigationContainer>
       <Tap.Navigator initialRouteName="About" screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, size, color}) => {
           let iconName
           if (route.name === "About") {
            
             iconName = "twitter"
             color = focused ? "purple" : "crimpson"
             size = focused ? 30 : 20
           } else if (route.name === "Home") {
             
             iconName = "youtube"
             color = focused ? "purple" : "crimpson"
             size = focused ? 30 : 20
           } 
           return <FontAwesome5 name={iconName} size={size} color={ color} />

         }
       })}>
         <Tap.Screen name="Home" component={Home} />
         <Tap.Screen name="About" component={About} />
       </Tap.Navigator>
     </NavigationContainer>
  )
} 