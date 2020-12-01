import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { colors, width, height, statusBarHeight } from "../utils/theme";
import {useSelector} from 'react-redux'
import AsyncStorage from "@react-native-async-storage/async-storage"

const Welcome = ({navigation}) => {
  const userInfo = useSelector(state => state.userReducer)

  const getUserToken = async () => console.log(await AsyncStorage.getItem('userToken'));

  useEffect(() => {
    console.log('welcome', userInfo)
    getUserToken()
  }, [userInfo])

  return (
    <View style={{ backgroundColor: colors.brown, paddingTop: statusBarHeight, width, height, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.violet }}>React Native</Text>
      <Button style={{marginBottom: 20}} title="Iniciar Sesión" onPress={() => navigation.navigate('Login')}/>
      <Button title="Regristarse" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default Welcome;
