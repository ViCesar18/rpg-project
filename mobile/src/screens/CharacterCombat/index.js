import React from 'react'
import { View, Text, ScrollView, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native'
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
                            <Text style={styles.attributeTitle}>Força</Text>
                            <TextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <Text style={styles.attributeTitle}>Destreza</Text>
                            <TextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <Text style={styles.attributeTitle}>Constituição</Text>
                            <TextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <Text style={styles.attributeTitle}>Inteligência</Text>
                            <TextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <Text style={styles.attributeTitle}>Sabedoria</Text>
                            <TextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>

                        <View style={styles.attribute}>
                            <Text style={styles.attributeTitle}>Carisma</Text>
                            <TextInput
                                style={styles.attributeInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>

                    <TextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '5%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <TextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '21%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <TextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '37%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <TextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '53%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <TextInput
                        style={[styles.attributeModifierInput, {
                            position: 'absolute',
                            left: '65%',
                            top: '69%',
                        }]}
                        keyboardType="number-pad"
                        maxLength={3}
                        selectionColor="#4A55A1"
                    />

                    <TextInput
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
                        <TextInput style={styles.smallDarkInput} />
                        <Text style={styles.smallDarkInputText}>Inspiração</Text>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <TextInput style={styles.smallDarkInput} />
                        <Text style={styles.smallDarkInputText}>Bônus de Proficiência</Text>
                    </View>

                    <View style={[styles.darkInputContainer, { height: 150 }]}>
                        <Text style={styles.darkInputContainerTitle}>Testes de Resistência</Text>
                        <ScrollView nestedScrollEnabled>
                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>Força</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>Destreza</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>Constituição</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>Inteligência</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>Sabedoria</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>Carisma</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={[styles.darkInputContainer, { height: 310 }]}>
                        <Text style={styles.darkInputContainerTitle}>Perícias</Text>
                        <ScrollView nestedScrollEnabled>
                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Acrobacia <Text style={styles.inputAdditionalText}>(Des)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Arcanismo <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Atletismo <Text style={styles.inputAdditionalText}>(For)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Atuação <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Blefar <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Furtividade <Text style={styles.inputAdditionalText}>(Des)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    História <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Intimidação <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Intuição <Text style={styles.inputAdditionalText}>(Sab)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Investigação <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <Text style={styles.inputText}>Lidar c/ Animais</Text>
                                    <Text style={[styles.inputText, { fontStyle: 'italic' }]}>(Sab)</Text>
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
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Medicina <Text style={styles.inputAdditionalText}>(Sab)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Natureza <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Percepção <Text style={styles.inputAdditionalText}>(Sab)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Persuasão <Text style={styles.inputAdditionalText}>(Car)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <Text style={styles.inputText}>Prestigitação</Text>
                                    <Text style={[styles.inputText, { fontStyle: 'italic' }]}>(Des)</Text>
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
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <Text style={styles.inputText}>
                                    Religião <Text style={styles.inputAdditionalText}>(Int)</Text>
                                </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <CheckBox
                                    size={25}
                                    checked={true}
                                    checkedColor="#FFF"
                                    uncheckedColor="#FFF"
                                    containerStyle={styles.inputCheckbox}
                                />
                                <TextInput
                                    style={styles.mainInput}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    selectionColor="#4A55A1"
                                />
                                <View>
                                    <Text style={styles.inputText}>Sobrevivência</Text>
                                    <Text style={[styles.inputText, { fontStyle: 'italic' }]}>(Sab)</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.smallDarkInputContainer}>
                        <TextInput style={styles.smallDarkInput} />
                        <Text style={styles.smallDarkInputText}>Sabedoria Passiva (Percepção)</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}