import React, { useState , useCallback} from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home"
import About from "./screen/About"


const Stack = createNativeStackNavigator()
 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="About">
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="About" component={About} />
       </Stack.Navigator>
      

     </NavigationContainer>
  )
} 