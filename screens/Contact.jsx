import React from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { MaterialIcons, AntDesign, Zocial } from "@expo/vector-icons";

export default function Contact() {
  return (
    <View style={{ height: "100%", backgroundColor: "#303030" }}>
      <View style={styles.imgContainer}>
        <Text style={styles.titleTxt}>
          <MaterialIcons
            name="restaurant-menu"
            size={25}
            color="#696969"
            style={styles.iconStyle}
          />
          Szechuans Restaurant
        </Text>
        <Text style={styles.txt}>
          <AntDesign
            name="home"
            size={25}
            color="#696969"
            style={styles.iconStyle}
          />
          5207 Bernard Dr 24018
        </Text>
        <Text style={styles.txt}>
          <AntDesign
            name="mobile1"
            size={25}
            color="#696969"
            style={styles.iconStyle}
          />
          Tel: 540-989-7947
        </Text>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  headerImage: {
    width: 90,
    height: 90,
    padding: 2,
  },
  titleTxt: {
    color: "white",
    fontSize: 22,
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    marginBottom: 5,
  },
  txt: {
    color: "white",
    fontSize: 17,
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 25,
  },
  imgContainer: {
    padding: 20,
    borderRadius: 15,
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  iconStyle: {
    right: 3,
    position: "relative",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#FF8C00",
    padding: 10,
    borderRadius: 5,
    width: "70%",
    marginVertical: 20,
  },
});
