import React, { useState } from "react";
import { KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigation from "./Navigation/AppNavigation";

export default function App() {

  const [loaded] = useFonts({
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
   <Provider store={store}>
   <NavigationContainer>
      <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
      <AppNavigation />
      </KeyboardAvoidingView>
   </NavigationContainer>

   </Provider>
  );
}


