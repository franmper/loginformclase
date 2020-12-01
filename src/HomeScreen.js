import React from "react";
import AuthStack from "./navigator/AuthStack";
import HomeStack from "./navigator/HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import {useSelector} from 'react-redux'
import Loading from "./components/Loading";

const HomeScreen = () => {
  const userInfo = useSelector(state => state.userLoginReducer)
  const {loading, error, user} = userInfo;

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user?.jwt != null ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default HomeScreen;
