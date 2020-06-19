import React from "react";
import bgLogo from "../assets/game_bg.png";
import logo from "../assets/heart_logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import { Text, View, Image, ImageBackground } from "react-native";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <ImageBackground source={bgLogo} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={logo} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = EStyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
