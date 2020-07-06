import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E8E8',
        paddingTop: Constants.statusBarHeight + 10
    },

    header: {
        marginHorizontal: 15,
    },

    headerButton: {
        width: 36
    },

    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },

    image: {
        width: 100,
        height: 100
    },

    title: {
        fontFamily: 'Montserrat-Bold',
        color: '#353535',
        fontSize: 28
    },

    content: {
        paddingHorizontal: 25,
        paddingVertical: 10
    },

    dicePicker: {
        backgroundColor: '#272D54',
        borderRadius: 8,
        padding: 10,
        color: '#FFF',
        fontSize: 20
    },

    inputTitle: {
        fontFamily: 'Montserrat-Bold',
        color: '#272D54',
        fontSize: 16
    },

    iconView: {
        backgroundColor: '#272D54',
        borderRadius: 8,
        padding: 10,
    },

    buttonText: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        fontSize: 30,
        color: '#272D54'
    }
})