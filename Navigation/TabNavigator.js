import * as React from "react";
import { Platform, Text, StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profile from "../Screens/Profile";
import Savings from "../Screens/Savings";
import Wallet from "../Screens/Wallet";
import HomeScreen from "../Screens/HomeScreen";
import HomeSvg from "../svg/HomeSvg";
import WalletSvg from "../svg/WalletSvg";
import ProfileSvg from "../svg/ProfileSvg";


const Tab = createMaterialBottomTabNavigator();

let MyTab;

if (Platform.OS === "android") {
  MyTab = MyAndroidTabs;
} else if (Platform.OS === "ios") {
  MyTab = MyIosTabs;
}

function MyIosTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#ccc'}
      inactiveColor="#c0c0c0"
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: "#fff",
        paddingVertical: 5,
        fontSize: 20,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        tabBarLabelStyle
        labeled={true}
        options={{
          tabBarLabel: <Text style={styles.text}>Home</Text>,
          tabBarIcon: ({ color }) => <HomeSvg color={color} />
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={Wallet}
        labeled={true}
        options={{
          tabBarLabel: <Text style={styles.text}>Wallet</Text>,
          tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="SavingsScreen"
        component={Savings}
        options={{
          tabBarLabel: <Text style={styles.text}>Savings</Text>,
          tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarLabel: <Text style={styles.text}>Support</Text>,
          tabBarIcon: ({ color }) => <ProfileSvg color={color} />,
        }}
      />
      
    </Tab.Navigator>
  );
}

function MyAndroidTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#3300cc'}
      inactiveColor="#c0c0c0"
      barStyle={{ backgroundColor: "#fff" }}
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: "#fff",
        paddingVertical: 5,
        fontSize: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: <Text style={styles.text}>Home</Text>,
          tabBarIcon: ({ color }) => <HomeSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={Wallet}
        options={{
          tabBarLabel: <Text style={styles.text}>Wallet</Text>,
          tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="SavingsScreen"
        component={Savings}
        options={{
          tabBarLabel: <Text style={styles.text}>Savings</Text>,
          tabBarIcon: ({ color }) => <WalletSvg color={color} />,
        }}
      />
   
      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          tabBarLabel: <Text style={styles.text}>Settings</Text>,
          tabBarIcon: ({ color }) => <ProfileSvg color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTab;

const styles = StyleSheet.create({
  text: {
    fontSize: 9,
    fontFamily: "bold",
    marginTop: 50,
    paddingTop: 5,
    position: "absolute",
    top: 10,
    color: '#000'
  },
});
