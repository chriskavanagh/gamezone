import "react-native-gesture-handler"; //must be at top
import Tabs from "./routes/Tabs";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import React, { useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from "./routes/HomeStack";
//import Navigator from "./routes/Drawer";
import { ThemeProvider } from "react-native-elements";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "rocksalt-regular": require("./assets/fonts/RockSalt-Regular.ttf"),
    "greatvibes-regular": require("./assets/fonts/GreatVibes-Regular.ttf"),
  });
};

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: "#0275d8",
  $fontFamily: "nunito-bold",
  $padding: 24,
  $fontSize: 18,
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [user, setUser] = useState("Chris");

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <ThemeProvider>{user ? <Tabs /> : <HomeStack />}</ThemeProvider>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
