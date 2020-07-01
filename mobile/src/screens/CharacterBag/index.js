import React, { useContext, useState } from 'react'
import { View, ScrollView, TouchableHighlight, Image, Button } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { objectSize } from '../../utils/additionalFunctions'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterBag({ navigation }) {
    const characterBase = useContext(CharacterContext)
    const [character, setCharacter] = useState(characterBase)

    const [updatedFields, setUpdatedFields] = useState({ sheet_id: character.sheet_id })
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

    async function handleUpdateSheet() {
        try {
            await api.put('sheet/update-sheet', updatedFields, {
                headers: {
                    Authorization: character.user_id
                }
            })

            setCharacter({...character, ...updatedFields})
            setUpdatedFields({ sheet_id: character.sheet_id })
            setSaveButtonDisabled(true)
        }
        catch(err) {
            console.log(err)
            alert('Erro ao salvar, tente novamente.')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableHighlight
                        style={styles.headerButton}
                        onPress={navigation.openDrawer}
                        underlayColor="transparent"
                    >
                        <Feather name={'menu'} size={36} color={'#C2C2C2'} />
                    </TouchableHighlight>

                    <View style={styles.saveButton}>
                        <Button
                            title="SALVAR"
                            disabled={saveButtonDisabled}
                            color="green"
                            onPress={handleUpdateSheet}
                        />
                    </View>
                </View>
            </View>

            <DefaultText style={styles.title}>Inventário</DefaultText>

            <ScrollView contentContainerStyle={styles.bagContainer} showsVerticalScrollIndicator={false}>
                <View style={{ width: '30%' }}>
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.cp) {
                                updatedFields.cp = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.cp
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.sp) {
                                updatedFields.sp = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.sp
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.ep) {
                                updatedFields.ep = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.ep
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.gp) {
                                updatedFields.gp = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.gp
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.pp) {
                                updatedFields.pp = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.pp
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                </View>

                <View style={{ width: '70%', }}>
                    <DefaultTextInput
                        style={styles.bagInput}
                        defaultValue={character.equipment}
                        maxLength={2048}
                        multiline
                        textAlignVertical="top"
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== character.equipment) {
                                updatedFields.equipment = text
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.equipment
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                </View>

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