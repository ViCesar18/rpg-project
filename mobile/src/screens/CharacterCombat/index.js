import React, { useContext, useState } from 'react'
import { View, Text, ScrollView, TouchableHighlight, Button, FlatList } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { objectSize } from '../../utils/additionalFunctions'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterCombat({ route, navigation }) {
    const characterBase = useContext(CharacterContext)
    const [character, setCharacter] = useState(characterBase)

    const [updatedFields, setUpdatedFields] = useState({ sheet_id: character.sheet_id })
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)

    const savingThrows = [
        {
            name: 'Força',
            isProState: useState(Boolean(character.str_st_is_proficient)),
            checkboxObj: 'str_st_is_proficient',
            inputObj: 'str_saving_throw'
        },
        {
            name: 'Destreza',
            isProState: useState(Boolean(character.dex_st_is_proficient)),
            checkboxObj: 'dex_st_is_proficient',
            inputObj: 'dex_saving_throw'
        },
        {
            name: 'Constituição',
            isProState: useState(Boolean(character.con_st_is_proficient)),
            checkboxObj: 'con_st_is_proficient',
            inputObj: 'con_saving_throw'
        },
        {
            name: 'Inteligência',
            isProState: useState(Boolean(character.int_st_is_proficient)),
            checkboxObj: 'int_st_is_proficient',
            inputObj: 'int_saving_throw'
        },
        {
            name: 'Sabedoria',
            isProState: useState(Boolean(character.wis_st_is_proficient)),
            checkboxObj: 'wis_st_is_proficient',
            inputObj: 'wis_saving_throw'
        },
        {
            name: 'Carisma',
            isProState: useState(Boolean(character.cha_st_is_proficient)),
            checkboxObj: 'cha_st_is_proficient',
            inputObj: 'cha_saving_throw'
        }
    ]

    const skills = [
        {
            name:'Acrobacia',
            attribute: '(Des)',
            isProState: useState(Boolean(character.acr_is_proficient)),
            checkboxObj: 'acr_is_proficient',
            inputObj: 'acrobatics'
        },
        {
            name:'Arcanismo',
            attribute: '(Int)',
            isProState: useState(Boolean(character.arc_is_proficient)),
            checkboxObj: 'arc_is_proficient',
            inputObj: 'arcana'
        },
        {
            name:'Atletismo',
            attribute: '(For)',
            isProState: useState(Boolean(character.ath_is_proficient)),
            checkboxObj: 'ath_is_proficient',
            inputObj: 'athletics'
        },
        {
            name:'Atuação',
            attribute: '(Car)',
            isProState: useState(Boolean(character.perf_is_proficient)),
            checkboxObj: 'perf_is_proficient',
            inputObj: 'performance'
        },
        {
            name:'Blefar',
            attribute: '(Car)',
            isProState: useState(Boolean(character.dec_is_proficient)),
            checkboxObj: 'dec_is_proficient',
            inputObj: 'deception'
        },
        {
            name:'Furtividade',
            attribute: '(Des)',
            isProState: useState(Boolean(character.ste_is_proficient)),
            checkboxObj: 'ste_is_proficient',
            inputObj: 'stealth'
        },
        {
            name:'História',
            attribute: '(Int)',
            isProState: useState(Boolean(character.his_is_proficient)),
            checkboxObj: 'his_is_proficient',
            inputObj: 'history'
        },
        {
            name:'Intimidação',
            attribute: '(Car)',
            isProState: useState(Boolean(character.itm_is_proficient)),
            checkboxObj: 'itm_is_proficient',
            inputObj: 'intimidation'
        },
        {
            name:'Intuição',
            attribute: '(Sab)',
            isProState: useState(Boolean(character.ins_is_proficient)),
            checkboxObj: 'ins_is_proficient',
            inputObj: 'insight'
        },
        {
            name:'Investigação',
            attribute: '(Int)',
            isProState: useState(Boolean(character.inv_is_proficient)),
            checkboxObj: 'inv_is_proficient',
            inputObj: 'investigation'
        },
        {
            name:'Lidar com Animais',
            attribute: '(Sab)',
            isProState: useState(Boolean(character.anh_is_proficient)),
            checkboxObj: 'anh_is_proficient',
            inputObj: 'animal_handling'
        },
        {
            name:'Medicina',
            attribute: '(Sab)',
            isProState: useState(Boolean(character.med_is_proficient)),
            checkboxObj: 'med_is_proficient',
            inputObj: 'medicine'
        },
        {
            name:'Natureza',
            attribute: '(Int)',
            isProState: useState(Boolean(character.nat_is_proficient)),
            checkboxObj: 'nat_is_proficient',
            inputObj: 'nature'
        },
        {
            name:'Percepção',
            attribute: '(Sab)',
            isProState: useState(Boolean(character.perc_is_proficient)),
            checkboxObj: 'perc_is_proficient',
            inputObj: 'perception'
        },
        {
            name:'Persuasão',
            attribute: '(Car)',
            isProState: useState(Boolean(character.acr_is_proficient)),
            checkboxObj: 'acr_is_proficient',
            inputObj: 'persuasion'
        },
        {
            name:'Prestidigitação',
            attribute: '(Des)',
            isProState: useState(Boolean(character.sle_is_proficient)),
            checkboxObj: 'sle_is_proficient',
            inputObj: 'sleight_of_hand'
        },
        {
            name:'Religião',
            attribute: '(Int)',
            isProState: useState(Boolean(character.rel_is_proficient)),
            checkboxObj: 'rel_is_proficient',
            inputObj: 'religion'
        },
        {
            name:'Sobrevivência',
            attribute: '(Sab)',
            isProState: useState(Boolean(character.sur_is_proficient)),
            checkboxObj: 'sur_is_proficient',
            inputObj: 'survival'
        }
    ]

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

            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={{ flexShrink: 1 }}>
                    <View style={styles.attributesContainer}>
                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Força</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.strength_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.strength_modifier) {
                                        updatedFields.strength_modifier = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.strength_modifier
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Destreza</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.dexterity_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.dexterity_modifier) {
                                        updatedFields.dexterity_modifier = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.dexterity_modifier
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Constituição</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.constitution_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.constitution_modifier) {
                                        updatedFields.constitution_modifier = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.constitution_modifier
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Inteligência</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.intelligence_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.intelligence_modifier) {
                                        updatedFields.intelligence_modifier = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.intelligence_modifier
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Sabedoria</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.wisdom_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.wisdom_modifier) {
                                        updatedFields.wisdom_modifier = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.wisdom_modifier
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Carisma</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.charisma_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.charisma_modifier) {
                                        updatedFields.charisma_modifier = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.charisma_modifier
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>
                    </View>

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '85%',
                            top: '5%',
                        }]}
                        defaultValue={String(character.strength)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.strength) {
                                updatedFields.strength = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.strength
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '85%',
                            top: '21%',
                        }]}
                        defaultValue={String(character.dexterity)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.dexterity) {
                                updatedFields.dexterity = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.dexterity
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '85%',
                            top: '37%',
                        }]}
                        defaultValue={String(character.constitution)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.constitution) {
                                updatedFields.constitution = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.constitution
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '85%',
                            top: '53%',
                        }]}
                        defaultValue={String(character.intelligence)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.intelligence) {
                                updatedFields.intelligence = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.intelligence
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '85%',
                            top: '69%',
                        }]}
                        defaultValue={String(character.wisdom)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.wisdom) {
                                updatedFields.wisdom = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.wisdom
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '85%',
                            top: '85%',
                        }]}
                        defaultValue={String(character.charisma)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text != character.charisma) {
                                updatedFields.charisma = Number(text)
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.charisma
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                </View>

                <View style={styles.darkInputsGroup}>
                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            defaultValue={character.inspiration}
                            maxLength={3}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.inspiration) {
                                    updatedFields.inspiration = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.inspiration
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                        <DefaultText style={styles.smallDarkInputText}>Inspiração</DefaultText>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            defaultValue={character.proficiency_bonus}
                            maxLength={2}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== character.proficiency_bonus) {
                                    updatedFields.proficiency_bonus = text
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.proficiency_bonus
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                        <DefaultText style={styles.smallDarkInputText}>Bônus de Proficiência</DefaultText>
                    </View>

                    <View style={[styles.darkInputContainer, { height: 150 }]}>
                        <DefaultText style={styles.darkInputContainerTitle}>Testes de Resistência</DefaultText>
                        <ScrollView nestedScrollEnabled>
                            {savingThrows.map((item) => (
                                <View key={item.name} style={styles.inputContainer}>
                                    <CheckBox
                                        size={25}
                                        checked={item.isProState[0]}
                                        checkedColor="#FFF"
                                        uncheckedColor="#FFF"
                                        containerStyle={styles.inputCheckbox}
                                        onPress={() => {
                                            item.isProState[1](!item.isProState[0])

                                            //A partir daqui item.isProState[0] está invertido pelo atraso na atualização do estado logo acima
                                            if(!item.isProState[0] != character[item.checkboxObj]) {
                                                updatedFields[item.checkboxObj] = !item.isProState[0]
                                                setUpdatedFields(updatedFields)
                                                if(saveButtonDisabled) {
                                                    setSaveButtonDisabled(false)
                                                }
                                            }
                                            else{
                                                delete updatedFields[item.checkboxObj]
                                                setUpdatedFields(updatedFields)
                                                if(objectSize(updatedFields) === 1) {
                                                    setSaveButtonDisabled(true)
                                                }
                                            }
                                        }}
                                    />
                                    <DefaultTextInput
                                        style={styles.mainInput}
                                        defaultValue={character[item.inputObj]}
                                        maxLength={3}
                                        selectionColor="#4A55A1"
                                        onEndEditing={({ nativeEvent: { text } }) => {
                                            if(text !== character[item.inputObj]) {
                                                updatedFields[item.inputObj] = text
                                                setUpdatedFields(updatedFields)
                                                if(saveButtonDisabled) {
                                                    setSaveButtonDisabled(false)
                                                }
                                            }
                                            else {
                                                delete updatedFields[item.inputObj]
                                                setUpdatedFields(updatedFields)
                                                if(objectSize(updatedFields) === 1){
                                                    setSaveButtonDisabled(true)
                                                }
                                            }
                                        }}
                                    />
                                    <DefaultText style={styles.inputText}>{item.name}</DefaultText>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={[styles.darkInputContainer, { height: 310 }]}>
                        <DefaultText style={styles.darkInputContainerTitle}>Perícias</DefaultText>
                        <ScrollView nestedScrollEnabled>
                            {skills.map((item) => (
                                <View key={item.name} style={styles.inputContainer}>
                                    <CheckBox
                                        size={25}
                                        checked={item.isProState[0]}
                                        checkedColor="#FFF"
                                        uncheckedColor="#FFF"
                                        containerStyle={styles.inputCheckbox}
                                        onPress={() => {
                                            item.isProState[1](!item.isProState[0])

                                            //A partir daqui item.isProState[0] está invertido pelo atraso na atualização do estado logo acima
                                            if(!item.isProState[0] != character[item.checkboxObj]) {
                                                updatedFields[item.checkboxObj] = !item.isProState[0]
                                                setUpdatedFields(updatedFields)
                                                if(saveButtonDisabled) {
                                                    setSaveButtonDisabled(false)
                                                }
                                            }
                                            else{
                                                delete updatedFields[item.checkboxObj]
                                                setUpdatedFields(updatedFields)
                                                if(objectSize(updatedFields) === 1) {
                                                    setSaveButtonDisabled(true)
                                                }
                                            }
                                        }}
                                    />
                                    <DefaultTextInput
                                        style={styles.mainInput}
                                        defaultValue={character[item.inputObj]}
                                        maxLength={3}
                                        selectionColor="#4A55A1"
                                        onEndEditing={({ nativeEvent: { text } }) => {
                                            if(text !== character[item.inputObj]) {
                                                updatedFields[item.inputObj] = text
                                                setUpdatedFields(updatedFields)
                                                if(saveButtonDisabled) {
                                                    setSaveButtonDisabled(false)
                                                }
                                            }
                                            else {
                                                delete updatedFields[item.inputObj]
                                                setUpdatedFields(updatedFields)
                                                if(objectSize(updatedFields) === 1){
                                                    setSaveButtonDisabled(true)
                                                }
                                            }
                                        }}
                                    />
                                    {item.name !== 'Lidar com Animais' && item.name !== 'Prestidigitação' && item.name !== 'Sobrevivência' ?
                                    <DefaultText style={styles.inputText}>
                                        {item.name} <Text style={styles.inputAdditionalText}>{item.attribute}</Text>
                                    </DefaultText> :
                                    <View>
                                        <DefaultText style={styles.inputText}>{item.name}</DefaultText>
                                        <DefaultText style={[styles.inputText, styles.inputAdditionalText]}>{item.attribute}</DefaultText>
                                    </View>
                                    }
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            defaultValue={String(character.passive_wisdom)}
                            keyboardType="number-pad"
                            maxLength={2}
                            selectionColor="#4A55A1"
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text != character.passive_wisdom) {
                                    updatedFields.passive_wisdom = Number(text)
                                    setUpdatedFields(updatedFields)
                                    if(saveButtonDisabled) {
                                        setSaveButtonDisabled(false)
                                    }
                                }
                                else {
                                    delete updatedFields.passive_wisdom
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButtonDisabled(true)
                                    }
                                }
                            }}
                        />
                        <DefaultText style={styles.smallDarkInputText}>Sabedoria Passiva (Percepção)</DefaultText>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}