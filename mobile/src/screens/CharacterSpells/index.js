import React, { useContext, useEffect, useState } from 'react'
import { View, TouchableHighlight, SectionList, ImageBackground, Button } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import RenderSpells from './RenderSpells'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { objectSize } from '../../utils/additionalFunctions'

import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CharacterSpells({ navigation }) {
    const characterBase = useContext(CharacterContext)
    const [character, setCharacter] = useState(characterBase)

    const [updatedFields, setUpdatedFields] = useState({ sheet_id: character.sheet_id })
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true)
    
    const [showNewSpell0, setShowNewSpell0] = useState(false)
    const [showNewSpell1, setShowNewSpell1] = useState(false)
    const [showNewSpell2, setShowNewSpell2] = useState(false)
    const [showNewSpell3, setShowNewSpell3] = useState(false)
    const [showNewSpell4, setShowNewSpell4] = useState(false)
    const [showNewSpell5, setShowNewSpell5] = useState(false)
    const [showNewSpell6, setShowNewSpell6] = useState(false)
    const [showNewSpell7, setShowNewSpell7] = useState(false)
    const [showNewSpell8, setShowNewSpell8] = useState(false)
    const [showNewSpell9, setShowNewSpell9] = useState(false)

    const [lv0_spells, setLv0_spells] = useState([])
    const [lv1_spells, setLv1_spells] = useState([])
    const [lv2_spells, setLv2_spells] = useState([])
    const [lv3_spells, setLv3_spells] = useState([])
    const [lv4_spells, setLv4_spells] = useState([])
    const [lv5_spells, setLv5_spells] = useState([])
    const [lv6_spells, setLv6_spells] = useState([])
    const [lv7_spells, setLv7_spells] = useState([])
    const [lv8_spells, setLv8_spells] = useState([])
    const [lv9_spells, setLv9_spells] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalUpdateInput, setModalUpdateInput] = useState('')

    const spellsList = [
        {
            spellLevel: "0",
            slotsTotal: null,
            slotsExpended: null,
            data: lv0_spells
        },
        {
            spellLevel: "1",
            slotsTotal: character.lv1_slots_total,
            slotsExpended: character.lv1_slots_expended,
            data: lv1_spells,
            updateInput: ['lv1_slots_total', 'lv1_slots_expended']
        },
        {
            spellLevel: "2",
            slotsTotal: character.lv2_slots_total,
            slotsExpended: character.lv2_slots_expended,
            data: lv2_spells,
            updateInput: ['lv2_slots_total', 'lv2_slots_expended']
        },
        {
            spellLevel: "3",
            slotsTotal: character.lv3_slots_total,
            slotsExpended: character.lv3_slots_expended,
            data: lv3_spells,
            updateInput: ['lv3_slots_total', 'lv3_slots_expended']
        },
        {
            spellLevel: "4",
            slotsTotal: character.lv4_slots_total,
            slotsExpended: character.lv4_slots_expended,
            data: lv4_spells,
            updateInput: ['lv4_slots_total', 'lv4_slots_expended']
        },
        {
            spellLevel: "5",
            slotsTotal: character.lv5_slots_total,
            slotsExpended: character.lv5_slots_expended,
            data: lv5_spells,
            updateInput: ['lv5_slots_total', 'lv5_slots_expended']
        },
        {
            spellLevel: "6",
            slotsTotal: character.lv6_slots_total,
            slotsExpended: character.lv6_slots_expended,
            data: lv6_spells,
            updateInput: ['lv6_slots_total', 'lv6_slots_expended']
        },
        {
            spellLevel: "7",
            slotsTotal: character.lv7_slots_total,
            slotsExpended: character.lv7_slots_expended,
            data: lv7_spells,
            updateInput: ['lv7_slots_total', 'lv7_slots_expended']
        },
        {
            spellLevel: "8",
            slotsTotal: character.lv8_slots_total,
            slotsExpended: character.lv8_slots_expended,
            data: lv8_spells,
            updateInput: ['lv8_slots_total', 'lv8_slots_expended']
        },
        {
            spellLevel: "9",
            slotsTotal: character.lv9_slots_total,
            slotsExpended: character.lv9_slots_expended,
            data: lv9_spells,
            updateInput: ['lv9_slots_total', 'lv9_slots_expended']
        },
    ]

    async function loadSpells() {
        const spells = await api.get(`sheet/${character.sheet_id}/index-spells`)

        setLv0_spells(filterSpells(spells.data, 0))
        setLv1_spells(filterSpells(spells.data, 1))
        setLv2_spells(filterSpells(spells.data, 2))
        setLv3_spells(filterSpells(spells.data, 3))
        setLv4_spells(filterSpells(spells.data, 4))
        setLv5_spells(filterSpells(spells.data, 5))
        setLv6_spells(filterSpells(spells.data, 6))
        setLv7_spells(filterSpells(spells.data, 7))
        setLv8_spells(filterSpells(spells.data, 8))
        setLv9_spells(filterSpells(spells.data, 9))
    }

    function filterSpells(spells, level) {
        return spells.filter(spell => spell.spell_level === level)
    }

    async function handleCreateSpell(newSpell) {
        try {
            const newSpellId = await api.post(`sheet/${character.sheet_id}/create-spell`, newSpell, {
                headers: {
                    Authorization: character.user_id
                }
            })

            newSpell.spell_id = newSpellId.data
            switch(newSpell.spell_level) {
                case 0:
                    lv0_spells.push(newSpell)
                    setLv0_spells(lv0_spells)
                    break;
                case 1:
                    lv1_spells.push(newSpell)
                    setLv1_spells(lv1_spells)
                    break;
                case 2:
                    lv2_spells.push(newSpell)
                    setLv2_spells(lv2_spells)
                    break;
                case 3:
                    lv3_spells.push(newSpell)
                    setLv3_spells(lv3_spells)
                    break;
                case 4:
                    lv4_spells.push(newSpell)
                    setLv4_spells(lv4_spells)
                    break;
                case 5:
                    lv5_spells.push(newSpell)
                    setLv5_spells(lv5_spells)
                    break;
                case 6:
                    lv6_spells.push(newSpell)
                    setLv6_spells(lv6_spells)
                    break;
                case 7:
                    lv7_spells.push(newSpell)
                    setLv7_spells(lv7_spells)
                    break;
                case 8:
                    lv8_spells.push(newSpell)
                    setLv8_spells(lv8_spells)
                    break;
                case 9:
                    lv9_spells.push(newSpell)
                    setLv9_spells(lv9_spells)
                    break;
            }
        }
        catch (err) {
            alert('Erro ao criar nova magia, tente novamente.')
        }
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

    useEffect(() => {
        loadSpells()
    }, [])

    return (
        <ImageBackground style={styles.container} source={require('../../assets/spellsBackground/spellsPaperBackground.png')}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                    <TouchableHighlight
                        style={styles.headerButton}
                        onPress={navigation.openDrawer}
                        underlayColor="transparent"
                    >
                        <Feather name={'menu'} size={36} color={'#F4E7CE'} />
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

                <View style={styles.headerInputGroup}>
                    <DefaultTextInput
                        style={styles.spellcastingClassInput}
                        placeholder="Classe"
                        placeholderTextColor="#88705F"
                        defaultValue={character.spellcasting_class}
                        multiline
                        numberOfLines={3}
                        autoCapitalize="characters"
                        maxLength={16}
                        selectionColor="#4A55A1"
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== character.spellcasting_class) {
                                updatedFields.spellcasting_class = text
                                setUpdatedFields(updatedFields)
                                if(saveButtonDisabled) {
                                    setSaveButtonDisabled(false)
                                }
                            }
                            else {
                                delete updatedFields.spellcasting_class
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButtonDisabled(true)
                                }
                            }
                        }}
                    />
                    <View style={styles.headerSpellcastingInformationGroup}>
                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={styles.headerSpellcastingInformationTitle}>Habilidade Chave</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                defaultValue={character.spellcasting_ability}
                                maxLength={16}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text !== character.spellcasting_ability) {
                                        updatedFields.spellcasting_ability = text
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.spellcasting_ability
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={[styles.headerSpellcastingInformationTitle, { lineHeight: 28 }]}>CD do TR</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                defaultValue={character.spell_save_dc === null ? null : String(character.spell_save_dc)}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text != character.spell_save_dc) {
                                        updatedFields.spell_save_dc = Number(text)
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.spell_save_dc
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={styles.headerSpellcastingInformationTitle}>Bônus de Ataque</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                defaultValue={character.spell_attack_bonus === null ? null : String(character.spell_attack_bonus)}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                                onEndEditing={({ nativeEvent: { text } }) => {
                                    if(text != character.spell_attack_bonus) {
                                        updatedFields.spell_attack_bonus = Number(text)
                                        setUpdatedFields(updatedFields)
                                        if(saveButtonDisabled) {
                                            setSaveButtonDisabled(false)
                                        }
                                    }
                                    else {
                                        delete updatedFields.spell_attack_bonus
                                        setUpdatedFields(updatedFields)
                                        if(objectSize(updatedFields) === 1){
                                            setSaveButtonDisabled(true)
                                        }
                                    }
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <SectionList
                showsVerticalScrollIndicator={false}
                sections={spellsList}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { spellLevel, slotsTotal, slotsExpended, updateInput } }) => {
                    if(spellLevel === "0"){
                        return (
                            <View style={[styles.spellsHeader, { flexDirection: 'row' }]}>
                                <View style={{ width: '15%' }}>
                                    <DefaultText style={styles.spellLevel}>{spellLevel}</DefaultText>
                                </View>
                                <View style={{ width: '85%' }}>
                                    <DefaultText style={styles.spellLevel}>Truques</DefaultText>
                                </View>
                            </View>
                        )
                    }
                    
                    return (
                        <View style={styles.spellsHeader}>
                            <View style={styles.spellsHeaderTitleContainer}>
                                <View style={{ width: '50%' }}>
                                    <DefaultText style={styles.spellsHeaderTitle}>Espaços Total</DefaultText>
                                </View>
                                
                                <View style={{ width: '50%' }}>
                                    <DefaultText style={styles.spellsHeaderTitle}>Espaços Usados</DefaultText>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '15%' }}>
                                    <DefaultText style={styles.spellLevel}>{spellLevel}</DefaultText>
                                </View>
                                <View style={{ width: '42.5%' }}>
                                    <DefaultTextInput
                                        style={styles.spellsHeaderSlotsInput}
                                        defaultValue={slotsTotal === null ? null : String(slotsTotal)}
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        selectionColor="#4A55A1"
                                        onEndEditing={({ nativeEvent: { text } }) => {
                                            if(text != slotsTotal) {
                                                updatedFields[updateInput[0]] = Number(text)
                                                setUpdatedFields(updatedFields)
                                                if(saveButtonDisabled) {
                                                    setSaveButtonDisabled(false)
                                                }
                                            }
                                            else {
                                                delete updatedFields[updateInput[0]]
                                                setUpdatedFields(updatedFields)
                                                if(objectSize(updatedFields) === 1){
                                                    setSaveButtonDisabled(true)
                                                }
                                            }
                                        }}
                                    />
                                </View>
                                <View style={{ width: '42.5%' }}>
                                    <DefaultTextInput
                                        style={styles.spellsHeaderSlotsInput}
                                        defaultValue={slotsExpended === null ? null : String(slotsExpended)}
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        selectionColor="#4A55A1"
                                        onEndEditing={({ nativeEvent: { text } }) => {
                                            if(text != slotsExpended) {
                                                updatedFields[updateInput[1]] = Number(text)
                                                setUpdatedFields(updatedFields)
                                                if(saveButtonDisabled) {
                                                    setSaveButtonDisabled(false)
                                                }
                                            }
                                            else {
                                                delete updatedFields[updateInput[1]]
                                                setUpdatedFields(updatedFields)
                                                if(objectSize(updatedFields) === 1){
                                                    setSaveButtonDisabled(true)
                                                }
                                            }
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    )
                }}
                renderItem={({ item: spell }) => {
                    var spells
                    var setSpells

                    switch(spell.spell_level){
                        case 0:
                            spells = lv0_spells
                            setSpells = setLv0_spells
                            break;
                        case 1:
                            spells = lv1_spells
                            setSpells = setLv1_spells
                            break;
                        case 2:
                            spells = lv2_spells
                            setSpells = setLv2_spells
                            break;
                        case 3:
                            spells = lv3_spells
                            setSpells = setLv3_spells
                            break;
                        case 4:
                            spells = lv4_spells
                            setSpells = setLv4_spells
                            break;
                        case 5:
                            spells = lv5_spells
                            setSpells = setLv5_spells
                            break;
                        case 6:
                            spells = lv6_spells
                            setSpells = setLv6_spells
                            break;
                        case 7:
                            spells = lv7_spells
                            setSpells = setLv7_spells
                            break;
                        case 8:
                            spells = lv8_spells
                            setSpells = setLv8_spells
                            break;
                        case 9:
                            spells = lv9_spells
                            setSpells = setLv9_spells
                            break;
                        default:
                            spells = null
                            setSpells = null
                            break;
                    }

                    return (
                        <RenderSpells
                            user_id={character.user_id}
                            sheet_id={character.sheet_id}
                            spell={spell}
                            spells={spells}
                            setSpells={setSpells}
                        />
                    )
                }}
                renderSectionFooter={({ section: { spellLevel } }) => {
                    return (
                        <View style={styles.spellsContainerFooter}>
                            {
                                spellLevel == 0 ?
                                    showNewSpell0 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell0}
                                        style={styles.spellText}
                                        placeholder="Nome do Truque"
                                        maxLength={16}
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell0(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 0,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell0(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 1 ?
                                    showNewSpell1 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell1}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell1(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 1,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell1(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 2 ?
                                    showNewSpell2 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell2}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell2(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 2,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell2(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 3 ?
                                    showNewSpell3 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell3}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell3(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 3,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell3(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 4 ?
                                    showNewSpell4 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell4}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell4(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 4,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell4(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 5 ?
                                    showNewSpell5 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell5}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell5(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 5,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell5(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 6 ?
                                    showNewSpell6 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell6}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell6(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 6,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell6(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 7 ?
                                    showNewSpell7 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell7}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell7(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 7,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell7(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 8 ?
                                    showNewSpell8 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell8}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell8(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 8,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell8(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            {
                                spellLevel == 9 ?
                                    showNewSpell9 ?
                                    <DefaultTextInput
                                        autoFocus={showNewSpell9}
                                        style={styles.spellText}
                                        maxLength={16}
                                        placeholder="Nome da Magia"
                                        onEndEditing={async ({ nativeEvent: { text } }) => {
                                            if(text === ''){
                                                setShowNewSpell9(false)
                                            }
                                            else {
                                                await handleCreateSpell({
                                                    spell_level: 9,
                                                    spell_name: text,
                                                    is_prepared: false,
                                                })
                                                setShowNewSpell9(false)
                                            }
                                        }}
                                    /> :
                                    null :
                                null
                            }
                            <TouchableOpacity
                                onPress={() => {
                                    switch(spellLevel) {
                                        case '0':
                                            setShowNewSpell0(true)
                                            break;
                                        case '1':
                                            setShowNewSpell1(true)
                                            break;
                                        case '2':
                                            setShowNewSpell2(true)
                                            break;
                                        case '3':
                                            setShowNewSpell3(true)
                                            break;
                                        case '4':
                                            setShowNewSpell4(true)
                                            break;
                                        case '5':
                                            setShowNewSpell5(true)
                                            break;
                                        case '6':
                                            setShowNewSpell6(true)
                                            break;
                                        case '7':
                                            setShowNewSpell7(true)
                                            break;
                                        case '8':
                                            setShowNewSpell8(true)
                                            break;
                                        case '9':
                                            setShowNewSpell9(true)
                                            break;
                                    }
                                }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name="plus-circle"
                                        size={24}
                                        color="#F4E7CE"
                                    />
                                    <DefaultText style={styles.footerText}>
                                        {spellLevel == 0 ? 'Adicionar Truque' : 'Adicionar Magia'}
                                    </DefaultText>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </ImageBackground>
    )
}