import React from 'react'
import { View, Text } from 'react-native'

export default function DefaultText({ style, ...props}) {
    return (
        <View>
            <Text style={[{ fontFamily: 'Montserrat' }, style]} {...props}></Text>
        </View>
    )
}