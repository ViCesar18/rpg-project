import React, { useState } from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import { MaterialIcons, createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconMoonConfig from '../../selection.json'
const Icon = createIconSetFromIcoMoon(iconMoonConfig)

import styles from './styles'

export default function CustomDrawer({ navigation, state }) {
    var index
    if(state.routes[0].state !== undefined) {
        const length = state.routes[0].state.routes.length
        const routeName = state.routes[0].state.routes[length - 1].name

        switch(routeName) {
            case 'Home':
                index = 0
                break
            case 'Dices':
                index = 1
                break
            case 'NewSheetScreen':
                index = 2
                break
            case 'Configuration':
                index = 3
                break
            default:
                index = -1
                break
        }
    }
    else {
        index = 0
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemsScroll}>
                <DrawerContentScrollView contentContainerStyle={styles.itemsList} >
                    <DrawerItem
                        focused={index === 0 ? true : false}
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
                        focused={index === 1 ? true : false}
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
                        focused={index === 2 ? true : false}
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
                        focused={index === 3 ? true : false}
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
                labelStyle={{ fontFamily: 'Montserrat' }}
                inactiveTintColor="#353535"
            />
        </View>
    )
}