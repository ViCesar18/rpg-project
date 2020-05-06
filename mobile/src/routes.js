import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const AppStack = createStackNavigator()
const AppDrawer = createDrawerNavigator()

import Home from './pages/Home'
import DrawerContent from './pages/DrawerContent'
import Dices from './pages/Dices'
import NewSheetScreen from './pages/NewSheet'
import ConfigScreen from './pages/ConfigScreen'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppDrawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <DrawerContent {...props}/>}
            >
                <AppDrawer.Screen name="Home" component={Home} />
                <AppDrawer.Screen name="Dices" component={Dices} />
                <AppDrawer.Screen name="NewSheetScreen" component={NewSheetScreen} />
                <AppDrawer.Screen name="Configuration" component={ConfigScreen} />
                <AppDrawer.Screen name="LogOut" component={Home} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    )
}