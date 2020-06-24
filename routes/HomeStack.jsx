import React from "react";
import Contact from "../screens/Contact";
import NavHeader from "../shared/NavHeader";
import HomePage from "../screens/HomePage";
//import Header from "../shared/Header";
//import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";
import { createStackNavigator } from "@react-navigation/stack";
//import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  const openMenu = () => {
    navigation.toggleDrawer();
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#f96332" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: "Contact",
        }}
      />
    </Stack.Navigator>
  );
}
