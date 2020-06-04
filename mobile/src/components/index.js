import React from 'react'
import { View, Text, TextInput } from 'react-native'

export function DefaultText({ style, ...props}) {
    return (
        <View>
            <Text style={[{ fontFamily: 'Montserrat' }, style]} {...props}></Text>
        </View>
    )
}

export function DefaultTextInput({ style, ...props}) {
    return <TextInput style={[{ fontFamily: 'Montserrat' }, style]} {...props}></TextInput>
}