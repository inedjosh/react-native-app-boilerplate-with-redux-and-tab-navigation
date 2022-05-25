import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "../Screens/Auth/Splash";
import Login from "../Screens/Auth/Login";
import CheckEmail from "../Screens/Auth/CheckEmail";
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import ResetPassword from "../Screens/Auth/ResetPassword";
import Signup from "../Screens/Auth/Signup";
import Welcome from "../Screens/Auth/Welcome";
import SignupOtp from "../Screens/Auth/SignupOtp";
import EmailDelivered from "../Screens/Auth/EmailDelivered";


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
         <Stack.Screen name="SignupScreen">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
         <Stack.Screen name="SignupOtpScreen">
          {(props) => <SignupOtp {...props} />}
        </Stack.Screen>
         <Stack.Screen name="ForgotPasswordScreen">
          {(props) => <ForgotPassword {...props} />}
        </Stack.Screen>
         <Stack.Screen name="ResetPasswordScreen">
          {(props) => <ResetPassword {...props} />}
        </Stack.Screen>
   
         <Stack.Screen name="WelcomeScreen">
          {(props) => <Welcome {...props} />}
        </Stack.Screen>
         <Stack.Screen name="EmailDeliveredScreen">
          {(props) => <EmailDelivered {...props} />}
        </Stack.Screen>
        
        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="WelcomeScreen">
          {(props) => <Welcome {...props} />}
        </Stack.Screen>
          <Stack.Screen name="LoginScreen">
          {(props) => <Login {...props} />}
        </Stack.Screen>
         <Stack.Screen name="SignupScreen">
          {(props) => <Signup {...props} />}
        </Stack.Screen>
       
         <Stack.Screen name="ForgotPasswordScreen">
          {(props) => <ForgotPassword {...props} />}
        </Stack.Screen>
         <Stack.Screen name="ResetPasswordScreen">
          {(props) => <ResetPassword {...props} />}
        </Stack.Screen>
         <Stack.Screen name="SignupOtpScreen">
          {(props) => <SignupOtp {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EmailDeliveredScreen">
          {(props) => <EmailDelivered {...props} />}
        </Stack.Screen>
        </Stack.Navigator>
      );
    }
  }
  