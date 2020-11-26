import {Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get("screen")
const statusBarHeight = StatusBar.currentHeight

const colors = {
  brown: "#d0b8ac",
  beige: "#f3d8c7",
  white: "#fbfefb",
  black: "#011627",
  violet: "#713E5A" 
}

export {
  width,
  height,
  statusBarHeight,
  colors
}