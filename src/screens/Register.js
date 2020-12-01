import React, { useState } from "react";
import { View, Text, Button, TextInput, Platform, useWindowDimensions, TouchableOpacity, StyleSheet } from "react-native";
import { colors, width, height, statusBarHeight } from "../utils/theme";
import { Feather } from "@expo/vector-icons";
import {useDispatch, useSelector} from 'react-redux'
import { register } from "../actions/userActions";
import Loading from "../components/Loading";

const Register = ({navigation}) => {
  const windowsDimensions = useWindowDimensions();
  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.userLoginReducer)
  const {loading, error, user} = userInfo;

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSecure, setIsSecure] = useState(true);
  const [isUsernameError, setIsUsernameError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [isUsernameErrorMessage, setIsUsernameErrorMessage] = useState(false)
  const [isEmailErrorMessage, setIsEmailErrorMessage] = useState('')
  const [isPasswordErrorMessage, setIsPasswordErrorMessage] = useState('')

  const handlerUsernameInput = (value) => {
    console.log(value);
    setUsername(value);
  };

  const handlerEmailInput = (value) => {
    console.log(value);
    setEmail(value);
  };

  const handlerPasswordInput = (value) => {
    console.log(value);
    setPassword(value);
  };

  const validateEmail = (text) => {
    const expresionRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(!expresionRegular.test(text) || text == null) {
      setIsEmailError(true)
      setIsEmailErrorMessage('Email incorrecto')
      return true;
    } else {
      setIsEmailError(false)
      return false;
    }
  }

  const validateUsername = (text) => {
    if(text == '') {
      setIsUsernameError(true)
      setIsUsernameErrorMessage('Debe ingresar un username')
      return true;
    } else {
      setIsUsernameError(false)
      return false;
    }
  }

    const validatePassword = (text) => {
    if(text == '' || text.length == 8) {
      setIsPasswordError(true)
      setIsPasswordErrorMessage('Debe ingresar una contraseña')
      return true;
    } else {
      setIsPasswordError(false)
      return false;
    }
  }

  const handlerRegister = () => {
    
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.brown, paddingTop: statusBarHeight, width, height, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.violet, marginBottom: 20 }}>Registro</Text>
      <Button style={{marginBottom: 20}} title="Volver a Home" onPress={() => navigation.goBack()}/>
      <View>
        <TextInput 
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10, marginVertical: 20 }}
          placeholder={"Ingrese username"}
          textContentType={"username"}
          autoCompleteType={"username"}
          value={username}
          onChangeText={(value) => handlerUsernameInput(value)}
          onFocus={() => setIsUsernameError(false)}
        />
        {isUsernameError ? <Text>{isUsernameErrorMessage}</Text> : null}
      </View>
      <View>
        <TextInput 
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10, marginBottom: 20 }}
          placeholder={"Ingrese email"}
          textContentType={Platform.OS === "ios" ? "username" : "emailAddress"}
          keyboardType={"email-address"}
          autoCompleteType={"email"}
          value={email}
          onChangeText={(value) => handlerEmailInput(value)}
          onFocus={() => setIsEmailError(false)}
        />
        {isEmailError ? <Text>{isEmailErrorMessage}</Text> : null}
      </View>
      <View >
        <TextInput
          style={{ backgroundColor: colors.white, width: width * 0.7, height: windowsDimensions.height * 0.07, fontSize: 15, paddingLeft: 10 }}
          placeholder={"Ingrese su contraseña"}
          placeholderTextColor={colors.violet}
          textContentType={Platform.OS === "ios" ? "newPassword" : "password"}
          autoCompleteType={"password"}
          secureTextEntry={isSecure}
          value={password}
          onChangeText={(value) => handlerPasswordInput(value)}
          onFocus={() => setIsPasswordError(false)}
        />
        {isPasswordError ? <Text>{isPasswordErrorMessage}</Text> : null}
      </View>
      <TouchableOpacity style={{paddingVertical: 20, paddingHorizontal: 40, backgroundColor: colors.black, marginVertical: 20}} onPress={() => dispatch(register(username, email, password))}>
        <Text style={{color: colors.beige, fontSize: 20}}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register
