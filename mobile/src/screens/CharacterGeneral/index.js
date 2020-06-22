import React, { useState, useContext, useCallback } from 'react'
import { View, ScrollView, TouchableHighlight, Image, TouchableOpacity, Modal, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterGeneral({ navigation }) {
    const character = useContext(CharacterContext)

    const [updatedFields, setUpdatedFields] = useState({ sheet_id: character.sheet_id })
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalInputFunction, setModalInputCunftion] = useState({})

    const [LifeModalVisible, setLifeModalVisible] = useState(false)
    const [lifeModalIcon, setLifeModalIcon] = useState()
    const [lifeModalCurrentHpText, setLifeModalCurrentHpText] = useState('')
    const [lifeModalMaxHpText, setLifeModalMaxHpText] = useState('')

    const [succes1, setSucces1] = useState(Boolean(character.death_saves_successes_1))
    const [succes2, setSucces2] = useState(Boolean(character.death_saves_successes_2))
    const [succes3, setSucces3] = useState(Boolean(character.death_saves_successes_3))
    const [failure1, setFailure1] = useState(Boolean(character.death_saves_failures_1))
    const [failure2, setFailure2] = useState(Boolean(character.death_saves_failures_1))
    const [failure3, setFailure3] = useState(Boolean(character.death_saves_failures_1))
    
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
            break
        default:
            characterImg = require('../../assets/avatar/human-fighter.png')
            break
    }

    function objectSize(obj) {
        var size = 0
        for(key in obj){
            size++
        }

        return size
    }

    async function handleUpdateSheet() {
        try {
            await api.put('sheet/update-sheet', updatedFields, {
                headers: {
                    Authorization: character.user_id
                }
            })
        }
        catch(err) {
            alert('Erro ao salvar, tente novamente.')
        }

        setUpdatedFields({ sheet_id: character.sheet_id })
        setSaveButtonDisabled(true)
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
                        <Feather name={'menu'} size={36} color={'#FFF'} />
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

                <DefaultTextInput
                    style={styles.characterName}
                    placeholder="Nome do Personagem" 
                    defaultValue={character.character_name}
                    maxLength={24}
                    selectionColor="#4A55A1"
                    onEndEditing={({ nativeEvent: { text } }) => {
                        if(text !== character.character_name) {
                            updatedFields.character_name = text
                            setUpdatedFields(updatedFields)
                            if(saveButtonDisabled) {
                                setSaveButtonDisabled(false)
                            }
                        }
                        else {
                            delete updatedFields.character_name
                            setUpdatedFields(updatedFields)
                            if(objectSize(updatedFields) === 1){
                                setSaveButtonDisabled(true)
                            }
                        }
                    }}
                />

                <View style={styles.headerInputsGroup1}>
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Raça"
                        defaultValue={character.race}
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Classe"
                        defaultValue={character.class}
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Antecedente"
                        defaultValue={character.background}
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                </View>
                    
                <View style={styles.headerInputsGroup2}>
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="XP"
                        defaultValue={String(character.xp_points)}
                        keyboardType="number-pad"
                        maxLength={10}
                        selectionColor="#4A55A1"
                    />
                    
                    <Image style={styles.headerImage} source={characterImg} />
                    <DefaultTextInput
                        style={styles.headerLevel}
                        placeholder="Nível"
                        defaultValue={String(character.level)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Tendência"
                        defaultValue={character.alignment}
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.rectInputsGroup}>
                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            defaultValue={String(character.armor_class)}
                            keyboardType="number-pad"
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.rectInputText}>Classe de Armadura</DefaultText>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            defaultValue={String(character.initiative)}
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.rectInputText}>Iniciativa</DefaultText>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            defaultValue={character.speed}
                            maxLength={16}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.rectInputText}>Deslocamento</DefaultText>
                    </View>
                </View>

                <View style={styles.lifeContainer}>
                    <View style={styles.hp}>
                        <LinearGradient
                            style={styles.hpGradient}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[character.hp_current / character.hp_max, character.hp_current / character.hp_max]}
                            colors={['#EF1146', 'transparent']}
                        >
                            <DefaultText style={styles.hpText}>{character.hp_current}/{character.hp_max}</DefaultText>
                        </LinearGradient>
                        
                        <TouchableOpacity onPress={() => {
                            setLifeModalVisible(true)
                            setLifeModalIcon(require('../../assets/hpIcons/hp.png'))
                            setLifeModalCurrentHpText(String(character.hp_current))
                            setLifeModalMaxHpText(String(character.hp_max))
                        }}>
                            <Image style={styles.hpImage} source={require('../../assets/hpIcons/hp.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hp}>
                        <LinearGradient
                            style={styles.hpGradient}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[character.temporary_hp_max === null ? 0 : character.temporary_hp_current / character.temporary_hp_max,
                                character.temporary_hp_max === null ? 0 : character.temporary_hp_current / character.temporary_hp_max]}
                            colors={['#EDE214', 'transparent']}
                        >
                            <DefaultText style={styles.hpText}>
                                {character.temporary_hp_current === null ? 0 : character.temporary_hp_current}/{character.temporary_hp_max === null ? 0 : character.temporary_hp_max}
                            </DefaultText>
                        </LinearGradient>
                        
                        <TouchableOpacity onPress={() => {
                            setLifeModalVisible(true)
                            setLifeModalIcon(require('../../assets/hpIcons/temporary-hp.png'))
                            setLifeModalCurrentHpText(character.temporary_hp_current === null ? '0' : String(character.temporary_hp_current))
                            setLifeModalMaxHpText(character.temporary_hp_max === null ? '0' : String(character.temporary_hp_max))
                        }}>
                            <Image style={styles.hpImage} source={require('../../assets/hpIcons/temporary-hp.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.darkInputsGroup}>
                    <View style={[styles.darkInputContainer, { width: '53%' }]}>
                        <View style={styles.savesContainer}>
                            <DefaultText style={styles.savesText}>Sucesso</DefaultText>
                            <CheckBox
                                size={30}
                                checked={succes1}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                                onPress={() => {
                                    setSucces1(!succes1)
                                }}
                            />
                            <CheckBox
                                size={30}
                                checked={succes2}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                                onPress={() => {
                                    setSucces2(!succes2)
                                }}
                            />
                            <CheckBox
                                size={30}
                                checked={succes3}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                                onPress={() => {
                                    setSucces3(!succes3)
                                }}
                            />
                        </View>

                        <View style={styles.savesContainer}>
                            <DefaultText style={styles.savesText}>Falha</DefaultText>
                            <CheckBox
                                size={30}
                                checked={failure1}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                                onPress={() => {
                                    setFailure1(!failure1)
                                }}
                            />
                            <CheckBox
                                size={30}
                                checked={failure2}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                                onPress={() => {
                                    setFailure2(!failure2)
                                }}
                            />
                            <CheckBox
                                size={30}
                                checked={failure3}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                                onPress={() => {
                                    setFailure3(!failure3)
                                }}
                            />
                        </View>

                        <DefaultText style={styles.darkInputContainerTitle}>TESTE CONTRA A MORTE</DefaultText>
                    </View>

                    <View style={[styles.darkInputContainer, { width: '45%' }]}>
                        <View style={styles.totalLifeDicesContainer}>
                            <DefaultText style={styles.totalLifeDicesText}>Total de Dados</DefaultText>
                            <DefaultTextInput
                                style={styles.totalLifeDicesInput}
                                defaultValue={String(character.hp_dice_total)}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <DefaultTextInput
                            style={styles.hpDicesTextArea}
                            defaultValue={character.hp_dice}
                            maxLength={16}
                            multiline={true}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.darkInputContainerTitle}>DADOS DE VIDA</DefaultText>
                    </View>
                </View>

                <View style={styles.darkInputContainer}>
                    <View style={styles.equippedWeaponsContainer}>
                        <View style={styles.equippedWeaponsColumn}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Nome</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_name_1}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_name_2}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_name_3}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <View style={styles.equippedWeaponsColumnBonus}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Bônus</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_bonus_1}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_bonus_2}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_bonus_3}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <View style={styles.equippedWeaponsColumn}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Dano/Tipo</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_damage_and_type_1}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_damage_and_type_2}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_damage_and_type_3}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.equippedWeaponsTextArea}
                        onPress={() => {
                            setModalVisible(true)
                            setModalTitle('Ataques e Magias')
                            setModalText(character.atk_description)
                        }}
                    >
                        <DefaultText
                            numberOfLines={7}
                            style={{ height: 140 }}
                        >{character.atk_description}</DefaultText>
                    </TouchableOpacity>
                    <DefaultText style={styles.darkInputContainerTitle}>ATAQUES E MAGIAS</DefaultText>
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={LifeModalVisible}
                onRequestClose={() => setLifeModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={styles.modalCloseButton}
                            onPress={() => setLifeModalVisible(false)}
                        >
                            <Feather name="x" size={20} color="#C2C2C2" />
                        </TouchableHighlight>
                        
                        <DefaultText style={styles.modalTitle}>Altere seu HP:</DefaultText>
                        <View style={styles.lifeModalView}>
                            <Image style={styles.hpImage} source={lifeModalIcon} />
                            <DefaultTextInput
                                style={[styles.lifeModalInput, { marginLeft: 15 }]}
                                defaultValue={lifeModalCurrentHpText}
                                keyboardType="number-pad"
                                maxLength={4}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.lifeModalText}> / </DefaultText>
                            <DefaultTextInput
                                style={styles.lifeModalInput}
                                defaultValue={lifeModalMaxHpText}
                                keyboardType="number-pad"
                                maxLength={4}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <View style={styles.modalConfirmButton}>
                            <Button
                                title="OK"
                                color="#4A55A1"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}