import React, { useState } from 'react'
import { View, ScrollView, TouchableHighlight, Modal, TouchableOpacity } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterBackground({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalInputFunction, setModalInputCunftion] = useState({})

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
                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Traços de Personalidade')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    Eae
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>TRAÇOS DE PERSONALIDADE</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Ideais')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    Eae
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>IDEAIS</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Ligações')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    Eae
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>LIGAÇÕES</DefaultText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.traitsModalButton}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Defeitos')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={styles.traitsText}
                                    numberOfLines={5}
                                >
                                    Eae
                                </DefaultText>
                                <DefaultText style={styles.traitsTitle}>DEFEITOS</DefaultText>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 150 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Características e Habilidades')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={7}
                                >
                                    Eae
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>CARACTERÍSTICAS E HABILIDADES</DefaultText>
                        </View>
                        
                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 125 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Idiomas e Outras Proficiências')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={6}
                                >
                                    Eae
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>IDIOMAS E OUTRAS PROFICIÊNCIAS</DefaultText>
                        </View>
                    </View>

                    <View style={{ width: '47%' }}>
                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 504 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('História do Personagem')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%', lineHeight: 22, fontSize: 16}}
                                    numberOfLines={20}
                                >
                                    Eae
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>HISTÓRIA DO PERSONAGEM</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 72 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Aliados e Organizações')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    Eae
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>ALIADOS E ORGANIZAÇÕES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 72 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Outras Características e Habilidades')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    Eae
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>OUTRAS CARACTERÍSTICAS E HABILIDADES</DefaultText>
                        </View>

                        <View style={styles.darkInputContainer}>
                            <TouchableOpacity
                                style={[styles.darkModalButton, { height: 72 }]}
                                onPress={() => {
                                    setModalVisible(true)
                                    setModalTitle('Tesouro')
                                    setModalText('Eae')
                                }}
                            >
                                <DefaultText
                                    style={{ height: '100%' }}
                                    numberOfLines={3}
                                >
                                    Eae
                                </DefaultText>
                            </TouchableOpacity>
                            <DefaultText style={styles.darkInputTitle}>TESOURO</DefaultText>
                        </View>
                    </View>
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
                            maxLength={255}
                            multiline
                            textAlignVertical="top"
                            selectionColor="#4A55A1"
                        />
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}