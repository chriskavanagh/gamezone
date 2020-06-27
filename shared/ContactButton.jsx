import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";

export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.last}>
      <Button
        onPress={() => navigation.goBack()}
        title="Go Back"
        type="outline"
        titleStyle={{ color: "#f96332" }}
        buttonStyle={{
          borderColor: "gray",
          borderWidth: 4,
          width: 380,
          marginTop: 16,
        }}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  last: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#303030",
  },
});
