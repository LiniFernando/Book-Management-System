import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/Pages/home";
import InsertBook from "./src/Pages/insertBook";
import SignUp from "./src/Pages/singUp";
import Login from "./src/Pages/login";

const AppStack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: true}}>
                <AppStack.Screen options={{headerShown: false}} name="Login" component={Login}/>
                <AppStack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
                <AppStack.Screen options={{headerShown: false}} name="Home" component={Home}/>
                <AppStack.Screen options={{headerShown: false}} name="InsertBook" component={InsertBook}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

