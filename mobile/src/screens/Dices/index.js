import React, { useState } from 'react'
import { View, TouchableHighlight, Image, TouchableOpacity, ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { DefaultText, DefaultTextInput } from '../../components'

import { Feather, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'

export default function Dices({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('d20')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.headerButton}
                    onPress={navigation.openDrawer}
                    underlayColor="transparent"
                >
                    <Feather name={'menu'} size={36} color={'#353535'} />
                </TouchableHighlight>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/dices/custom-d20.png')} />
                    <DefaultText style={styles.title}>Dados</DefaultText>
                </View>
            </View>
            <ScrollView style={styles.content}>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    Icon={() => <Feather name={'chevron-down'} size={50} color={'#FFF'} />}
                    style={{ inputAndroid: styles.dicePicker, inputIOS: styles.dicePicker }}
                    onValueChange={() => {}}
                    placeholder={{ label: 'Selecione um dado...', value: null, color: '#C2C2C2' }}
                    items={[
                        { label: 'd4', value: 'd4' },
                        { label: 'd6', value: 'd6' },
                        { label: 'd8', value: 'd8' },
                        { label: 'd10', value: 'd10' },
                        { label: 'd12', value: 'd12' },
                        { label: 'd20', value: 'd20' },
                        { label: 'd100', value: 'd100' },
                    ]}
                />

                <View style={{ marginTop: '5%' }}>
                    <DefaultText style={styles.inputTitle}>Número de Dados</DefaultText>
                    <DefaultTextInput
                        style={[styles.dicePicker, { width: 125, textAlign: 'center' }]}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />
                </View>

                <View style={{ marginTop: '5%' }}>
                    <DefaultText style={styles.inputTitle}>Modificador</DefaultText>
                    <DefaultTextInput
                        style={[styles.dicePicker, { width: 125, textAlign: 'center' }]}
                        keyboardType="number-pad"
                        maxLength={2}
                        selectionColor="#4A55A1"
                    />
                </View>

                <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                    <TouchableOpacity style={styles.iconView}>
                        <Icon name="dice-d20" size={100} color="#FFF" />
                    </TouchableOpacity>
                    <DefaultText style={styles.buttonText}>Rolar</DefaultText>
                </View>
            </ScrollView>
        </View>
    )
}