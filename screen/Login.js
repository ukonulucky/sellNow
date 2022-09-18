
import React, { useState , useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable, Alert } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({
        email: "",
        password:""
    })
   
    const saveUser = async () => {
        try {
            await AsyncStorage.setItem("userInfo", JSON.stringify({
                email , password
            }))
        } catch (error) {
            console.warn(error)
        }
    }
  
    return (

      <ImageBackground style={ styles.body}
          source={{
              uri: "https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?w=2000"
          }}
          resizeMode="cover"
      >
          <View style={ styles.container}>
              <TextInput 
                  style={ styles.input}
                  placeholder='enter email'
                  
                  keyboardType='default'
                  onChangeText={(val) => {
                    val !== "" ? setEmail(val) : ""
                  }}
              />
                  
              <TextInput 
                  style={ styles.input}
                  placeholder='enter password'
                  keyboardType='visible-password'
                  
                  onChangeText={(val) => {
                     val !== "" ? setPassword(val) : ""
                  }}
              />
              <Pressable 
                  style={styles.button}
                  android_ripple={{ color: "blue" }}
                    onPress={({ pressed }) => {
                       
                      if (!password  || !email) {
                          Alert.alert("Input Error", "Email and Password can not be empty")
                       return 
                      }
                     
                      console.log("this is the user",email,password)
                        if (email && password) {  
                            setUser({
                                email, password
                           })
                            console.log("this is the user44",user)
                          saveUser()
                          Alert.alert("user status", "user registration successful")
                            console.log("this is the user from the login", user)
                            setEmail("")
                           setPassword("")
                          navigation.navigate("Home")
                      }
                      
              }}
              >
                  <Text style={{
                        color: "white"
                      
                  }} >
                     Click To Login
                  </Text>
              </Pressable>
    </View>
            </ImageBackground>
        
  )
}
export default Login

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
       
    },
    container: {
        height: "40%",
        justifyContent:"space-between"  
    },
    input: {
        borderWidth: 1,
        borderStyle:"solid",
        borderColor: "#333",
        borderRadius: 10,
        textAlign: "center",
        padding: 20,
        marginVertical: 10
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical:20,
        borderRadius:20,
        backgroundColor: "purple",
        fontSize: 20,
    }
})