import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import WelcomeScreen from './Screens/WelcomeScreen';





//// login screen
// const LoginScreen = ({navigation }) => {
  
  
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
   
    
//     // Hardcoded username and password
//     const storedUsername = 'zahid';
//     const storedPassword = 'bilal121';

//     if (username === storedUsername && password === storedPassword) {
//       navigation.navigate('Welcome');
     
//       // Correctly navigate
     
 
//     } else {
//       setError('Invalid username or password');
//     }
//   };
 

//   return (
//     <View style={styles1.container}>
//       <Text style={styles1.title}>Login</Text>
//       {error ? <Text style={styles1.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         onChangeText={text => setUsername(text)}
//         value={username}
//       />
//       <TextInput
//         style={styles1.input}
//         placeholder="Password"
//         onChangeText={text => setPassword(text)}
//         secureTextEntry={true}
//         value={password}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });








// //// welcome screen 

// const WelcomeScreen = ({navigation}) => {
//   console.log(navigation)
// return (
//   <View style={styles.container}>
//     <Text style={styles.title}>Welcome!</Text>
//     <Button
//       title="Logout"
//       onPress={() => navigation?.navigate('Login')}
//     />
//   </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// title: {
//   fontSize: 24,
//   marginBottom: 20,
// },
// });

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;