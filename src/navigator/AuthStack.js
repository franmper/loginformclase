import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Register from '../screens/Register'

const {Navigator, Screen} = createStackNavigator()

const AuthStack = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  )
}

export default AuthStack
