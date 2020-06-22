import React from "react";
//import { pics } from "../styles/pic_data";
import HomeButton from "../shared/HomeButton";
import HomeImage from "../shared/HomePageImg";
import { Zocial } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";
import { Text, View, TouchableOpacity } from "react-native";

function MyButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => console.log("Hello Home")}
      style={styles.mybutton}
    >
      <View style={styles.wrapper}>
        <Zocial name="facebook" size={26} color="#f96332" />
      </View>
      <View style={styles.wrapper}>
        <Zocial name="twitter" size={26} color="#f96332" />
      </View>
      <View style={styles.wrapper}>
        <Zocial name="instagram" size={26} color="#f96332" />
      </View>
    </TouchableOpacity>
  );
}

export default function HomePage({ navigation }) {
  return (
    <View style={{ height: "100%", backgroundColor: "#303030" }}>
      <HomeImage />
      <MyButton />
      <View style={styles.imgContainer}>
        <Text style={styles.titleTxt}>Chinese/Japanese Cuisine</Text>
        <Text style={styles.txt}>Saki, Beer, Wine, Mixed Drinks</Text>
        <Text style={styles.txt}>Sushi Bar</Text>
        <HomeButton />
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
    fontSize: 20,
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    marginBottom: 5,
  },
  txt: {
    color: "white",
    fontSize: 16,
    fontFamily: "nunito-bold",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 10,
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
  mybutton: {
    position: "relative",
    bottom: 44,
    zIndex: 1000,
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  wrapper: {
    paddingHorizontal: 30,
    borderColor: "gray",
    borderWidth: 2,
    borderStyle: "solid",
    paddingBottom: 7,
    paddingTop: 7,
  },
});
