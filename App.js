import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screen/Home"
import About from "./screen/About"


// the tap navigator is used to navigate between different screens in the app
const Drawer =createDrawerNavigator()

 export default function App() {
   return (
     <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home"
         screenOptions={{
           headerTitleAlign: "center",
           headerStyle: {
             backgroundColor:"purple"
           },
           headerTintColor: "white",
           headerTitleStyle: {
             fontSize:20
           }
         }}
         
       >
         <Drawer.Screen name="Home" component={Home} />
         <Drawer.Screen name="About" component={About} />
       </Drawer.Navigator>
     </NavigationContainer>
  )
} 