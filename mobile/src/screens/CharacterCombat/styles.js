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

    saveButton: {
        width: 100
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    attributesContainer: {
        backgroundColor: '#4A55A1',
        width: '100%',
        height: 635,
        paddingVertical: 10,
        paddingLeft: 5,
        paddingRight: 10,
    },

    attribute: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 98,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 15,
        marginBottom: 5,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },

    attributeTitle: {
        fontFamily: 'Montserrat-Bold',
        color: '#4A55A1',
        fontSize: 12
    },

    attributeModifierInput: {
        height: '70%',
        backgroundColor: '#4A55A1',
        width: '100%',
        color: '#FFF',
        fontSize: 32,
        textAlign: 'center'
    },

    attributeInput: {
        width: 50,
        height: 75,
        backgroundColor: '#4A55A1',
        borderRadius: 15,
        elevation: 10,
        color: '#FFF',
        fontSize: 28,
        textAlign: 'center'
    },

    darkInputsGroup: {
        width: '50%'
    },

    smallDarkInputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: '#353535',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },

    smallDarkInput: {
        backgroundColor: '#FFF',
        borderColor: '#353535',
        borderWidth: 3,
        borderRadius: 8,
        width: 50,
        height: 48,
        elevation: 10,
        textAlign: 'center',
        fontSize: 20
    },

    smallDarkInputText: {
        color: '#FFF',
        fontSize: 11,
        textAlign: 'center'
    },

    darkInputContainer: {
        backgroundColor: '#353535',
        borderRadius: 8,
        paddingRight: 10,
        paddingVertical: 5,
        elevation: 10,
        marginBottom: 10,
    },

    darkInputContainerTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 5,
        marginLeft: 10
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    inputCheckbox: {
        width: 24,
        padding: 0
    },

    mainInput: {
        backgroundColor: '#FFF',
        width: '15%',
        height: 25,
        textAlign: 'center'
    },

    inputText: {
        color: '#FFF',
        fontSize: 11,
        paddingLeft: 5,
    },

    inputAdditionalText: {
        fontFamily: 'Montserrat-ExtraLight-Italic'
    }
})