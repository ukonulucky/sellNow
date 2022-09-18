
import React, { useState , useEffect} from 'react'
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity, Pressable, Alert} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'



function Home({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userObj, setUserObj] = useState({
    email: "",
    password:""
  })
// deleting user
  const deleteUser = async() => {
   try {
     await AsyncStorage.removeItem("userInfo")
     navigation.replace("Login")
     Alert.alert("user Status", "User deleted Successfully")
    
   } catch (error) {
    console.warn(error)
   }
 }

  // geting and storing input from user
  const handleChange = async () => {
    if (email && password) {
     setUserObj({
      ...userObj, email, password
    })
     try {
      await AsyncStorage.setItem("userInfo",JSON.stringify(userObj))
     } catch (error) {
       console.warn(error)
     }
    } else {
      
      Alert.alert("Warning", "Email  and Password Field Can not be empty")
    }
  }
 

  const getUser = async() => {
    try {
      result = await AsyncStorage.getItem("userInfo")
      console.log('my result', result)
    if (result) {
      setUserObj({
        ...JSON.parse(result)
      })
    }
    } catch (error) {
      console.warn(error)
    }
  }

 useEffect(() => {
   getUser()
 }, [])


  return (
    <View style={ styles.body}>
      <Text>
        Hello, your email is {userObj?.email || "email not found"} and your password is {userObj?.password || "password not found"}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
         val !== "" ? setEmail(val) : ""
        }}
      />

      <TextInput
        style={styles.input}
        onChangeText={(val) => {
          val !== "" ? setPassword(val) : ""
        }}
      />
          
      <Pressable
        style={styles.submit}
        android_ripple={{
          color: "yellow"
          
        }}
        onPress={() => {
          handleChange()
        }}
      >
        <View>
        <Text style={ styles.submit}> Submit </Text>
        </View>
      </Pressable>
      
      <Pressable
        style={styles.submit}
        android_ripple={{
          color: "yellow"
          
        }}
        onPress={() => {
          deleteUser()
        }}
      >
        <View>
        <Text style={ styles.submit}> delete User </Text>
        </View>
   </Pressable>
   
   </View>
  )
}

export default Home

const styles = StyleSheet.create({
  body:{
  flex: 1,
    justifyContent: "center",
    alignItems: "center",
   backgroundColor:"#f2f2f2"
  },
  input: {
    width: 300,
    borderWidth: 1,
    height: 50,
    color: "#333",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    textAlign:"center"
  },
  submit: {
    backgroundColor: "purple",
    fontSize: 20,
    paddingHorizontal: 5,
    textAlign: "center",
    color: "#FFF",
    marginVertical:20
    
  }
})