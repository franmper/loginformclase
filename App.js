import "react-native-gesture-handler";
import React from "react";
import AuthStack from "./src/navigator/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
  );
}
