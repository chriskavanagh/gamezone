import React from "react";
import SafeView from "../shared/SafeView";
import logo from "../assets/pics/boat.jpg";
import { Avatar } from "react-native-elements";
import { Text, View, Button } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
//import { MaterialIcons, AntDesign, Zocial } from "@expo/vector-icons";

export default function Menu({ navigation }) {
  return (
    <SafeView>
      <View style={styles.container}>
        <Text>Menu</Text>
        <Button
          onPress={() => navigation.navigate("Lunch")}
          title="Go To Lunch Menu!"
          type="outline"
        />
        <View style={styles.avatar}>
          <Avatar source={logo} size="large" rounded />
        </View>
      </View>
    </SafeView>
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
  avatar: {
    marginTop: 10,
  },
});
