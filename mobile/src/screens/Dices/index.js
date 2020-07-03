import React from 'react'
import { View, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'

export default function Dices({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#353535'} />
                </TouchableHighlight>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/dices/custom-d20.png')} />
                    <DefaultText style={styles.title}>Dados</DefaultText>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.dicesContainer}>
                    <View style={styles.columnTitleContainer}>
                        <DefaultText style={[styles.columnTitle, { marginRight: '24%' }]}>Nº Dados</DefaultText>
                        <DefaultText style={styles.columnTitle}>Modificador</DefaultText>
                    </View>

                    <View style={styles.dice}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d4" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d4</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={styles.dice}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d6" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d6</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={styles.dice}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d8" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d8</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={styles.dice}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d10" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d10</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={styles.dice}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d12" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d12</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={styles.dice}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d20" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d20</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>

                    <View style={[styles.dice, { marginBottom: 0 }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="dice-d100" size={36} color={'#FFF'} />
                            <DefaultText style={styles.diceTitle}>d100</DefaultText>
                        </View>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                        <DefaultTextInput style={{ color: '#FFF', fontSize: 28 }}>+</DefaultTextInput>
                        <DefaultTextInput
                            style={styles.diceInput}
                            maxLength={1}
                            selectionColor="#4A55A1"
                            keyboardType="number-pad"
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <DefaultText style={styles.buttonText}>Rolar</DefaultText>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}