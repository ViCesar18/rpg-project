import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272D54',
        paddingTop: Constants.statusBarHeight + 10
    },

    header: {
        marginLeft: 15
    },

    headerButton: {
        width: 36
    },

    headerLogo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: 32
    },

    characterList: {
        height: '40%',
        marginTop: 10,
        paddingVertical: 10,
        flexGrow: 0
    },

    character: {
        height: 75,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        elevation: 8,
        marginHorizontal: 24,
        marginBottom: 30,
    },

    characterImage: {
        width: 65,
        height: '100%',
        borderRadius: (Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    },

    textContainer: {
        width: '75%',
        marginLeft: 15,
    },

    characterName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#353535'
    },

    characterDescription: {
        fontSize: 16,
        color: '#353535'
    },

    createCharacter: {
        alignSelf: 'flex-end',
        width: 51,
        marginRight: 24,
        marginTop: 10
    },
})