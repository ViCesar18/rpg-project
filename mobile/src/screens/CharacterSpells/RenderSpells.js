import React, { useState } from 'react'
import { View } from 'react-native'
import { DefaultTextInput } from '../../components'
import { CheckBox } from 'react-native-elements'

import api from '../../services/api'

import { objectSize } from '../../utils/additionalFunctions'

import { Feather } from '@expo/vector-icons'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function RenderSpells({ user_id, sheet_id, spell, spells, setSpells }) {
    const [isPrepared, setIsPrepared] = useState(Boolean(spell.is_prepared))

    const [updatedFields, setUpdatedFields] = useState({ spell_id: spell.spell_id })
    const [saveButton, setSaveButton] = useState(false)

    async function handleUpdateSpell() {
        try {
            await api.put(`sheet/${sheet_id}/update-spell`, updatedFields, {
                headers: {
                    Authorization: user_id
                }
            })

            setUpdatedFields({ spell_id: spell.spell_id })
            setSaveButton(false)
        }
        catch(err) {
            alert('Erro ao salvar magia, tente novamente.')
        }
    }

    async function handleDeleteSpell() {
        try {
            await api.delete(`sheet/${sheet_id}/delete-spell/${spell.spell_id}`, {
                headers: {
                    Authorization: user_id
                }
            })

            setSpells(spells.filter(item => item.spell_id !== spell.spell_id))
        }
        catch(err) {
            alert('Erro ao deletar magia, tente novamente.')
        }
    }

    if(spell.spell_level === 0) {
        return (
            <View style={styles.spellsList}>
                <View style={styles.spellContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <DefaultTextInput
                            style={styles.spellText}
                            defaultValue={spell.spell_name}
                            onEndEditing={({ nativeEvent: { text } }) => {
                                if(text !== spell.spell_name) {
                                    updatedFields.spell_name = text
                                    setUpdatedFields(updatedFields)
                                    if(!saveButton) {
                                        setSaveButton(true)
                                    }
                                }
                                else {
                                    delete updatedFields.spell_name
                                    setUpdatedFields(updatedFields)
                                    if(objectSize(updatedFields) === 1){
                                        setSaveButton(false)
                                    }
                                }
                            }}
                        />
                    </View>
                    {
                        saveButton ?
                        <TouchableOpacity
                            onPress={handleUpdateSpell}
                        >
                            <Feather name={'check'} size={28} color={'#F4E7CE'} />
                        </TouchableOpacity> :
                        <TouchableOpacity
                            onPress={handleDeleteSpell}
                        >
                            <Feather name={'minus'} size={28} color={'#F4E7CE'} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={styles.spellsList}>
            <View style={styles.spellContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        size={25}
                        checked={isPrepared}
                        checkedColor="#F4E7CE"
                        uncheckedColor="#F4E7CE"
                        containerStyle={styles.spellCheckbox}
                        onPress={() => {
                            setIsPrepared(!isPrepared)

                            //A partir daqui isPrepared está invertido pelo atraso na atualização do estado logo acima
                            if(!isPrepared != spell.is_prepared) {
                                updatedFields.is_prepared = !isPrepared
                                setUpdatedFields(updatedFields)
                                if(!saveButton) {
                                    setSaveButton(true)
                                }
                            }
                            else{
                                delete updatedFields.is_prepared
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1) {
                                    setSaveButton(false)
                                }
                            }
                        }}
                    />
                    <DefaultTextInput
                        style={styles.spellText}
                        defaultValue={spell.spell_name}
                        onEndEditing={({ nativeEvent: { text } }) => {
                            if(text !== spell.spell_name) {
                                updatedFields.spell_name = text
                                setUpdatedFields(updatedFields)
                                if(!saveButton) {
                                    setSaveButton(true)
                                }
                            }
                            else {
                                delete updatedFields.spell_name
                                setUpdatedFields(updatedFields)
                                if(objectSize(updatedFields) === 1){
                                    setSaveButton(false)
                                }
                            }
                        }}
                    />
                </View>
                {
                    saveButton ?
                    <TouchableOpacity
                        onPress={handleUpdateSpell}
                    >
                        <Feather name={'check'} size={28} color={'#F4E7CE'} />
                    </TouchableOpacity> :
                    <TouchableOpacity
                        onPress={handleDeleteSpell}
                    >
                        <Feather name={'minus'} size={28} color={'#F4E7CE'} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}