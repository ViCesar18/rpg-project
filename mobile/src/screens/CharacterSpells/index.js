import React from 'react'
import { View, TouchableHighlight, SectionList, ImageBackground } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CharacterSpells({ navigation }) {
    const spellsList = [
        {
            spellLevel: "0",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "1",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "2",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "3",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "4",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "5",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "6",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "7",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "8",
            data: ["magia legal", "magia chata"]
        },
        {
            spellLevel: "9",
            data: ["magia legal", "magia chata"]
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
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                    <View style={styles.headerSpellcastingInformationGroup}>
                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={styles.headerSpellcastingInformationTitle}>Habilidade Chave</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                maxLength={16}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={[styles.headerSpellcastingInformationTitle, { lineHeight: 28 }]}>CD do TR</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.headerSpellcastingInformation}>
                            <DefaultText style={styles.headerSpellcastingInformationTitle}>Bônus de Ataque</DefaultText>
                            <DefaultTextInput
                                style={styles.headerSpellcastingInformationInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>
                </View>
            </View>

            <SectionList
                sections={spellsList}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { spellLevel } }) => {
                    if(spellLevel === "0"){
                        return (
                            <View style={styles.cantripsHeader}>
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
                        <View style={styles.spellsContainerHeader}>
                            <View>
                                <DefaultText style={styles.spellsContainerHeaderTitle}>Espaços Total</DefaultText>
                                <DefaultText style={styles.spellsContainerHeaderTitle}>Espaços Usados</DefaultText>
                            </View>
                            <View>
                                <DefaultText style={styles.spellLevel}>{spellLevel}</DefaultText>
                                <DefaultTextInput
                                    style={styles.spellsContainerHeaderTotalSlotsInput}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultTextInput
                                    style={styles.spellsContainerHeaderExpendedSlots}
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    selectionColor="#4A55A1"
                                />
                            </View>
                        </View>
                    )
                }}
                renderItem={({ item: spell }) => (
                    <View style={styles.spellsList}>
                        <View style={{ width: '100%', paddingBottom: 5, borderBottomWidth: 2, borderBottomColor: '#F4E7CE' }}>
                            <DefaultText style={styles.spellText}>{spell}</DefaultText>
                        </View>
                    </View>
                )}
                renderSectionFooter={({ section: { spellLevel } }) => {
                    if(spellLevel === "0"){
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
                                        <DefaultText style={styles.footerText}>Adicionar Truque</DefaultText>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }

                    return (
                        <View style={styles.spellsContainerFooter}>
                            <TouchableOpacity
                                sytle={styles.spellsContainerFotterButton}
                                onPress={() => {}}
                            >
                                <Icon
                                    name="plus-circle"
                                    size={20}
                                    color="black"
                                />
                                <DefaultText>Adicionar Magia</DefaultText>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </ImageBackground>
    )
}