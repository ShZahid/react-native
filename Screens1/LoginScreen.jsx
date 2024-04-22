import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';




//const {navigate} = this.props.navigation
const LoginScreen = ({navigation}) => {
  

  
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log("i oressed")
   
    
    // Hardcoded username and password
    const storedUsername = '';
    const storedPassword = '';

    if (username === storedUsername && password === storedPassword) {
      //<GoToButton screenName="WelcomeScreen"/>
      navigation.navigate('WelcomeScreen'); 
     
      // Correctly navigate
     
 
    } else {
      setError('Invalid username or password');
    }
  };
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {

    fontSize: 24,
    marginBottom: 20,
    color: "white"
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color:"grey"
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});


export default LoginScreen;
