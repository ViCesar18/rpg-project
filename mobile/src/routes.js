import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const AppStack = createStackNavigator()
const AppDrawer = createDrawerNavigator()

import Home from './pages/Home'
import DrawerContent from './pages/DrawerContent'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppDrawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <DrawerContent />}
            >
                <AppDrawer.Screen name="Home" component={Home} />
                <AppDrawer.Screen name="Dados" component={Home} />
                <AppDrawer.Screen name="Nova Ficha" component={Home} />
                <AppDrawer.Screen name="Configurações" component={Home} />
                <AppDrawer.Screen name="Sair" component={Home} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    )
}