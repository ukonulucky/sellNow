import { View, Text } from 'react-native'
import React from 'react'
import Home from "../screen/Home";
import Model from "../screen/Model";
import Review from "../screen/Review";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{ headerShown: false}}>
        <Stack.Group >
      
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }} >
        <Stack.Screen name="Model" component={Model} />
        </Stack.Group>
        </Stack.Navigator>
  )
}

export default StackNavigation