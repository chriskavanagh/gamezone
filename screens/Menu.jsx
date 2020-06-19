import React from "react";
import { Text, View, Button } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
//import { MaterialIcons, AntDesign, Zocial } from "@expo/vector-icons";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Button
        onPress={() => navigation.navigate("Lunch")}
        title="Go To Lunch Menu!"
        type="outline"
      />
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
