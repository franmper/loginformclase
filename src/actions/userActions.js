import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_FAIL } from "../constants/userConstants";
import axios from "axios";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { apiUrl } = Constants.manifest.extra;

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post(`${apiUrl}/auth/local`, {
      identifier: username,
      password: password,
    });
    AsyncStorage.setItem("userToken", data.jwt).then(response => console.log(response));
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = () => async (dispatch) => {
  await AsyncStorage.removeItem("userToken");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const { data } = await axios.post(`${apiUrl}/auth/local/register`, {
      username,
      email,
      password
    });

    console.log(data)

    AsyncStorage.setItem("userToken", data.jwt).then(response => console.log(response)).catch(e => console.log(e));

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error
    })
  }
}