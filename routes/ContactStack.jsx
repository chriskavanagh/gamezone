import React from "react";
import Contact from "../screens/Contact";
import NavHeader from "../shared/NavHeader";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerStyle: { backgroundColor: "#f96332" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
