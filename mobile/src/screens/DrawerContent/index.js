import React, { useState } from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'

import { MaterialIcons, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'

import styles from './styles'

export default function CustomDrawer({ navigation }) {
    const [homeIsFocused, setHomeIsFocused] = useState(true)
    const [dicesIsFocused, setDicesIsFocused] = useState(false)
    const [newSheetIsFocused, setNewSheetIsFocused] = useState(false)
    const [configIsFocused, setConfigIsFocused] = useState(false)

    const Icon = createIconSetFromIcoMoon(iconMoonConfig)

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemsScroll}>
                <DrawerContentScrollView contentContainerStyle={styles.itemsList}>
                    <DrawerItem
                        focused={homeIsFocused}
                        label="Home"
                        icon={({ color }) => <Icon
                            style={styles.itemIcon}
                            name="home"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {
                            if(!homeIsFocused){
                                setHomeIsFocused(true)
                                setDicesIsFocused(false)
                                setNewSheetIsFocused(false)
                                setConfigIsFocused(false)
                            }
                            navigation.navigate('Home')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                    />
                    <DrawerItem
                        focused={dicesIsFocused}
                        label="Dados"
                        icon={({ color }) => <Icon
                            style={styles.itemIcon}
                            name="dice-d20"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {
                            if(!dicesIsFocused){
                                setHomeIsFocused(false)
                                setDicesIsFocused(true)
                                setNewSheetIsFocused(false)
                                setConfigIsFocused(false)
                            }
                            navigation.navigate('Dices')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                    />
                    <DrawerItem
                        focused={newSheetIsFocused}
                        label="Nova Ficha"
                        icon={({ color }) => <Icon
                            style={styles.itemIcon}
                            name="plus-circle"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {
                            if(!newSheetIsFocused){
                                setHomeIsFocused(false)
                                setDicesIsFocused(false)
                                setNewSheetIsFocused(true)
                                setConfigIsFocused(false)
                            }
                            navigation.navigate('NewSheetScreen')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                    />
                    <DrawerItem
                        focused={configIsFocused}
                        label="Configurações"
                        icon={({ color }) => <Icon
                            style={styles.itemIcon}
                            name="config"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {
                            if(!configIsFocused){
                                setHomeIsFocused(false)
                                setDicesIsFocused(false)
                                setNewSheetIsFocused(false)
                                setConfigIsFocused(true)
                            }
                            navigation.navigate('Configuration')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                    />
                </DrawerContentScrollView>
            </View>
            
            <DrawerItem
                label="Sair"
                icon={({ color, size }) => <MaterialIcons
                    name="exit-to-app"
                    color={color}
                    size={size}
                />}
                onPress={() => {}}
            />
        </View>
    )
}