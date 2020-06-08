import React, { useState, useEffect } from 'react'
import { View, Image, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import { DefaultText } from '../../components'

import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'

import api from '../../services/api'

export default function Home({ navigation }) {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)

    async function loadCharacters() {
        if(loading || total > 0 && characters.length === total){
            return
        }

        setLoading(true)

        const response = await api.get('sheet/user-sheets', {
            params: { page },
            headers: { authorization: 1 }
        })

        setCharacters([...characters, ...response.data])
        setTotal(response.headers['x-total-count'])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadCharacters()
    }, [])

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
                <Image style={styles.headerLogo} source={require('../../assets/logo.png')} />
            </View>

            <FlatList
                style={styles.characterList}
                data={characters}
                keyExtractor={character => String(character.sheet_id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCharacters}
                onEndReachedThreshold={0.2}
                renderItem={({ item: character }) => {
                    var characterImg

                    switch(character.character_img) {
                        case 'dwarf.png':
                            characterImg = require('../../assets/avatar/dwarf.png')
                            break
                        case 'elf.png':
                            characterImg = require('../../assets/avatar/elf.png')
                            break
                        case 'human-fighter.png':
                            characterImg = require('../../assets/avatar/human-fighter.png')
                            break
                        case 'human-mage.png':
                            characterImg = require('../../assets/avatar/human-mage.png')
                            break
                        case 'human-rogue.png':
                            characterImg = require('../../assets/avatar/human-rogue.png')
                            break
                        case 'orc.png':
                            characterImg = require('../../assets/avatar/orc.png')
                        default:
                            characterImg = require('../../assets/avatar/human-fighter.png')
                            break
                    }

                    return (
                        <TouchableOpacity 
                            style={styles.character}
                            onPress={() => navigation.navigate('Tab', { character })}
                        >
                            <Image style={styles.characterImage} source={characterImg} />
                            <View style={styles.textContainer}>
                                <DefaultText numberOfLines={1} allowFontScaling={false} style={styles.characterName}>{character.character_name}</DefaultText>
                                <DefaultText allowFontScaling={false} style={styles.characterDescription}>{character.race}/{character.class}</DefaultText>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
                
            <TouchableOpacity
                style={styles.createCharacter}
                onPress={() => navigation.navigate('NewSheetScreen')}
            >
                <Icon name={'plus-circle'} size={50} color={'#FFF'} />
            </TouchableOpacity>
        </View>
    )
}