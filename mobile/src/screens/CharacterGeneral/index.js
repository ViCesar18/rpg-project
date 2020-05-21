import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableHighlight, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterGeneral({ navigation }) {
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

                <TextInput style={styles.characterName} placeholder="Nome do Personagem"  value="Edran Galanodel" />

                <View style={styles.headerInputsGroup1}>
                    <TextInput style={styles.headerInput} placeholder="Raça" />
                    <TextInput style={styles.headerInput} placeholder="Classe" />
                    <TextInput style={styles.headerInput} placeholder="Antecedente" />
                </View>
                    
                <View style={styles.headerInputsGroup2}>
                    <TextInput style={styles.headerInput} placeholder="XP" />
                    
                    <Image style={styles.headerImage} source={require('../../assets/avatar/elf.png')} />
                    <TextInput style={styles.headerLevel} placeholder="Nível" />

                    <TextInput style={styles.headerInput} placeholder="Tendência" />
                </View>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.rectInputsGroup}>
                    <View style={styles.rectInputContainer}>
                        <TextInput style={styles.rectInput} />
                        <Text style={styles.rectInputText}>Classe de Armadura</Text>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <TextInput style={styles.rectInput} />
                        <Text style={styles.rectInputText}>Iniciativa</Text>
                    </View>

                    <View style={styles.rectInputContainer}>
                        <TextInput style={styles.rectInput} />
                        <Text style={styles.rectInputText}>Deslocamento</Text>
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
                            <Text style={styles.hpText}>10/10</Text>
                        </LinearGradient>
                        
                        <Image style={styles.hpImage} source={require('../../assets/hpIcons/hp.png')} />
                    </View>
                    <View style={styles.hp}>
                        <LinearGradient
                            style={styles.hpGradient}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0]}
                            colors={['#EDE214', '#E3E8E8']}
                        >
                            <Text style={styles.hpText}>0/0</Text>
                        </LinearGradient>
                        
                        <Image style={styles.hpImage} source={require('../../assets/hpIcons/temporary-hp.png')} />
                    </View>
                </View>

                <View style={styles.darkInputsGroup}>
                    <View style={styles.darkInputContainer}>
                        <View style={styles.savesContainer}>
                            <Text style={styles.savesText}>Sucesso</Text>
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
                            <Text style={styles.savesText}>Falha</Text>
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

                        <Text style={styles.darkInputContainerTitle}>TESTE CONTRA A MORTE</Text>
                    </View>

                    <View style={styles.darkInputContainer}>
                        <View style={styles.totalLifeDicesContainer}>
                            <Text style={styles.totalLifeDicesText}>Total de Dados</Text>
                            <TextInput style={styles.totalLifeDicesInput} />
                        </View>
                        <TextInput style={styles.hpDicesTextArea} />
                        <Text style={styles.darkInputContainerTitle}>DADOS DE VIDA</Text>
                    </View>
                </View>

                <View style={styles.darkInputContainer}>
                    <View style={styles.equippedWeaponsContainer}>
                        <View style={styles.equippedWeaponsColumn}>
                            <Text style={styles.equippedWeaponsColumnText}>Nome</Text>
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                        </View>
                        <View style={styles.equippedWeaponsColumnBonus}>
                            <Text style={styles.equippedWeaponsColumnText}>Bônus</Text>
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                        </View>
                        <View style={styles.equippedWeaponsColumn}>
                            <Text style={styles.equippedWeaponsColumnText}>Dano/Tipo</Text>
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                            <TextInput style={styles.equippedWeaponsColumnInput} />
                        </View>
                    </View>
                    <TextInput style={styles.equippedWeaponsTextArea} />
                    <Text style={styles.darkInputContainerTitle}>ARMAS E EQUIPAMENTOS EQUIPADOS</Text>
                </View>
            </ScrollView>
        </View>
    )
}