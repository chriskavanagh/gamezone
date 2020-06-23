import React from "react";
import Menu from "../screens/Menu";
import Contact from "../screens/Contact";
import NavHeader from "../shared/NavHeader";
import LunchMenu from "../screens/LunchMenu";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MenuStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: { backgroundColor: "#f96332" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="Lunch"
        component={LunchMenu}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
