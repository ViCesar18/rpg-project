import React, { useState } from 'react'
import { View, ScrollView, TouchableHighlight, Image, TouchableOpacity, Modal, Button } from 'react-native'
import { DefaultText, DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterGeneral({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalInputFunction, setModalInputCunftion] = useState({})

    const [LifeModalVisible, setLifeModalVisible] = useState(false)
    const [lifeModalIcon, setLifeModalIcon] = useState()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#FFF'} />
                </TouchableHighlight>

                <DefaultTextInput
                    style={styles.characterName}
                    placeholder="Nome do Personagem" 
                    defaultValue="Edran Galanodel"
                    maxLength={24}
                    selectionColor="#4A55A1"
                />

                <View style={styles.headerInputsGroup1}>
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Raça"
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Classe"
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Antecedente"
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                </View>
                    
                <View style={styles.headerInputsGroup2}>
                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="XP"
                        keyboardType="number-pad"
                        maxLength={10}
                        selectionColor="#4A55A1"
                    />
                    
                    <Image style={styles.headerImage} source={require('../../assets/avatar/elf.png')} />
                    <DefaultTextInput
                        style={styles.headerLevel}
                        placeholder="Nível"
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />

                    <DefaultTextInput
                        style={styles.headerInput}
                        placeholder="Tendência"
                        maxLength={16}
                        selectionColor="#4A55A1"
                    />
                </View>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.rectInputsGroup}>
                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            keyboardType="number-pad"
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.rectInputText}>Classe de Armadura</DefaultText>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            maxLength={2}
                            selectionColor="#4A55A1"
                        />
                        <DefaultText style={styles.rectInputText}>Iniciativa</DefaultText>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <DefaultTextInput
                            style={styles.rectInput}
                            maxLength={16}
                            selectionColor="#4A55A1"
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
                            locations={[1, 1]}
                            colors={['#EF1146', '#E3E8E8']}
                        >
                            <DefaultText style={styles.hpText}>10/10</DefaultText>
                        </LinearGradient>
                        
                        <TouchableOpacity onPress={() => {
                            setLifeModalVisible(true)
                            setLifeModalIcon(require('../../assets/hpIcons/hp.png'))
                        }}>
                            <Image style={styles.hpImage} source={require('../../assets/hpIcons/hp.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hp}>
                        <LinearGradient
                            style={styles.hpGradient}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0]}
                            colors={['#EDE214', '#E3E8E8']}
                        >
                            <DefaultText style={styles.hpText}>0/0</DefaultText>
                        </LinearGradient>
                        
                        <TouchableOpacity onPress={() => {
                            setLifeModalVisible(true)
                            setLifeModalIcon(require('../../assets/hpIcons/temporary-hp.png'))
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
                                checked={true}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                            />
                            <CheckBox
                                size={30}
                                checked={false}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                            />
                            <CheckBox
                                size={30}
                                checked={false}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                            />
                        </View>

                        <View style={styles.savesContainer}>
                            <DefaultText style={styles.savesText}>Falha</DefaultText>
                            <CheckBox
                                size={30}
                                checked={true}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                            />
                            <CheckBox
                                size={30}
                                checked={true}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                            />
                            <CheckBox
                                size={30}
                                checked={true}
                                checkedColor="#FFF"
                                uncheckedColor="#FFF"
                                containerStyle={styles.savesCheckBox}
                            />
                        </View>

                        <DefaultText style={styles.darkInputContainerTitle}>TESTE CONTRA A MORTE</DefaultText>
                    </View>

                    <View style={[styles.darkInputContainer, { width: '45%' }]}>
                        <View style={styles.totalLifeDicesContainer}>
                            <DefaultText style={styles.totalLifeDicesText}>Total de Dados</DefaultText>
                            <DefaultTextInput
                                style={styles.totalLifeDicesInput}
                                keyboardType="number-pad"
                                maxLength={2}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <DefaultTextInput
                            style={styles.hpDicesTextArea}
                            maxLength={16}
                            multiline={true}
                            selectionColor="#4A55A1"
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
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <View style={styles.equippedWeaponsColumnBonus}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Bônus</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={3}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <View style={styles.equippedWeaponsColumn}>
                            <DefaultText style={styles.equippedWeaponsColumnText}>Dano/Tipo</DefaultText>
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                            <DefaultTextInput
                                style={styles.equippedWeaponsColumnInput}
                                maxLength={20}
                                selectionColor="#4A55A1"
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.equippedWeaponsTextArea}
                        onPress={() => {
                            setModalVisible(true)
                            setModalTitle('Ataques e Magias')
                            setModalText('Eae')
                        }}
                    >
                        <DefaultText>Eae</DefaultText>
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
                        <View style={styles.modalConfirmButton}>
                            <Button
                                title="OK"
                                color="#4A55A1"
                                onPress={() => {}}
                            />
                        </View>
                    </ScrollView>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={LifeModalVisible}
                onRequestClose={() => setLifeModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TouchableHighlight
                            style={styles.modalCloseButton}
                            onPress={() => setLifeModalVisible(false)}
                        >
                            <Feather name="x" size={20} color="#C2C2C2" />
                        </TouchableHighlight>
                        
                        <DefaultText style={styles.modalTitle}>Altere seu HP:</DefaultText>
                        <View style={styles.lifeModalView}>
                            <Image style={styles.hpImage} source={lifeModalIcon} />
                            <DefaultTextInput
                                style={[styles.lifeModalInput, { marginLeft: 15 }]}
                                keyboardType="number-pad"
                                maxLength={4}
                                selectionColor="#4A55A1"
                            />
                            <DefaultText style={styles.lifeModalText}> / </DefaultText>
                            <DefaultTextInput
                                style={styles.lifeModalInput}
                                keyboardType="number-pad"
                                maxLength={4}
                                selectionColor="#4A55A1"
                            />
                        </View>
                        <View style={styles.modalConfirmButton}>
                            <Button
                                title="OK"
                                color="#4A55A1"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}