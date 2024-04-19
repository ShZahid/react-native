import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {GoToButton} from '../components/gotoButton';


const WelcomeScreen = ({navigation, }) => {
    console.log(navigation)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Button
        title="Logout"
        onPress={() =>
         // <GoToButton screenName="LoginScreen"/>
          navigation.navigate('LoginScreen')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "black"
  },
});

export default WelcomeScreen;
