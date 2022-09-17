
import React from 'react'

import About from "../screen/About";

import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

const StackNavigation2 = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Group >
          <Stack.Screen name="About" component={About} />
        </Stack.Group>
 </Stack.Navigator>
  )
}

export default StackNavigation2