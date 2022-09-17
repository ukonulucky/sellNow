import React from 'react'
import { createDrawerNavigator } from "react-navigation-drawer"
import StackNavigation from './StackNavigation'
import StackNavigation2 from './StackNavigation2'


const DrawNavigation = createDrawerNavigator({
    Home: {
        screen: StackNavigation
    },
    About: {
        screen: StackNavigation2
    }
})
export default DrawNavigation