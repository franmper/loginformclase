import React, {useEffect, useState} from "react";
import { View, Text, Button } from "react-native";
import { colors, width, height, statusBarHeight, Image } from "../utils/theme";
import {useDispatch} from 'react-redux'
import { logout } from "../actions/userActions";
import * as Location from "expo-location";
import * as Permissions from 'expo-permissions'
import MapView, {Marker} from 'react-native-maps'

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState({})

  useEffect(() => {
    const focus = navigation.addListener('focus', async () => {
      const { status } = await Location.requestPermissionsAsync();
      console.log(status)
      if (status !== 'granted') {
        Permissions.askAsync('location')
      }

      const dataLocation = await Location.getLastKnownPositionAsync()

      console.log(dataLocation);
      setPosition(dataLocation)
    })

    return focus
  }, [navigation])

  return (
    <View style={{ backgroundColor: colors.brown, paddingTop: statusBarHeight, width, height, justifyContent: "center", alignItems: "center" }}>
      <Button title="Cerrar Sesión" onPress={() => dispatch(logout())} />
      <MapView 
        style={{width, height: height * 0.5}}
        region={{
          latitude: -31.3354233,
          longitude: -64.3368246,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      > 
        <Marker
          coordinate={{
            latitude: -31.3354233,
            longitude: -64.3368246
          }}
          title={"hola"}
          description={"hola descripcion"}
          image={require('../../assets/favicon.png')}
        />
        <Marker 
          coordinate={{
            latitude: -30.3354233,
            longitude: -64.3368246
          }}
        />
      </MapView>
    </View>
  )
}

export default Home
