import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabBar from './BottomTabBar'

import LogIn from '../screens/LogIn'
import Home from '../screens/Home'
import DrawerContent from '../screens/DrawerContent'
import Dices from '../screens/Dices'
import NewCharacterScreen from '../screens/NewCharacter'
import ConfigScreen from '../screens/ConfigScreen'

const AppStack = createStackNavigator()
const MainStack = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Dices" component={Dices} />
        <AppStack.Screen name="NewSheetScreen" component={NewCharacterScreen} />
        <AppStack.Screen name="Configuration" component={ConfigScreen} />

        <AppStack.Screen name="LogIn" component={LogIn} />
        <AppStack.Screen name="Tab" component={BottomTabBar} />
    </AppStack.Navigator>
)

const AppDrawer = createDrawerNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <AppDrawer.Navigator
                initialRouteName="MainStack"
                drawerContent={(props) => <DrawerContent {...props}/>}
            >
                <AppDrawer.Screen name="MainStack" component={MainStack} />
            </AppDrawer.Navigator>
        </NavigationContainer>
    )
}