import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E8E8',
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 15,
    },

    header: {
        marginBottom: 15
    },

    headerButton: {
        width: 36
    },

    content: {
        flexDirection: 'row',
    },

    attributesContainer: {
        justifyContent: 'space-between',
        backgroundColor: '#4A55A1',
        marginRight: 50,
        width: '35%',
        paddingVertical: 10,
        paddingLeft: 5,
        paddingRight: 10,
    },

    attribute: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 5,
        paddingLeft: 5,
        paddingRight: 15,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },

    attributeTitle: {
        color: '#4A55A1'
    },

    attributeInput: {
        backgroundColor: '#4A55A1',
        width: '100%',
        height: 75,
    },

    attributeModifierInput: {
        position: 'absolute',
        left: '110%',
        top: '28%',

        width: 50,
        height: 75,
        backgroundColor: '#4A55A1',
        borderRadius: 15,
        elevation: 10
    },

    darkInputsGroup: {

    },

    smallDarkInputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: '#353535',
        borderRadius: 8,
        width: 195,
        height: 40,
    },

    smallDarkInput: {
        backgroundColor: '#FFF',
        borderColor: '#353535',
        borderWidth: 3,
        borderRadius: 8,
        width: 50,
        height: 48,
        elevation: 10
    },

    smallDarkInputText: {
        flexShrink: 1,
        width: '100%',
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center'
    },

    darkInputContainer: {
        backgroundColor: '#353535',
        borderRadius: 8,
        padding: 0,
        elevation: 10
    },

    darkInputContainerTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },

    inputsGroup: {
        flexDirection: 'row'
    },

    inputsColumn: {

    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    inputCheckbox: {
        width: 20,
        padding: 0
    },

    mainInput: {
        backgroundColor: '#FFF',
        width: 20,
        height: 20
    },

    inputText: {
        //backgroundColor: 'red',
        color: '#FFF',
        fontSize: 10
    }
})