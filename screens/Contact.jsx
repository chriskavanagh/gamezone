import React from "react";
import SafeView from "../shared/SafeView";
import ContactButton from "../shared/ContactButton";
import { Text, View, SafeAreaView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
//import { MaterialIcons, AntDesign, Zocial } from "@expo/vector-icons";

export default function Contact({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.top}>
        <View style={styles.container}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.txt}>5207 Bernard Dr</Text>
          <Text style={styles.txt}>Roanoke, VA 24018</Text>
          <Text style={styles.txt}>540-989-7947</Text>
          <Text style={styles.label}>Delivery Hrs</Text>
          <Text style={styles.txt}>11:30AM - 3:00PM</Text>
          <Text style={styles.txt}>5:00PM - 9:00PM</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.label}>Pick Up Hours</Text>
          <Text style={styles.headTxt}>Sun - Mon</Text>
          <Text style={styles.txt}>11:30AM - 9:00PM</Text>
          <Text style={styles.headTxt}>Tue</Text>
          <Text style={styles.txt}>Closed</Text>
          <Text style={styles.headTxt}>Wed - Thur</Text>
          <Text style={styles.txt}>11:30AM - 9:00PM</Text>
          <Text style={styles.headTxt}>Fri - Sat</Text>
          <Text style={styles.txt}>11:30AM - 9:00PM</Text>
        </View>
      </SafeAreaView>
      <ContactButton />
    </>
  );
}

const styles = EStyleSheet.create({
  top: {
    flex: 2,
    flexDirection: "row",
  },
  label: {
    color: "orange",
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 15,
    textDecorationLine: "underline",
  },
  txt: {
    color: "white",
    fontSize: 15,
    paddingBottom: 18,
    fontStyle: "italic",
  },
  headTxt: {
    color: "white",
    fontSize: 18,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#303030",
    color: "white",
    alignItems: "center",
    fontFamily: "nunito-bold",
    paddingTop: 55,
    fontWeight: "bold",
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#303030",
    color: "white",
    alignItems: "center",
    fontFamily: "nunito-bold",
    paddingTop: 55,
    fontWeight: "bold",
  },
  goBack: {
    flex: 1,
    flexDirection: "row",
  },
});

/* const styles = EStyleSheet.create({
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
}); */
