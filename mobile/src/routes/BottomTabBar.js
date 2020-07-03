import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CharacterContext } from '../contexts/character'

import CharacterGeneral from '../screens/CharacterGeneral'
import CharacterCombat from '../screens/CharacterCombat'
import CharacterBag from '../screens/CharacterBag'
import CharacterBackground from '../screens/CharacterBackground'
import CharacterSpells from '../screens/CharacterSpells'

const AppTab = createBottomTabNavigator()
function BottomTabBar({ route }) {
    var tabOpacity1 = 1
    var tabOpacity2 = 0.5
    var tabOpacity3 = 0.5
    var tabOpacity4 = 0.5
    var tabOpacity5 = 0.5

    if(route.state !== undefined){
        if(route.state.index === 0){
            tabOpacity1 = 1
            tabOpacity2 = 0.5
            tabOpacity3 = 0.5
            tabOpacity4 = 0.5
            tabOpacity5 = 0.5
        }
        else if(route.state.index === 1){
            tabOpacity1 = 0.5
            tabOpacity2 = 1
            tabOpacity3 = 0.5
            tabOpacity4 = 0.5
            tabOpacity5 = 0.5
        }
        else if(route.state.index === 2){
            tabOpacity1 = 0.5
            tabOpacity2 = 0.5
            tabOpacity3 = 1
            tabOpacity4 = 0.5
            tabOpacity5 = 0.5
        }
        else if(route.state.index === 3){
            tabOpacity1 = 0.5
            tabOpacity2 = 0.5
            tabOpacity3 = 0.5
            tabOpacity4 = 1
            tabOpacity5 = 0.5
        }
        else if(route.state.index === 4){
            tabOpacity1 = 0.5
            tabOpacity2 = 0.5
            tabOpacity3 = 0.5
            tabOpacity4 = 0.5
            tabOpacity5 = 1
        }
    }

    const { character } = route.params

    return (
        <CharacterContext.Provider value={character}>
            <AppTab.Navigator
                initialRouteName="CharacterGeneral"
                tabBarOptions={{
                    showLabel: false,
                    tabStyle: {
                        backgroundColor: '#272D54',
                    },
                    style: {
                        height: 65
                    }
                }}
            >
                <AppTab.Screen
                    name="CharacterGeneral"
                    component={CharacterGeneral}
                    options={{
                        tabBarIcon: () => <Image
                            style={{
                                height: 50,
                                width: 50,
                                opacity: tabOpacity1
                            }}
                            source={require('../assets/bottomTabIcons/character-general.png')}
                        />
                    }}
                />
                <AppTab.Screen
                    name="CharacterCombat"
                    component={CharacterCombat}
                    options={{
                        tabBarIcon: () => <Image
                                style={{
                                height: 50,
                                width: 50,
                                opacity: tabOpacity2
                            }}
                            source={require('../assets/bottomTabIcons/character-combat.png')}
                        />
                    }}
                />
                <AppTab.Screen
                    name="CharacterBag"
                    component={CharacterBag}
                    options={{
                        tabBarIcon: () => <Image
                            style={{
                                height: 50,
                                width: 50,
                                opacity: tabOpacity3
                            }}
                            source={require('../assets/bottomTabIcons/character-bag.png')}
                        />
                    }}
                />
                <AppTab.Screen
                    name="CharacterBackground"
                    component={CharacterBackground}
                    options={{
                        tabBarIcon: () => <Image
                            style={{
                                height: 50,
                                width: 50,
                                opacity: tabOpacity4
                            }}
                            source={require('../assets/bottomTabIcons/character-background.png')}
                        />
                    }}
                />
                <AppTab.Screen
                    name="CharacterSpells"
                    component={CharacterSpells}
                    options={{
                        tabBarIcon: () => <Image
                            style={{
                                height: 50,
                                width: 50,
                                opacity: tabOpacity5
                            }}
                            source={require('../assets/bottomTabIcons/character-spells.png')}
                        />
                    }}
                />
            </AppTab.Navigator>
        </CharacterContext.Provider>
    )
}

export default BottomTabBar