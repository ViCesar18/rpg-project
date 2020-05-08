import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './screens/Home'
import DrawerContent from './screens/DrawerContent'
import Dices from './screens/Dices'
import NewSheetScreen from './screens/NewSheet'
import ConfigScreen from './screens/ConfigScreen'

const AppDrawer = createDrawerNavigator()
const Drawer = () => (
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
)

const AppStack = createStackNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Drawer" component={Drawer} options={{
                    headerShown: false
                }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}