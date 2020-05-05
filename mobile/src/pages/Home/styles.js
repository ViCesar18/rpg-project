import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A55A1',
        paddingTop: Constants.statusBarHeight + 10
    },

    header: {
        marginLeft: 15
    },

    headerLogo: {
        width: 225,
        height: 225,
        alignSelf: 'center'
    },

    characterList: {
        height: '40%',
        marginTop: 32,
        flexGrow: 0
    },

    character: {
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        elevation: 8,
        marginHorizontal: 24,
        marginBottom: 30,
    },

    characterName: {
        fontSize: 32,
        fontWeight: 'bold',
    },

    characterDescription: {
        fontSize: 16,
    },

    createCharacter: {
        alignSelf: 'flex-end',
        width: 51,
        marginRight: 24,
        marginTop: 10
    },
})