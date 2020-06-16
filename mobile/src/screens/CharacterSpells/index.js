import React, { useContext, useEffect, useState } from 'react'
import { View, TouchableHighlight, SectionList, ImageBackground } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'

import { CharacterContext } from '../../contexts/character'

import api from '../../services/api'

import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

function RenderSpells({ spell }) {
    const [isPrepared, setIsPrepared] = useState(Boolean(spell.is_prepared))

    if(spell.spell_level === 0) {
        return (
            <View style={[styles.spellsList, { padding: 10 }]}>
                <View style={styles.spellContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <DefaultText style={styles.spellText}>{spell.spell_name}</DefaultText>
                    </View>
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <Feather name={'minus'} size={28} color={'#F4E7CE'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.spellsList}>
            <View style={styles.spellContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        size={25}
                        checked={isPrepared}
                        checkedColor="#F4E7CE"
                        uncheckedColor="#F4E7CE"
                        containerStyle={styles.spellCheckbox}
                        onPress={() => {
                            setIsPrepared(!isPrepared)
                        }}
                    />
                    <DefaultText style={styles.spellText}>{spell.spell_name}</DefaultText>
                </View>
                <TouchableOpacity
                    onPress={() => {}}
                >
                    <Feather name={'minus'} size={28} color={'#F4E7CE'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function CharacterSpells({ navigation }) {
    const character = useContext(CharacterContext)

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

    async function loadSpells() {
        const spells = await api.get('sheet/1/index-spells')

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

    useEffect(() => {
        loadSpells()
    }, [])
    
    const spellsList = [
        {
            spellLevel: "0",
            slotsTotal: null,
            slotsExpended: null,
            data: lv0_spells,
        },
        {
            spellLevel: "1",
            slotsTotal: character.lv1_slots_total,
            slotsExpended: character.lv1_slots_expended,
            data: lv1_spells
        },
        {
            spellLevel: "2",
            slotsTotal: character.lv2_slots_total,
            slotsExpended: character.lv2_slots_expended,
            data: lv2_spells
        },
        {
            spellLevel: "3",
            slotsTotal: character.lv3_slots_total,
            slotsExpended: character.lv3_slots_expended,
            data: lv3_spells
        },
        {
            spellLevel: "4",
            slotsTotal: character.lv4_slots_total,
            slotsExpended: character.lv4_slots_expended,
            data: lv4_spells
        },
        {
            spellLevel: "5",
            slotsTotal: character.lv5_slots_total,
            slotsExpended: character.lv5_slots_expended,
            data: lv5_spells
        },
        {
            spellLevel: "6",
            slotsTotal: character.lv6_slots_total,
            slotsExpended: character.lv6_slots_expended,
            data: lv6_spells
        },
        {
            spellLevel: "7",
            slotsTotal: character.lv7_slots_total,
            slotsExpended: character.lv7_slots_expended,
            data: lv7_spells
        },
        {
            spellLevel: "8",
            slotsTotal: character.lv8_slots_total,
            slotsExpended: character.lv8_slots_expended,
            data: lv8_spells
        },
        {
            spellLevel: "9",
            slotsTotal: character.lv9_slots_total,
            slotsExpended: character.lv9_slots_expended,
            data: lv9_spells
        },
    ]

    return (
        <ImageBackground style={styles.container} source={require('../../assets/spellsBackground/spellsPaperBackground.png')}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#F4E7CE'} />
                </TouchableHighlight>

                <View style={styles.headerInputGroup}>
                    <DefaultTextInput
                        style={styles.spellcastingClassInput}
                        placeholder="Classe"
                        defaultValue={character.spellcasting_class}
                        multiline
                        numberOfLines={3}
                        autoCapitalize="characters"
                        placeholderTextColor="#88705F"
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                    <View style={styles.headerSpellcastingInformationGroup}>
                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={styles.headerSpellcastingInformationTitle}>Habilidade Chave</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                defaultValue={character.spellcasting_ability}
                                maxLength={16}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={[styles.headerSpellcastingInformationTitle, { lineHeight: 28 }]}>CD do TR</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                defaultValue={String(character.spell_save_dc)}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={styles.headerSpellcastingInformationTitle}>Bônus de Ataque</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                defaultValue={String(character.spell_attack_bonus)}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>
                </View>
            </View>

            <SectionList
                showsVerticalScrollIndicator={false}
                sections={spellsList}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { spellLevel, slotsTotal, slotsExpended } }) => {
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
                                        defaultValue={slotsTotal === null ? "0" : String(slotsTotal)}
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        selectionColor="#4A55A1"
                                    />
                                </View>
                                <View style={{ width: '42.5%' }}>
                                    <DefaultTextInput
                                        style={styles.spellsHeaderSlotsInput}
                                        defaultValue={slotsExpended === null ? "0" : String(slotsExpended)}
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        selectionColor="#4A55A1"
                                    />
                                </View>
                            </View>
                        </View>
                    )
                }}
                renderItem={({ item: spell }) => <RenderSpells spell={spell} />}
                renderSectionFooter={({ section: { spellLevel } }) => {
                    return (
                        <View style={styles.spellsContainerFooter}>
                            <TouchableOpacity
                                onPress={() => {}}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                        name="plus-circle"
                                        size={24}
                                        color="#F4E7CE"
                                    />
                                    <DefaultText style={styles.footerText}>
                                        {spellLevel === 0 ? "Adicionar Truque" : "Adicionar Magia"}
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