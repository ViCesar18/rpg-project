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
        marginBottom: 0
    },

    headerButton: {
        width: 36
    },

    darkInputContainer: {
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#353535',
        borderRadius: 8,
        elevation: 2
    },

    physicalCharacteristicsInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: '30%',
        textAlign: 'center'
    },

    traitsInputBox: {
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 8
    },

    traitsInput: {
        height: 100,
        padding: 5
    },

    traitsTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        textAlign: 'center',
    },

    darkInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 5
    },

    darkInputTitle: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
        fontSize: 10,
        textAlign: 'center'
    }
})