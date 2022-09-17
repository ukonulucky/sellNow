import React from 'react'
import { StyleSheet, View, Text, StatusBar } from "react-native"
function Review({ route, navigation }) {
    const { title, body } = route.params
  return (
      <View style={ styles.review}>
          <Text>
              {title}
          </Text>
          <Text>
          {body}
          </Text>
   </View>
  )
}

export default Review


const styles = StyleSheet.create({
    review: {
        marginTop:StatusBar.currentHeight
    }
})