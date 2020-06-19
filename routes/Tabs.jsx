import React from "react";
import HomeStack from "./HomeStack";
import MenuStack from "../routes/MenuStack";
import ContactStack from "../routes/ContactStack";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#565656" }}
      tabBarOptions={{
        labelPosition: "below-icon",
        activeBackgroundColor: "#f0edf6",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactStack}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-call" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-restaurant" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
