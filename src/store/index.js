import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducers";

const reducers = combineReducers({
  userLoginReducer: userLoginReducer,
  userRegisterReducer: userRegisterReducer,
});

const getUserToken = async () => await AsyncStorage.getItem("userToken") ?  await AsyncStorage.getItem("userToken") : null;

const initialState = {
  userLoginReducer: {
    user: {
      jwt: getUserToken,
    },
  },
};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
