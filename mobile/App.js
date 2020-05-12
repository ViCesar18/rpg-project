import React from 'react';
import Routes from './src/routes'
import * as Font from 'expo-font'

export default function App() {

  async function  loadFonts() {
    await Font.loadAsync({
      "icomoon": require('./resources/fonts/icomoon.ttf')
    })
  }

  loadFonts()

  return (
    <Routes />
  )
}