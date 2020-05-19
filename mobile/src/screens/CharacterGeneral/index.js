import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableHighlight, Image } from 'react-native'
import { CheckBox } from 'native-base'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function CharacterGeneral({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#FFF'} />
                </TouchableHighlight>

                <TextInput style={styles.characterName} placeholder="Nome do Personagem"  value="Edran Galanodel" />

                <View style={styles.headerInputs1}>
                    <TextInput style={styles.headerInput} placeholder="Raça" />
                    <TextInput style={styles.headerInput} placeholder="Classe" />
                    <TextInput style={styles.headerInput} placeholder="Antecedente" />
                </View>
                    
                <View style={styles.headerInputs2}>
                    <TextInput style={styles.headerInput} placeholder="XP" />
                    
                    <Image style={styles.headerImage} source={require('../../assets/avatar/elf.png')} />
                    <TextInput style={styles.headerLevel} placeholder="Nível" />

                    <TextInput style={styles.headerInput} placeholder="Tendência" />
                </View>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.inputsContainer1}>
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

                <View style={styles.hitPointsContainer}>
                    <View style={styles.hitPoints}>
                        <Text style={styles.hitPointsText}>PV Total</Text>
                        <Feather name={'heart'} size={36} color={'red'} />
                    </View>
                    <View style={styles.temporaryHitPoints}>
                        <Text style={styles.temporaryHitPointsText}>PV Temporário</Text>
                        <Feather name={'heart'} size={36} color={'yellow'} />
                    </View>
                </View>

                <View style={styles.inputsContainer2}>
                    <View style={styles.deathSavesContainer}>
                        <View style={styles.savesContainer}>
                            <Text>Sucesso</Text>
                            <CheckBox />
                            <CheckBox />
                            <CheckBox />
                        </View>

                        <View style={styles.savesContainer}>
                            <Text>Falha</Text>
                            <CheckBox />
                            <CheckBox />
                            <CheckBox />
                        </View>

                        <Text>TESTE CONTRA A MORTE</Text>
                    </View>

                    <View styles={styles.hpDicesContainer}>
                        <View>
                            <Text>Total de Dados</Text>
                            <TextInput />
                        </View>
                        <TextInput />
                        <Text>DADOS DE VIDA</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <View>
                            <Text>Nome</Text>
                            <TextInput />
                            <TextInput />
                        </View>
                        <View>
                            <Text>Bônus</Text>
                            <TextInput />
                            <TextInput />
                        </View>
                        <View>
                            <Text>Dano/Tipo</Text>
                            <TextInput />
                            <TextInput />
                        </View>
                    </View>
                    <TextInput />
                </View>
            </ScrollView>
        </View>
    )
}