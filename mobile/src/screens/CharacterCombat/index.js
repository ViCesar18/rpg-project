import React from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterCombat({ navigation }) {
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
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Destreza</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Constituição</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Inteligência</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Sabedoria</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <DefaultText style={styles.attributeTitle}>Carisma</DefaultText>
                            <DefaultTextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>

                    <DefaultTextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '5%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '21%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '37%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '53%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '69%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '85%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />
                </View>

                <View style={styles.darkInputsGroup}>
                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            keyboardType="number-pad"
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.smallDarkInputText}>Inspiração</DefaultText>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <DefaultTextInput
                            style={styles.smallDarkInput}
                            keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Força</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Destreza</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Constituição</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Inteligência</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.inputText}>Sabedoria</DefaultText>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <DefaultText style={styles.inputText}>Prestigitação</DefaultText>
                                    <DefaultText style={[styles.inputText, styles.inputAdditionalText]}>(Des)</DefaultText>
                                </View>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <DefaultTextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
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