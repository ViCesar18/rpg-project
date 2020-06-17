import React, { useContext } from 'react'
import { View, ScrollView, TouchableHighlight, Image } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { CharacterContext } from '../../contexts/character'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterBag({ navigation }) {
    const character = useContext(CharacterContext)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#C2C2C2'} />
                </TouchableHighlight>
            </View>

            <DefaultText style={styles.title}>Inventário</DefaultText>

            <ScrollView contentContainerStyle={styles.bagContainer} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.coinContainer}>
                        <DefaultText style={styles.coinTitle}>PC</DefaultText>
                        <DefaultText style={styles.coinTitle}>PP</DefaultText>
                        <DefaultText style={styles.coinTitle}>PE</DefaultText>
                        <DefaultText style={styles.coinTitle}>PO</DefaultText>
                        <DefaultText style={styles.coinTitle}>PL</DefaultText>
                    </View>

                    <DefaultTextInput 
                        style={[styles.coinInput, {
                            position: 'absolute',
                            top: '4%',
                            left: '40%'
                        }]}
                        defaultValue={String(character.cp)}
                        keyboardType="number-pad"
                        maxLength={5}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.coinInput, {
                            position: 'absolute',
                            top: '18%',
                            left: '40%'
                        }]}
                        defaultValue={String(character.sp)}
                        keyboardType="number-pad"
                        maxLength={5}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.coinInput, {
                            position: 'absolute',
                            top: '33%',
                            left: '40%'
                        }]}
                        defaultValue={String(character.ep)}
                        keyboardType="number-pad"
                        maxLength={5}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.coinInput, {
                            position: 'absolute',
                            top: '47%',
                            left: '40%'
                        }]}
                        defaultValue={String(character.gp)}
                        keyboardType="number-pad"
                        maxLength={5}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.coinInput, {
                            position: 'absolute',
                            top: '61%',
                            left: '40%'
                        }]}
                        defaultValue={String(character.pp)}
                        keyboardType="number-pad"
                        maxLength={5}
                        selectionColor="#4A55A1"
                    />
                </View>

                <DefaultTextInput
                    style={styles.bagInput}
                    defaultValue={character.equipment}
                    maxLength={2048}
                    multiline
                    textAlignVertical="top"
                    selectionColor="#4A55A1"
                />

                <View style={{
                    position: 'absolute',
                    bottom: '0%',
                    left: '8%',
                    elevation: 10
                }}>
                    <Image
                        style={{
                            width: 110,
                            height: 168
                        }}
                        source={require('../../assets/potion/potion.png')}
                    />
                </View>
            </ScrollView>
        </View>
    )
}