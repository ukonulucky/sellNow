import { View, Text, Modal, TouchableHighlight, StyleSheet, StatusBar } from 'react-native'
import React, { useState} from 'react'

export default function Model() {
const [show, setShow] = useState(false)

  return (
      <View style={ styles.container}>
          <Modal animationType={"slide"}
              transparent={false}
              visible = {show}
              onRequestClose={() => {
                  console.log("Modal has been closed.")
              }}>
              <View style={ styles.model}>
                  <Text>Model is open</Text>
              </View>
              <TouchableHighlight onPress={() => {
                  setShow(false)
              }}>
                  <Text>
                     Hide Model
                  </Text>
              </TouchableHighlight> 
             
          </Modal>
          <View>
           
          <TouchableHighlight onPress={() => {
                  setShow(true)
              }}>
                  <Text>
                     Show Model
                  </Text>
              </TouchableHighlight>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:StatusBar.currentHeight
    },
    model: {
        backgroundColor: "purple",
        padding: 5,
        flex:1
    }
})