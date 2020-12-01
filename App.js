import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import HomeScreen from "./src/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
