import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTab from "./TabNavigator";
import HomeScreen from "../Screens/HomeScreen";
import Wallet from "../Screens/Wallet";
import Savings from "../Screens/Savings";
import { Profiler } from "react/cjs/react.production.min";
import Profile from "../Screens/Profile";


const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="tabs" component={MyTab} />
      <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="WalletScreen">
        {(props) => <Wallet {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SavingsScreen">
        {(props) => <Savings {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ProfileScreen">
        {(props) => <Profile {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
