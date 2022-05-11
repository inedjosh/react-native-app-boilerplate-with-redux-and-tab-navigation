import React, { useState } from "react";
import { KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavigation from "./Navigation/AppNavigation";

export default function App() {

  const [loaded] = useFonts({
    bold: require("./assets/fonts/Roboto-Bold.ttf"),
    medium: require("./assets/fonts/Roboto-Medium.ttf"),
    light: require("./assets/fonts/Roboto-Light.ttf"),
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
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


