import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import  {FlatCards}  from '../components/flatcards';
import HorizantelScroll from '../components/horizantelScroll';
import LogoutButton from '../components/logoutButton';



const WelcomeScreen = ({navigation }) => {
    
  return (

    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <HorizantelScroll/>
      <LogoutButton/>
      
      </ScrollView>
    </SafeAreaView>
    

    
  );
};

 



export default WelcomeScreen;
