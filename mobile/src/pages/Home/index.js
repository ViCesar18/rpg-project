import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'

import logoImg from '../../assets/logo.png'
import { Feather, AntDesign } from '@expo/vector-icons'

import styles from './styles'

const DATA = [
    {
        id: 1,
        name: 'teste',
        desc: 'aloalaolaoalo'
    },
    {
        id: 2,
        name: 'teste',
        desc: 'aloalaolaoalo'
    },
    {
        id: 3,
        name: 'teste',
        desc: 'aloalaolaoalo'
    },
    {
        id: 4,
        name: 'teste',
        desc: 'aloalaolaoalo'
    },
    {
        id: 5,
        name: 'teste',
        desc: 'aloalaolaoalo'
    },
    {
        id: 6,
        name: 'teste',
        desc: 'aloalaolaoalo'
    }
]

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#FFF'} />
                </TouchableHighlight>
                <Image style={styles.headerLogo} source={logoImg} />
            </View>

            <FlatList
                style={styles.characterList}
                data={DATA}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.character}>
                        <Feather name={'user'} size={50} color={'black'} />
                        <Text style={styles.characterName}>Balin</Text>
                        <Text style={styles.characterDescription}>Anão/Guerreiro</Text>
                    </View>
                )}
            />
                
            <TouchableOpacity
                style={styles.createCharacter}
                onPress={() => {navigation.navigate('NewSheetScreen')}}
            >
                <AntDesign name={'pluscircle'} size={50} color={'#FFF'}></AntDesign>
            </TouchableOpacity>
        </View>
    )
}