import React, { useState } from 'react';
import Routes from './src/routes'
import * as Font from 'expo-font'
import { View, Text } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true)

  async function loadFonts() {
    await Font.loadAsync({
      icomoon: require('./resources/fonts/Icons/icomoon.ttf'),
      Montserrat: require('./resources/fonts/Montserrat/Montserrat-Regular.ttf'),
      'Montserrat-Bold': require('./resources/fonts/Montserrat/Montserrat-Bold.ttf'),
      'Montserrat-ExtraLight-Italic': require('./resources/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf'),
    })
    setLoading(false)
  }
  loadFonts()

  if(loading){
    return (
      <View>
        <Text>CARREGANDO...</Text>
      </View>
    )
  }

  return (
    <Routes />
  )
}