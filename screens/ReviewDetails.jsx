import React from "react";
import { View, Text, Image } from "react-native";
import { images } from "../styles/global";
import EStyleSheet from "react-native-extended-stylesheet";
//import logo from "../assets/rating-4.png";

export default function ReviewDetails({ route }) {
  const [imgRating, setImgrating] = React.useState(1);
  const { title, rating, body } = route.params;

  React.useEffect(() => {
    setImgrating(route.params.rating);
  }, [imgRating]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}>{title}</Text>

      <Text style={{ fontSize: 18 }}>{body}</Text>
      <View style={styles.rating}>
        <Text style={styles.rating}>GameZome Ratings: </Text>
      </View>
      <View>
        <Image
          source={images.ratings[rating]}
          style={[imgRating <= 3 ? styles.threeHearts : styles.fiveHearts]}
        />
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rating: {
    paddingBottom: 5,
    paddingTop: 20,
  },

  threeHearts: {
    height: 30,
    width: 70,
  },
  fiveHearts: {
    height: 30,
    width: 120,
  },
});
