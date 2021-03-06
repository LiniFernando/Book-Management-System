import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/Pages/home";
import InsertBook from "./src/Pages/insertBook";
import SignUp from "./src/Pages/singUp";
import Login from "./src/Pages/login";

const AppStack = createStackNavigator();
export default function App() {
  /*return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );*/

  return (
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: true}}>
          <AppStack.Screen options={{headerShown: false}} name="Login" component={Login}/>
          <AppStack.Screen name="SignUp" component={SignUp}/>
          <AppStack.Screen name="Home" component={Home}/>
          <AppStack.Screen name="InsertBook" component={InsertBook}/>
        </AppStack.Navigator>
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
