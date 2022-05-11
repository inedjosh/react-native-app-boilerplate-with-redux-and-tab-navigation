import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "../Screens/Auth/Splash";
import Login from "../Screens/Auth/Login";

const Stack = createNativeStackNavigator();


export function AuthStack(props) {
    const [firstLaunch, setFirstLaunch] = useState(null);
  
    useEffect(() => {
      AsyncStorage.getItem("alreadyLaunched").then((value) => {
        if (value === null) {
          AsyncStorage.setItem("alreadyLaunched", "true");
          setFirstLaunch(true);
        } else {
          setFirstLaunch(false);
        }
      });
    }, []);
  
    
    if (firstLaunch === null) {
      return null;
    } else if (firstLaunch === true) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="SplashScreen">
          {(props) => <Splash {...props} />}
        </Stack.Screen>
         <Stack.Screen name="LoginScreen">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen">
          {(props) => <Login {...props} />}
        </Stack.Screen>
        </Stack.Navigator>
      );
    }
  }
  