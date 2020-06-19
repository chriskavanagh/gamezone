import React from "react";
import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";
import Tabs from "./Tabs";
//import ReviewStack from "./ReviewStack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const MyDrawer = createDrawerNavigator();

export default () => {
  return (
    <MyDrawer.Navigator initialRouteName="Home">
      <MyDrawer.Screen name="Home" component={HomeStack} />
      <MyDrawer.Screen name="Tabs" component={Tabs} />
      <MyDrawer.Screen name="About" component={AboutStack} />
    </MyDrawer.Navigator>
  );
};
