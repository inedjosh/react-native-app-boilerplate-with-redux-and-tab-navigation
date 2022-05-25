import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTab from "./TabNavigator";
import HomeScreen from "../Screens/HomeScreen";
import Wallet from "../Screens/Wallet";
import Savings from "../Screens/Savings";
import Profile from "../Screens/Profile";
import Success from "../Screens/General/Success";
import Accounts from "../Screens/Accounts";
import CashIn from "../Screens/CashIn";
import CashOut from "../Screens/CashOut";


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
      <Stack.Screen name="SuccessScreen">
        {(props) => <Success {...props} />}
      </Stack.Screen>
      <Stack.Screen name="AccountsScreen">
        {(props) => <Accounts {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CashInScreen">
        {(props) => <CashIn {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CashOutScreen">
        {(props) => <CashOut {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
