import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, View, Text, StatusBar,  FlatList, TouchableOpacity} from "react-native"

import {globalStyles} from "../styles/Global"
function Home() {

const navigation = useNavigation()
  const [info, setInfo] = useState([{ title: "cooking", body: "lorem 5", key: 1 }
    , { title: "Running", body: "lorem 6", key: 2 }, {
      title: "coding", body: "lorem 7", key: 3
    }, {title: "jumping", body: "lorem 9", key: 4 }])

  return (
      <View >
      <FlatList
        data={info}
        renderItem={({item}) => {
        return  (
          <TouchableOpacity style={
            {
              marginTop: StatusBar.currentHeight
            }
            } onPress={() => navigation.navigate("Review", item)}>
            <Text>{item.title}</Text> 
        </TouchableOpacity>
        )
        }}
      />
   </View>
  )
}

export default Home

