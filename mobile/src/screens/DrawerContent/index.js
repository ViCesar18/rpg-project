import React, { useState } from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useRoute } from '@react-navigation/native'

import { MaterialIcons, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'

export default function CustomDrawer({ state, navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemsScroll}>
                <DrawerContentScrollView contentContainerStyle={styles.itemsList} >
                    <DrawerItem
                        focused={state.index === 0 ? true : false}
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
                        onPress={() => navigation.navigate('Home')}
                        labelStyle={styles.itemText}
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                    <DrawerItem
                        focused={state.index === 1 ? true : false}
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
                        onPress={() => navigation.navigate('Dices')}
                        labelStyle={styles.itemText}
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                    <DrawerItem
                        focused={state.index === 2 ? true : false}
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
                        onPress={() => navigation.navigate('NewSheetScreen')}
                        labelStyle={styles.itemText}
                        activeTintColor="#272D54"
                        inactiveTintColor="#353535"
                    />
                    <DrawerItem
                        focused={state.index === 3 ? true : false}
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
                        onPress={() => navigation.navigate('Configuration')}
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