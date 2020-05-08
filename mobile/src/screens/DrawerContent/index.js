import React, { useState } from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'

import { MaterialIcons, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'

import styles from './styles'
import { useRoute } from '@react-navigation/native'

export default function CustomDrawer({ navigation }) {
    var homeIsFocused
    var dicesIsFocused
    var newSheetIsFocused
    var configIsFocused

    const route = useRoute()
    if(route.params === undefined) {
        homeIsFocused = true
        dicesIsFocused = false
        newSheetIsFocused = false
        configIsFocused = false
    }
    else {
        homeIsFocused = route.params.homeIsFocused
        dicesIsFocused = route.params.dicesIsFocused
        newSheetIsFocused = route.params.newSheetIsFocused
        configIsFocused = route.params.configIsFocused
    }

    const Icon = createIconSetFromIcoMoon(iconMoonConfig)

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemsScroll}>
                <DrawerContentScrollView contentContainerStyle={styles.itemsList} >
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
                            const parentNavigation = navigation.dangerouslyGetParent()
                            parentNavigation.setParams({
                                homeIsFocused: true,
                                dicesIsFocused: false,
                                newSheetIsFocused: false,
                                configIsFocused: false,
                            })

                            navigation.navigate('Home')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                        inactiveTintColor="#353535"
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
                            const parentNavigation = navigation.dangerouslyGetParent()
                            parentNavigation.setParams({
                                homeIsFocused: false,
                                dicesIsFocused: true,
                                newSheetIsFocused: false,
                                configIsFocused: false,
                            })

                            navigation.navigate('Dices')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                        inactiveTintColor="#353535"
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
                            const parentNavigation = navigation.dangerouslyGetParent()
                            parentNavigation.setParams({
                                homeIsFocused: false,
                                dicesIsFocused: false,
                                newSheetIsFocused: true,
                                configIsFocused: false,
                            })

                            navigation.navigate('NewSheetScreen')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                        inactiveTintColor="#353535"
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
                            const parentNavigation = navigation.dangerouslyGetParent()
                            parentNavigation.setParams({
                                homeIsFocused: false,
                                dicesIsFocused: false,
                                newSheetIsFocused: false,
                                configIsFocused: true,
                            })

                            navigation.navigate('Configuration')
                        }}
                        labelStyle={styles.itemText}
                        activeTintColor="#4A55A1"
                        inactiveTintColor="#353535"
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
                inactiveTintColor="#353535"
            />
        </View>
    )
}