import React, { useState, useContext } from 'react'
import { View, ScrollView, TouchableHighlight, Modal, TouchableOpacity, Button } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { CharacterContext } from '../../contexts/character'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterBackground({ navigation }) {
    const character = useContext(CharacterContext)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalInputFunction, setModalInputCunftion] = useState({})

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
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Altura"
                            defaultValue={String(character.height)}
                            maxLength={6}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Peso"
                            defaultValue={String(character.weight)}
                            maxLength={6}
                            selectionColor="#4A55A1"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Olhos"
                            defaultValue={character.eyes}
                            maxLength={12}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Pele"
                            defaultValue={character.skin}
                            maxLength={20}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Cabelos"
                            defaultValue={character.hair}
                            maxLength={12}
                            selectionColor="#4A55A1"
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
                                    setModalText(character.personality_traits)
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {character.personality_traits}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>TRAÇOS DE PERSONALIDADE</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Ideais')
                                    setModalText(character.ideals)
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {character.ideals}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>IDEAIS</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Ligações')
                                    setModalText(character.bonds)
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {character.bonds}
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>LIGAÇÕES</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Defeitos')
                                    setModalText(character.flaws)
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    {character.flaws}
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
                                    setModalText(character.character_backstory)
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%', lineHeight: 22, fontSize: 16}}
                                    numberOfLines={20}
                                >
                                    {character.character_backstory}
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
                                    setModalText(character.features_traits)
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={7}
                                >
                                    {character.features_traits}
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
                                    setModalText(character.languages_and_proficiencies)
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={6}
                                >
                                    {character.languages_and_proficiencies}
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
                                    setModalTitle('Aliados e Organizações')
                                    setModalText(
                                        character.allies_name === null || character.allies_description === null ?
                                        null
                                        : `Nome: ${character.allies_name}\n\n${character.allies_description}`
                                    )
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%', fontSize: 16, textAlign: 'center', textAlignVertical: 'center' }}
                                >
                                    {character.allies_name}
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
                                    setModalText(character.additional_features)
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    {character.additional_features}
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
                                    setModalText(character.treasure)
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    {character.treasure}
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
                            <DefaultText style={styles.modalTitle}>{modalTitle}</DefaultText>
                        <DefaultTextInput
                            style={styles.modalInput}
                            defaultValue={modalText}
                            maxLength={2048}
                            multiline
                            textAlignVertical="top"
                            selectionColor="#4A55A1"
                        />
                        <View style={styles.modalConfirmButton}>
                            <Button
                                title="OK"
                                color="#4A55A1"
                                onPress={() => {}}
                            />
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}