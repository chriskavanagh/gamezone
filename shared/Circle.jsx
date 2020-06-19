import React, { Children } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Circle({ children }) {
  return <View style={styles.circle}>{children}</View>;
}

const styles = EStyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: "white",
    elevation: 3,
    backgroundColor: "white",
  },
});
