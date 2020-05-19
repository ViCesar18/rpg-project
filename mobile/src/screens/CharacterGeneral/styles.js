import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E8E8',
    },

    header: {
        backgroundColor: '#353535',
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 15,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        elevation: 10
    },

    headerButtonContainer: {
        flexDirection: 'row',
    },

    characterName: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center', 
    },

    headerInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 40,
        width: '30%',
        textAlign: 'center',
        fontSize: 16
    },

    headerInputs1: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerInputs2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },

    headerImage: {
        position: 'absolute',
        left: '34.5%',
        top: '20%',

        width: 120,
        height: 120,
        backgroundColor: '#E3E8E8',
        borderRadius: 8,
        borderColor: '#353535',
        borderWidth: 3,
    },

    headerLevel: {
        position: 'absolute',
        left: '25%',
        top: '160%',

        width: 50,
        height: 50,
        backgroundColor: '#353535',
        borderRadius: (Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderColor: '#E3E8E8',
        borderWidth: 3,
        fontSize: 16,
        textAlign: 'center',
    }
})