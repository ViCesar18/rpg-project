import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LogIn from './screens/LogIn'
import Home from './screens/Home'
import DrawerContent from './screens/DrawerContent'
import Dices from './screens/Dices'
import NewCharacterScreen from './screens/NewCharacter'
import ConfigScreen from './screens/ConfigScreen'
import CharacterGeneral from './screens/CharacterGeneral'
import CharacterCombat from './screens/CharacterCombat'
import CharacterBag from './screens/CharacterBag'
import CharacterBackground from './screens/CharacterBackground'
import CharacterSpells from './screens/CharacterSpells'

const AppTab = createBottomTabNavigator()
const Tab = () => (
    <AppTab.Navigator>
        <AppTab.Screen name="CharacterGeneral" component={CharacterGeneral}/>
        <AppTab.Screen name="CharacterCombat" component={CharacterCombat}/>
        <AppTab.Screen name="CharacterBag" component={CharacterBag}/>
        <AppTab.Screen name="CharacterBackground" component={CharacterBackground}/>
        <AppTab.Screen name="CharacterSpells" component={CharacterSpells}/>
    </AppTab.Navigator>
)

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
        <AppDrawer.Screen name="Tab" component={Tab} />
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