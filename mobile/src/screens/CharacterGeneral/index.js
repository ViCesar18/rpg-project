import React, { useState, useContext, useCallback } from 'react'
import { View, ScrollView, TouchableHighlight, Image, TouchableOpacity, Modal, Button } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { objectSize } from '../../utils/additionalFunctions'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterGeneral({ navigation }) {
    const characterBase = useContext(CharacterContext)
    const [character, setCharacter] = useState(characterBase)

    const [succes1, setSucces1] = useState(Boolean(character.death_saves_successes_1))
    const [succes2, setSucces2] = useState(Boolean(character.death_saves_successes_2))
    const [succes3, setSucces3] = useState(Boolean(character.death_saves_successes_3))
    const [failure1, setFailure1] = useState(Boolean(character.death_saves_failures_1))
    const [failure2, setFailure2] = useState(Boolean(character.death_saves_failures_1))
    const [failure3, setFailure3] = useState(Boolean(character.death_saves_failures_1))
    
    const textStates = {
        atk_description: useState(character.atk_description),
        hp_current: useState(character.hp_current),
        hp_max: useState(character.hp_max),
        temporary_hp_current: useState(character.temporary_hp_current),
        temporary_hp_max: useState(character.temporary_hp_max)
    }

    const [updatedFields, setUpdatedFields] = useState({ sheet_id: character.sheet_id })
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalUpdateInput, setModalUpdateInput] = useState('')

    const [lifeModalVisible, setLifeModalVisible] = useState(false)
    const [lifeModalIcon, setLifeModalIcon] = useState()
    const [lifeModalCurrentHp, setLifeModalCurrentHp] = useState('')
    const [lifeModalMaxHp, setLifeModalMaxHp] = useState('')
    const [lifeModalUpdateInput, setLifeModalUpdateInput] = useState([])
    const [lifeModalErrMessage, setLifeModalErrMessage] = useState(null)
    
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== character.race) {
                                updatedFields.race = text
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.race
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Classe"
                        defaultValue={character.class}
                        maxLength={16}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== character.class) {
                                updatedFields.class = text
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.class
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Antecedente"
                        defaultValue={character.background}
                        maxLength={16}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== character.background) {
                                updatedFields.background = text
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.background
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
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
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.xp_points) {
                                updatedFields.xp_points = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.xp_points
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                    
                    <Image style={styles.headerImage} source={characterImg} />
                    <DefaultTextInput
                        style={styles.headerLevel}
                        placeholder="Nível"
                        defaultValue={String(character.level)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.level) {
                                updatedFields.level = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.level
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />

                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Tendência"
                        defaultValue={character.alignment}
                        maxLength={16}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== character.alignment) {
                                updatedFields.alignment = text
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.alignment
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
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
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text != character.armor_class) {
                                    updatedFields.armor_class = Number(text)
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.armor_class
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                        <DefaultText style={styles.rectInputText}>Classe de Armadura</DefaultText>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            defaultValue={character.initiative}
                            maxLength={3}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.initiative) {
                                    updatedFields.initiative = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.initiative
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                        <DefaultText style={styles.rectInputText}>Iniciativa</DefaultText>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            defaultValue={character.speed}
                            maxLength={16}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.speed) {
                                    updatedFields.speed = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.speed
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
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
                            locations={[
                                textStates['hp_max'][0] === 0 ?
                                0 :
                                textStates['hp_current'][0] / textStates['hp_max'][0],
                                textStates['hp_max'][0] === 0 ?
                                0 :
                                textStates['hp_current'][0] / textStates['hp_max'][0]
                            ]}
                            colors={['#EF1146', 'transparent']}
                        >
                            <DefaultText style={styles.hpText}>{textStates['hp_current'][0]}/{textStates['hp_max'][0]}</DefaultText>
                        </LinearGradient>
                        
                        <TouchableOpacity onPress={() => {
                            setLifeModalVisible(true)
                            setLifeModalIcon(require('../../assets/hpIcons/hp.png'))
                            setLifeModalCurrentHp(String(textStates['hp_current'][0]))
                            setLifeModalMaxHp(String(textStates['hp_max'][0]))
                            setLifeModalUpdateInput(['hp_current', 'hp_max'])
                        }}>
                            <Image style={styles.hpImage} source={require('../../assets/hpIcons/hp.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hp}>
                        <LinearGradient
                            style={styles.hpGradient}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[
                                textStates['temporary_hp_max'][0] === null || textStates['temporary_hp_max'][0] === 0 ?
                                0 :
                                textStates['temporary_hp_current'][0] / textStates['temporary_hp_max'][0],
                                textStates['temporary_hp_max'][0] === null || textStates['temporary_hp_max'][0] === 0 ?
                                0 :
                                textStates['temporary_hp_current'][0] / textStates['temporary_hp_max'][0]
                            ]}
                            colors={['#EDE214', 'transparent']}
                        >
                            <DefaultText style={styles.hpText}>
                                {
                                    textStates['temporary_hp_current'][0] === null ?
                                    0 :
                                    textStates['temporary_hp_current'][0]
                                }/
                                {
                                    textStates['temporary_hp_max'][0] === null ?
                                    0 :
                                    textStates['temporary_hp_max'][0]
                                }
                            </DefaultText>
                        </LinearGradient>
                        
                        <TouchableOpacity onPress={() => {
                            setLifeModalVisible(true)
                            setLifeModalIcon(require('../../assets/hpIcons/temporary-hp.png'))
                            setLifeModalCurrentHp(textStates['temporary_hp_current'][0] === null ? '0' : String(textStates['temporary_hp_current'][0]))
                            setLifeModalMaxHp(textStates['temporary_hp_max'][0] === null ? '0' : String(textStates['temporary_hp_max'][0]))
                            setLifeModalUpdateInput(['temporary_hp_current', 'temporary_hp_max'])
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
                                    
                                    //A partir daqui succes1 está invertido pelo atraso na atualização do estado logo acima
                                    if(!succes1 != character.death_saves_successes_1) {
                                        updatedFields.death_saves_successes_1 = !succes1
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields.death_saves_successes_1
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }
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

                                    //A partir daqui succes2 está invertido pelo atraso na atualização do estado logo acima
                                    if(!succes2 != character.death_saves_successes_2) {
                                        updatedFields.death_saves_successes_2 = !succes2
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields.death_saves_successes_2
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }
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

                                    //A partir daqui succes3 está invertido pelo atraso na atualização do estado logo acima
                                    if(!succes3 != character.death_saves_successes_3) {
                                        updatedFields.death_saves_successes_3 = !succes3
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields.death_saves_successes_3
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }
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

                                    //A partir daqui failure1 está invertido pelo atraso na atualização do estado logo acima
                                    if(!failure1 != character.death_saves_failures_1) {
                                        updatedFields.death_saves_failures_1 = !failure1
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields.death_saves_failures_1
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }
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

                                    //A partir daqui failure2 está invertido pelo atraso na atualização do estado logo acima
                                    if(!failure2 != character.death_saves_failures_2) {
                                        updatedFields.death_saves_failures_2 = !failure2
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields.death_saves_failures_2
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }
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

                                    //A partir daqui failure3 está invertido pelo atraso na atualização do estado logo acima
                                    if(!failure3 != character.death_saves_failures_3) {
                                        updatedFields.death_saves_failures_3 = !failure3
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields.death_saves_failures_3
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }
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
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text != character.hp_dice_total) {
                                        updatedFields.hp_dice_total = Number(text)
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.hp_dice_total
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>
                        <DefaultTextInput
                            style={styles.hpDicesTextArea}
                            defaultValue={character.hp_dice}
                            maxLength={16}
                            multiline={true}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.hp_dice) {
                                    updatedFields.hp_dice = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.hp_dice
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
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
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_name_1) {
                                        updatedFields.atk_name_1 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_name_1
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_name_2}
                                maxLength={20}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_name_2) {
                                        updatedFields.atk_name_2 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_name_2
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_name_3}
                                maxLength={20}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_name_3) {
                                        updatedFields.atk_name_3 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_name_3
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.equippedWeaponsColumnBonus}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Bônus</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_bonus_1}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_bonus_1) {
                                        updatedFields.atk_bonus_1 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_bonus_1
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_bonus_2}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_bonus_2) {
                                        updatedFields.atk_bonus_2 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_bonus_2
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_bonus_3}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_bonus_3) {
                                        updatedFields.atk_bonus_3 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_bonus_3
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.equippedWeaponsColumn}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Dano/Tipo</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_damage_and_type_1}
                                maxLength={20}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_damage_and_type_1) {
                                        updatedFields.atk_damage_and_type_1 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_damage_and_type_1
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_damage_and_type_2}
                                maxLength={20}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_damage_and_type_2) {
                                        updatedFields.atk_damage_and_type_2 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_damage_and_type_2
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                defaultValue={character.atk_damage_and_type_3}
                                maxLength={20}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.atk_damage_and_type_3) {
                                        updatedFields.atk_damage_and_type_3 = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.atk_damage_and_type_3
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.equippedWeaponsTextArea}
                        onPress={() => {
                            setModalVisible(true)
                            setModalTitle('Ataques e Magias')
                            setModalText(textStates['atk_description'][0])
                            setModalUpdateInput('atk_description')
                        }}
                    >
                        <DefaultText
                            numberOfLines={7}
                            style={{ height: 140 }}
                        >{textStates['atk_description'][0]}</DefaultText>
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
                            underlayColor="transparent"
                            onPress={() => setModalVisible(false)}
                        >
                            <Feather name="x" size={20} color="#C2C2C2" />
                        </TouchableHighlight>
                        <DefaultText style={styles.modalTitle}>{modalTitle}</DefaultText>
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
                                    textStates['atk_description'][1](modalText)

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

            <Modal
                animationType="fade"
                transparent={true}
                visible={lifeModalVisible}
                onRequestClose={() => setLifeModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={styles.modalCloseButton}
                            underlayColor="transparent"
                            onPress={() => {
                                setLifeModalVisible(false)
                                setLifeModalErrMessage(null)
                            }}
                        >
                            <Feather name="x" size={20} color="#C2C2C2" />
                        </TouchableHighlight>
                        
                        <DefaultText style={styles.modalTitle}>Altere seu HP:</DefaultText>
                        <View style={styles.lifeModalView}>
                            <Image style={styles.hpImage} source={lifeModalIcon} />
                            <DefaultTextInput
                                style={[styles.lifeModalInput, { marginLeft: 15 }]}
                                value={lifeModalCurrentHp}
                                keyboardType="number-pad"
                                maxLength={4}
                                selectionColor="#4A55A1"
                                onChangeText={text => setLifeModalCurrentHp(text)}
                            />
                            <DefaultText style={styles.lifeModalText}> / </DefaultText>
                            <DefaultTextInput
                                style={styles.lifeModalInput}
                                value={lifeModalMaxHp}
                                keyboardType="number-pad"
                                maxLength={4}
                                selectionColor="#4A55A1"
                                onChangeText={text => setLifeModalMaxHp(text)}
                            />
                        </View>
                        {lifeModalErrMessage !== null ? <DefaultText style={styles.errMessage}>{lifeModalErrMessage}</DefaultText> : <View></View>}
                        <View style={styles.modalConfirmButton}>
                            <Button
                                title="OK"
                                color="#4A55A1"
                                onPress={() => {
                                    if(Number(lifeModalCurrentHp) > Number(lifeModalMaxHp)) {
                                        setLifeModalErrMessage('Você colocou mais HP que o máximo do seu personagem!')
                                        return
                                    }

                                    textStates[lifeModalUpdateInput[0]][1](lifeModalCurrentHp)
                                    textStates[lifeModalUpdateInput[1]][1](lifeModalMaxHp)

                                    if(lifeModalCurrentHp !== character[lifeModalUpdateInput[0]]) {
                                        updatedFields[lifeModalUpdateInput[0]] = Number(lifeModalCurrentHp)
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields[lifeModalUpdateInput[0]]
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }

                                    if(lifeModalMaxHp !== character[lifeModalUpdateInput[1]]) {
                                        updatedFields[lifeModalUpdateInput[1]] = Number(lifeModalMaxHp)
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else{
                                        delete updatedFields[lifeModalUpdateInput[1]]
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1) {
                                            setSaveButtonDisabled(true)
                                        }
                                    }

                                    setLifeModalVisible(false)
                                    setLifeModalErrMessage(null)
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}