import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
//import { MaterialIcons, AntDesign, Zocial } from "@expo/vector-icons";

export default function LunchMenu() {
  return (
    <View style={styles.container}>
      <Text>Lunch</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
