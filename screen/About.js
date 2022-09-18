import { useNavigation, } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text, StatusBar , Button} from "react-native"
function About() {
    const navigation = useNavigation()
  return (
      <View style={ styles.about}>
          <Text style={{
              fontFamily:"quickSand"
          }}>
              this is the About page
          </Text>
          <Button title="Go Home" onPress={() => {
              navigation.navigate("Home")
          }} />

<Button title="Go TO Mpdel" onPress={() => {
              navigation.navigate("Model")
          }} />
   </View>
  )
}

export default About


const styles = StyleSheet.create({
    about: {
        marginTop:StatusBar.currentHeight
    }
})