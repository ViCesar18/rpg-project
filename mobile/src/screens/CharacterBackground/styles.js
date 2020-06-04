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
        elevation: 3
    },

    physicalCharacteristicsInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: '30%',
        textAlign: 'center'
    },

    traitsModalButton: {
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 8
    },

    traitsText: {
        height: 105,
        padding: 5
    },

    traitsTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
        textAlign: 'center',
    },

    darkModalButton: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 5,
        padding: 5
    },

    darkInputTitle: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
        fontSize: 10,
        textAlign: 'center'
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    modalView: {
        margin: 20,
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingBottom: 35,
        paddingLeft: 35,
        elevation: 5,
        flexGrow: 0
    },

    modalCloseButton: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        paddingTop: 10
    },

    modalTitle: {
        marginRight: 35,
        fontFamily: 'Montserrat-Bold',
        fontSize: 25
    },

    modalInput: {
        backgroundColor: '#E3E8E8',
        borderRadius: 8,
        marginRight: 35,
        height: 500,
        marginTop: 10,
        padding: 5,
        fontSize: 18
    }
})