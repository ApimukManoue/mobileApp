import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Splash from './screens/Splash';
import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   	 <NavigationContainer>
    	  <Stack.Navigator initialRouteName="Splash" >
       		   <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
       		   <Stack.Screen name="Home" component={Home} />
       		   <Stack.Screen name="About" component={About} />
       		   <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
     	    </Stack.Navigator>
   	 </NavigationContainer>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
