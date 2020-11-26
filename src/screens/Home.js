import React from "react";
import { View, Text, Button } from "react-native";
import { colors, width, height, statusBarHeight } from "../utils/theme";

const Home = () => {
  return (
    <View style={{ backgroundColor: colors.brown, paddingTop: statusBarHeight, width, height, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.violet }}>Home</Text>
    </View>
  )
}

export default Home
