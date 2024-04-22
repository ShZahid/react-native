import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

 const LogoutButton = () => {
  const navigation =useNavigation()

  
    return (


      
         
         <TouchableOpacity style={styles.log}

        onPress={() =>   navigation.navigate('LoginScreen')
        }
        >
          <Text style={styles.textfont}>LogOut</Text>
         
      </TouchableOpacity>

//<GoToButton screenName="LoginScreen"/>
      
      
      
    )
  }
  const styles=StyleSheet.create({
    log:{
      backgroundColor:"black",
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      height:25
      
    },
    textfont:{
      backgroundColor:"blue",
      paddingBottom:10
    }
  })



  export default LogoutButton;