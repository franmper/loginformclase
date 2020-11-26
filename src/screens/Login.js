import React, { useState } from "react";
import { View, Text, Button, TextInput, Platform, useWindowDimensions, TouchableOpacity, StyleSheet } from "react-native";
import { colors, width, height, statusBarHeight } from "../utils/theme";
import { Feather } from "@expo/vector-icons";
import axios from 'axios'
import Constants from 'expo-constants'

const {apiUrl} = Constants.manifest.extra

const Login = ({navigation}) => {
  const windowsDimensions = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  const handlerEmailInput = (value) => {
    setEmail(value);
  };

  const handlerPasswordInput = (value) => {
    setPassword(value);
  };

  const handlerLogin = async () => {
    console.log(email, password)
    console.log(`${apiUrl}/auth/local`)
    try {
      const data = await axios({
        method: "POST",
        url: `${apiUrl}/auth/local`,
        data: {
          identifier: email,
          password: password
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }  
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.brown, paddingTop: statusBarHeight, width, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.violet, marginBottom: 30 }}>Login</Text>
      <Button style={{ marginBottom: 20 }} title="Volver a Home" onPress={() => navigation.goBack()} />

      <View style={{ marginVertical: 20 }}>
        <TextInput
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10 }}
          placeholder={"Ingrese username o email"}
          textContentType={Platform.OS === "ios" ? "username" : "emailAddress"}
          keyboardType={"email-address"}
          autoCompleteType={"email"}
          value={email}
          onChangeText={(value) => handlerEmailInput(value)}
        />
      </View>

      <View style={{flexDirection: "row", alignItems: "center"}}>
        <TextInput
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10 }}
          placeholder={"Ingrese su contraseña"}
          textContentType={Platform.OS === "ios" ? "newPassword" : "password"}
          autoCompleteType={"password"}
          secureTextEntry={isSecure}
          value={password}
          onChangeText={(value) => handlerPasswordInput(value)}
        />
        <TouchableOpacity style={{backgroundColor: colors.white, height: windowsDimensions.height * 0.07, alignItems: "center", justifyContent: "center"}}>
          <Feather style={{ alignSelf: "center" }} name={isSecure ? "eye" : "eye-off"} size={24} color="black" onPress={() => setIsSecure(prev => !prev)} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{paddingVertical: 20, paddingHorizontal: 40, backgroundColor: colors.black, marginVertical: 20}} onPress={handlerLogin}>
        <Text style={{color: colors.beige, fontSize: 20}}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
