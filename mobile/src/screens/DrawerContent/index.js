import React, { useState } from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useRoute } from '@react-navigation/native'

import { MaterialIcons, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'

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

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemsScroll}>
                <DrawerContentScrollView contentContainerStyle={styles.itemsList} >
                    <DrawerItem
                        focused={homeIsFocused}
                        label="Home"
                        icon={({ color }) => (
                            <View style={styles.itemIconContent}>
                                <Icon
                                    name="home"
                                    color={color}
                                    size={40}
                                />
                            </View>
                        )}
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
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                    <DrawerItem
                        focused={dicesIsFocused}
                        label="Dados"
                        icon={({ color }) => (
                            <View style={styles.itemIconContent}>
                                <Icon
                                    name="dice-d20"
                                    color={color}
                                    size={40}
                                />
                            </View>
                        )}
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
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                    <DrawerItem
                        focused={newSheetIsFocused}
                        label="Nova Ficha"
                        icon={({ color }) => (
                            <View style={styles.itemIconContent}>
                                <Icon
                                    name="plus-circle"
                                    color={color}
                                    size={40}
                                />
                            </View>
                        )}
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
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                    <DrawerItem
                        focused={configIsFocused}
                        label="Configurações"
                        icon={({ color }) => (
                            <View style={styles.itemIconContent}>
                                <Icon
                                    name="config"
                                    color={color}
                                    size={40}
                                />
                            </View>
                        )}
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
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                </DrawerContentScrollView>
            </View>
            <DrawerItem
                label="Sair"
                icon={({ color, size }) => (
                    <View>
                        <MaterialIcons
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    </View>
                )}
                onPress={() => navigation.navigate('LogIn')}
                inactiveTintColor="#353535"
            />
        </View>
    )
}