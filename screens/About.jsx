import React from "react";
import { Text, View, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View>
      <Text>About Screen</Text>
      <Text>About</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
