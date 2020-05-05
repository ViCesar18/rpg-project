import React from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper'

import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.itemsScroll}>
                <DrawerContentScrollView contentContainerStyle={styles.itemsList}>
                    <DrawerItem
                        label="Home"
                        icon={({ color, size }) => <MaterialIcons
                            name="home"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {}}
                        labelStyle={styles.itemText}
                    />
                    <DrawerItem
                        label="Dados"
                        icon={({ color, size }) => <FontAwesome5
                            name="dice-d20"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {}}
                        labelStyle={styles.itemText}
                    />
                    <DrawerItem
                        label="Nova Ficha"
                        icon={({ color, size }) => <AntDesign
                            name="pluscircle"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {}}
                        labelStyle={styles.itemText}
                    />
                    <DrawerItem
                        label="Configurações"
                        icon={({ color, size }) => <MaterialIcons
                            name="settings"
                            color={color}
                            size={40}
                        />}
                        onPress={() => {}}
                        labelStyle={styles.itemText}
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