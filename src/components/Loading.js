import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import {colors} from '../utils/theme';

const Loading = () => {
   return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.beige}}>
         <ActivityIndicator size={50} color={colors.violet} />
      </View>
   )
}

export default Loading
