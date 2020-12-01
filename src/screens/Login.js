import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Platform, useWindowDimensions, TouchableOpacity, StyleSheet } from "react-native";
import { colors, width, height, statusBarHeight } from "../utils/theme";
import { Feather } from "@expo/vector-icons";
import Loading from "../components/Loading";
import {useDispatch, useSelector} from 'react-redux'
import { login } from "../actions/userActions";

const Login = ({ navigation }) => {
  const windowsDimensions = useWindowDimensions();
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.userLoginReducer)
  const {loading, error, user} = userInfo;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  const handlerUserInput = (value) => {
    setUsername(value);
  };

  const handlerPasswordInput = (value) => {
    setPassword(value);
  };

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.brown, paddingTop: statusBarHeight, width, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.violet, marginBottom: 30 }}>Login</Text>
      <Button style={{ marginBottom: 20 }} title="Volver a Home" onPress={() => navigation.goBack()} />

      <View style={{ marginVertical: 20 }}>
        <TextInput
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10 }}
          placeholder={"Ingrese username"}
          textContentType={Platform.OS === "ios" ? "username" : "emailAddress"}
          keyboardType={"email-address"}
          autoCompleteType={"email"}
          value={username}
          onChangeText={(value) => handlerUserInput(value)}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10 }}
          placeholder={"Ingrese su contraseña"}
          textContentType={Platform.OS === "ios" ? "newPassword" : "password"}
          autoCompleteType={"password"}
          secureTextEntry={isSecure}
          value={password}
          onChangeText={(value) => handlerPasswordInput(value)}
        />
        <TouchableOpacity style={{ backgroundColor: colors.white, height: windowsDimensions.height * 0.07, alignItems: "center", justifyContent: "center" }}>
          <Feather style={{ alignSelf: "center" }} name={isSecure ? "eye" : "eye-off"} size={24} color="black" onPress={() => setIsSecure((prev) => !prev)} />
        </TouchableOpacity>
      </View>
      {error && <Text style={{ color: colors.beige, fontSize: 20 }}>{error?.messages?.message}</Text>}
      <TouchableOpacity style={{ paddingVertical: 20, paddingHorizontal: 40, backgroundColor: colors.black, marginVertical: 20 }} onPress={() => dispatch(login(username,password))}>
        <Text style={{ color: colors.beige, fontSize: 20 }}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
