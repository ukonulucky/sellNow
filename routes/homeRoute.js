import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screen/Home"
import  Review  from "../screen/Review"
const screens  = {
    Home: {
        screen: Home
    },
    reviewDetailes: {
        screen: Review
    }

}
const HomeStack = createStackNavigator(screens)
Navigation = createAppContainer(HomeStack)
 
export default Navigation