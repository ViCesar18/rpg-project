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
        padding: 25,
    },

    dicesContainer: {
        justifyContent: 'space-between',
        backgroundColor: '#272D54',
        borderRadius: 30,
        padding: 15
    },

    columnTitleContainer: {
        flexDirection: 'row',
        marginLeft: '33%'
    },

    columnTitle: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
    },

    dice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28
    },

    diceTitle: {
        marginLeft: 10,
        width: 40,
        color: '#FFF'
    },

    diceInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: '25%',
        textAlign: 'center',
        fontSize: 24
    },

    button: {
        alignSelf: 'center',
        height: 45,
        backgroundColor: '#B7123C',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        marginTop: 10,
        borderRadius: 8,
        elevation: 10
    },

    buttonText: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
        fontSize: 28
    }
})