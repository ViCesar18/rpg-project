import React, { useContext, useState } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'

import { CharacterContext } from '../../contexts/character'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterCombat({ route, navigation }) {
    const character = useContext(CharacterContext)

    //Estados de proficiência em Testes de Resistência
    const [strIsPro, setStrIsPro] = useState(Boolean(character.str_st_is_proficient))
    const [dexIsPro, setDexIsPro] = useState(Boolean(character.dex_st_is_proficient))
    const [conIsPro, setConIsPro] = useState(Boolean(character.con_st_is_proficient))
    const [intIsPro, setIntIsPro] = useState(Boolean(character.int_st_is_proficient))
    const [wisIsPro, setWisIsPro] = useState(Boolean(character.wis_st_is_proficient))
    const [chaIsPro, setChaIsPro] = useState(Boolean(character.cha_st_is_proficient))

    //Estados de proficiência em Perícias
    const [acrIsPro, setAcrIsPro] = useState(Boolean(character.acr_is_proficient))
    const [anhIsPro, setAnhIsPro] = useState(Boolean(character.anh_is_proficient))
    const [arcIsPro, setArcIsPro] = useState(Boolean(character.arc_is_proficient))
    const [athIsPro, setAthIsPro] = useState(Boolean(character.ath_is_proficient))
    const [decIsPro, setDecIsPro] = useState(Boolean(character.dec_is_proficient))
    const [hisIsPro, setHisIsPro] = useState(Boolean(character.his_is_proficient))
    const [insIsPro, setInsIsPro] = useState(Boolean(character.ins_is_proficient))
    const [itmIsPro, setItmIsPro] = useState(Boolean(character.itm_is_proficient))
    const [invIsPro, setInvIsPro] = useState(Boolean(character.inv_is_proficient))
    const [medIsPro, setMedIsPro] = useState(Boolean(character.med_is_proficient))
    const [natIsPro, setNatIsPro] = useState(Boolean(character.nat_is_proficient))
    const [percIsPro, setPercIsPro] = useState(Boolean(character.perc_is_proficient))
    const [perfIsPro, setPerfIsPro] = useState(Boolean(character.perf_is_proficient))
    const [persIsPro, setPersIsPro] = useState(Boolean(character.pers_is_proficient))
    const [relIsPro, setRelIsPro] = useState(Boolean(character.rel_is_proficient))
    const [sleIsPro, setSleIsPro] = useState(Boolean(character.sle_is_proficient))
    const [steIsPro, setSteIsPro] = useState(Boolean(character.ste_is_proficient))
    const [surIsPro, setSurIsPro] = useState(Boolean(character.sur_is_proficient))

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

            <ScrollView contentContainerStyle={styles.content}>
                <View style={{ flexShrink: 1 }}>
                    <View style={styles.attributesContainer}>
                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Força</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.strength_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Destreza</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.dexterity_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Constituição</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.constitution_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Inteligência</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.intelligence_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Sabedoria</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.wisdom_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Carisma</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeModifierInput}
                                defaultValue={character.charisma_modifier}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '5%',
                        }]}
                        defaultValue={String(character.strength)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '21%',
                        }]}
                        defaultValue={String(character.dexterity)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '37%',
                        }]}
                        defaultValue={String(character.constitution)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '53%',
                        }]}
                        defaultValue={String(character.intelligence)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '69%',
                        }]}
                        defaultValue={String(character.wisdom)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '85%',
                        }]}
                        defaultValue={String(character.charisma)}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />
                </View>

                <View style={styles.darkInputsGroup}>
                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            defaultValue={character.inspiration}
                            maxLength={3}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.smallDarkInputText}>Inspiração</DefaultText>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            defaultValue={character.proficiency_bonus}
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.smallDarkInputText}>Bônus de Proficiência</DefaultText>
                    </View>

                    <View style={[styles.darkInputContainer, { height: 150 }]}>
                        <DefaultText style={styles.darkInputContainerTitle}>Testes de Resistência</DefaultText>
                        <ScrollView nestedScrollEnabled>
                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={strIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setStrIsPro(!strIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.str_saving_throw}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Força</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={dexIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setDexIsPro(!dexIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.dex_saving_throw}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Destreza</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={conIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setConIsPro(!conIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.con_saving_throw}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Constituição</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={intIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setIntIsPro(!intIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.int_saving_throw}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Inteligência</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={wisIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setWisIsPro(!wisIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.wis_saving_throw}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Sabedoria</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={chaIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setChaIsPro(!chaIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.cha_saving_throw}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Carisma</DefaultText>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={[styles.darkInputContainer, { height: 310 }]}>
                        <DefaultText style={styles.darkInputContainerTitle}>Perícias</DefaultText>
                        <ScrollView nestedScrollEnabled>
                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={acrIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setAcrIsPro(!acrIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.acrobatics}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Acrobacia <Text style={styles.inputAdditionalText}>(Des)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={arcIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setArcIsPro(!arcIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.arcana}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Arcanismo <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={athIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setAthIsPro(!athIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.athletics}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Atletismo <Text style={styles.inputAdditionalText}>(For)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={perfIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setPerfIsPro(!perfIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.performance}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Atuação <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={decIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setDecIsPro(!decIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.deception}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Blefar <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={steIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setSteIsPro(!steIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.stealth}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Furtividade <Text style={styles.inputAdditionalText}>(Des)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={hisIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setHisIsPro(!hisIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.history}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    História <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={itmIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setItmIsPro(!itmIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.intimidation}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Intimidação <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={insIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setInsIsPro(!insIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.insight}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Intuição <Text style={styles.inputAdditionalText}>(Sab)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={invIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setInvIsPro(!invIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.investigation}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Investigação <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={anhIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setAnhIsPro(!anhIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.animal_handling}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <DefaultText style={styles.inputText}>Lidar c/ Animais</DefaultText>
                                    <DefaultText style={[styles.inputText, styles.inputAdditionalText]}>(Sab)</DefaultText>
                                </View>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={medIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setMedIsPro(!medIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.medicine}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Medicina <Text style={styles.inputAdditionalText}>(Sab)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={natIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setNatIsPro(!natIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.nature}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Natureza <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={percIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setPercIsPro(!percIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.perception}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Percepção <Text style={styles.inputAdditionalText}>(Sab)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={persIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setPersIsPro(!persIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.persuasion}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Persuasão <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={sleIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setSleIsPro(!sleIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.sleight_of_hand}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <DefaultText style={styles.inputText}>Prestidigitação</DefaultText>
                                    <DefaultText style={[styles.inputText, styles.inputAdditionalText]}>(Des)</DefaultText>
                                </View>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={relIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setRelIsPro(!relIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.religion}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>
                                    Religião <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={surIsPro}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                    onPress={() => {
                                        setSurIsPro(!surIsPro)
                                    }}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    defaultValue={character.survival}
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <DefaultText style={styles.inputText}>Sobrevivência</DefaultText>
                                    <DefaultText style={[styles.inputText, styles.inputAdditionalText]}>(Sab)</DefaultText>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            defaultValue={String(character.passive_wisdom)}
                            keyboardType="number-pad"
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.smallDarkInputText}>Sabedoria Passiva (Percepção)</DefaultText>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}