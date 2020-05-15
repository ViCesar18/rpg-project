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

const AppDrawer = createDrawerNavigator()
const Drawer = () => (
    <AppDrawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props}/>}
    >
        <AppDrawer.Screen name="Home" component={Home} />
        <AppDrawer.Screen name="Dices" component={Dices} />
        <AppDrawer.Screen name="NewSheetScreen" component={NewCharacterScreen} />
        <AppDrawer.Screen name="Configuration" component={ConfigScreen} />
        <AppDrawer.Screen name="Tab" component={BottomTabBar} />
    </AppDrawer.Navigator>
)

const AppStack = createStackNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Drawer" component={Drawer} options={{
                    headerShown: false
                }}/>
                <AppStack.Screen name="LogIn" component={LogIn} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}