import React, { useState, useContext } from 'react'
import { View, ScrollView, TouchableHighlight, Modal, TouchableOpacity, Button } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { objectSize } from '../../utils/additionalFunctions'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterBackground({ navigation }) {
    const characterBase = useContext(CharacterContext)
    const [character, setCharacter] = useState(characterBase)

    const textStates = {
        personality_traits: useState(character.personality_traits),
        ideals: useState(character.ideals),
        bonds: useState(character.bonds),
        flaws: useState(character.flaws),
        character_backstory: useState(character.character_backstory),
        features_traits: useState(character.features_traits),
        languages_and_proficiencies: useState(character.languages_and_proficiencies),
        allies_name: useState(character.allies_name),
        allies_description: useState(character.allies_description),
        additional_features: useState(character.additional_features),
        treasure: useState(character.treasure)
    }

    const [updatedFields, setUpdatedFields] = useState({ sheet_id: character.sheet_id })
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalUpdateInput, setModalUpdateInput] = useState('')

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

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.darkInputContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Idade"
                            defaultValue={String(character.age)}
                            keyboardType="number-pad"
                            maxLength={5}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text != character.age) {
                                    updatedFields.age = Number(text)
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.age
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Altura"
                            defaultValue={character.height}
                            maxLength={6}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.height) {
                                    updatedFields.height = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.height
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Peso"
                            defaultValue={character.weight}
                            maxLength={6}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.weight) {
                                    updatedFields.weight = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.weight
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Olhos"
                            defaultValue={character.eyes}
                            maxLength={12}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.eyes) {
                                    updatedFields.eyes = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.eyes
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Pele"
                            defaultValue={character.skin}
                            maxLength={20}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.skin) {
                                    updatedFields.skin = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.skin
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Cabelos"
                            defaultValue={character.hair}
                            maxLength={12}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.hair) {
                                    updatedFields.hair = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.hair
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[styles.darkInputContainer, { width: '48%' }]}>
                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Traços de Personalidade')
                                    setModalText(textStates['personality_traits'][0])
                                    setModalUpdateInput('personality_traits')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {textStates['personality_traits'][0]}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>TRAÇOS DE PERSONALIDADE</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Ideais')
                                    setModalText(textStates['ideals'][0])
                                    setModalUpdateInput('ideals')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {textStates['ideals'][0]}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>IDEAIS</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Ligações')
                                    setModalText(textStates['bonds'][0])
                                    setModalUpdateInput('bonds')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {textStates['bonds'][0]}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>LIGAÇÕES</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Defeitos')
                                    setModalText(textStates['flaws'][0])
                                    setModalUpdateInput('flaws')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {textStates['flaws'][0]}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>DEFEITOS</DefaultText>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.darkInputContainer, { width: '48%' }]}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 500 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('História do Personagem')
                                    setModalText(textStates['character_backstory'][0])
                                    setModalUpdateInput('character_backstory')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%', lineHeight: 22, fontSize: 16}}
                                    numberOfLines={20}
                                >
                                    {textStates['character_backstory'][0]}
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>HISTÓRIA DO PERSONAGEM</DefaultText>
                        </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '48%' }}>
                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 150 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Características e Habilidades')
                                    setModalText(textStates['features_traits'][0])
                                    setModalUpdateInput('features_traits')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={7}
                                >
                                    {textStates['features_traits'][0]}
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>CARACTERÍSTICAS E HABILIDADES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 125 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Idiomas e Outras Proficiências')
                                    setModalText(textStates['languages_and_proficiencies'][0])
                                    setModalUpdateInput('languages_and_proficiencies')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={6}
                                >
                                    {textStates['languages_and_proficiencies'][0]}
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>IDIOMAS E OUTRAS PROFICIÊNCIAS</DefaultText>
                        </View>
                    </View>
                    
                    <View style={{ width: '48%' }}>
                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 72 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle(textStates['allies_name'][0])
                                    setModalText(textStates['allies_description'][0])
                                    setModalUpdateInput('allies_description')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%', fontSize: 16, textAlign: 'center', textAlignVertical: 'center' }}
                                >
                                    {textStates['allies_name'][0]}
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>ALIADOS E ORGANIZAÇÕES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 72 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Outras Características e Habilidades')
                                    setModalText(textStates['additional_features'][0])
                                    setModalUpdateInput('additional_features')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    {textStates['additional_features'][0]}
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>OUTRAS CARACTERÍSTICAS E HABILIDADES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 72 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Tesouro')
                                    setModalText(textStates['treasure'][0])
                                    setModalUpdateInput('treasure')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    {textStates['treasure'][0]}
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>TESOURO</DefaultText>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <ScrollView style={styles.modalView}>
                        <TouchableHighlight
                            style={styles.modalCloseButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Feather name="x" size={20} color="#C2C2C2" />
                        </TouchableHighlight>
                        {
                            modalUpdateInput !== 'allies_description' ?
                            <DefaultText style={styles.modalTitle}>{modalTitle}</DefaultText> :
                            <DefaultTextInput
                                style={styles.modalTitle}
                                placeholder="Nome dos Aliados"
                                value={modalTitle}
                                maxLength={16}
                                selectionColor="#4A55A1"
                                onChangeText={text => setModalTitle(text)}
                            />
                        }
                        <DefaultTextInput
                            style={styles.modalInput}
                            value={modalText}
                            maxLength={2048}
                            multiline
                            textAlignVertical="top"
                            selectionColor="#4A55A1"
                            onChangeText={text => setModalText(text)}
                        />
                        <View style={styles.modalConfirmButton}>
                            <Button
                                title="OK"
                                color="#4A55A1"
                                onPress={() => {
                                    if(modalUpdateInput === 'allies_description') {
                                        textStates['allies_name'][1](modalTitle)

                                        if(modalTitle !== character['allies_name']) {
                                            updatedFields['allies_name'] = modalTitle
                                            setUpdatedFields(updatedFields)
                                            if(saveButtonDisabled) {
                                                setSaveButtonDisabled(false)
                                            }
                                        }
                                        else {
                                            delete updatedFields['allies_name']
                                            setUpdatedFields(updatedFields)
                                            if(objectSize(updatedFields) === 1) {
                                                setSaveButtonDisabled(true)
                                            }
                                        }
                                    }

                                    textStates[modalUpdateInput][1](modalText)

                                    if(modalText !== character[modalUpdateInput]) {
                                        updatedFields[modalUpdateInput] = modalText
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields[modalUpdateInput]
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }

                                    setModalVisible(false)
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}