import React from 'react'
import { View, ScrollView, TouchableHighlight } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterBackground({ navigation }) {
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

            <ScrollView style={styles.content}>
                <View style={styles.darkInputContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Idade"
                            keyboardType="number-pad"
                            maxLength={5}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Altura"
                            keyboardType="decimal-pad"
                            maxLength={5}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Peso"
                            keyboardType="decimal-pad"
                            maxLength={5}
                            selectionColor="#4A55A1"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Olhos"
                            maxLength={12}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Pele"
                            maxLength={12}
                            selectionColor="#4A55A1"
                        />

                        <DefaultTextInput 
                            style={styles.physicalCharacteristicsInput}
                            placeholder="Cabelos"
                            maxLength={12}
                            selectionColor="#4A55A1"
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <View style={{ marginRight: 10, width: '50%' }}>
                        <View style={styles.darkInputContainer}>
                            <View style={styles.traitsInputBox}>
                                <DefaultTextInput 
                                    style={styles.traitsInput}
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={255}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.traitsTitle}>TRAÇOS DE PERSONALIDADE</DefaultText>
                            </View>

                            <View style={styles.traitsInputBox}>
                                <DefaultTextInput 
                                    style={styles.traitsInput}
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={255}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.traitsTitle}>IDEAIS</DefaultText>
                            </View>

                            <View style={styles.traitsInputBox}>
                                <DefaultTextInput 
                                    style={styles.traitsInput}
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={255}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.traitsTitle}>LIGAÇÕES</DefaultText>
                            </View>

                            <View style={styles.traitsInputBox}>
                                <DefaultTextInput 
                                    style={styles.traitsInput}
                                    multiline
                                    textAlignVertical="top"
                                    maxLength={255}
                                    selectionColor="#4A55A1"
                                />
                                <DefaultText style={styles.traitsTitle}>DEFEITOS</DefaultText>
                            </View>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <DefaultTextInput 
                                style={[styles.darkInput, { height: 150}]}
                                multiline
                                textAlignVertical="top"
                                maxLength={255}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.darkInputTitle}>CARACTERÍSTICAS E HABILIDADES</DefaultText>
                        </View>
                        
                        <View style={styles.darkInputContainer}>
                            <DefaultTextInput 
                                style={[styles.darkInput, { height: 125 }]}
                                multiline
                                textAlignVertical="top"
                                maxLength={255}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.darkInputTitle}>IDIOMAS E OUTRAS PROFICIÊNCIAS</DefaultText>
                        </View>
                    </View>

                    <View style={{ width: '47%' }}>
                        <View style={styles.darkInputContainer}>
                            <DefaultTextInput 
                                style={[styles.darkInput, { height: 482 }]}
                                multiline
                                textAlignVertical="top"
                                maxLength={255}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.darkInputTitle}>HISTÓRIA DO PERSONAGEM</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <DefaultTextInput 
                                style={[styles.darkInput, { height: 72 }]}
                                multiline
                                textAlignVertical="top"
                                maxLength={255}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.darkInputTitle}>ALIADOS E ORGANIZAÇÕES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <DefaultTextInput 
                                style={[styles.darkInput, { height: 72 }]}
                                multiline
                                textAlignVertical="top"
                                maxLength={255}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.darkInputTitle}>OUTRAS CARACTERÍSTICAS E HABILIDADES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <DefaultTextInput 
                                style={[styles.darkInput, { height: 72 }]}
                                multiline
                                textAlignVertical="top"
                                maxLength={255}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.darkInputTitle}>TESOURO</DefaultText>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}