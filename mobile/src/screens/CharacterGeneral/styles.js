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

    headerButton: {
        width: 36
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

    headerInputsGroup1: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    headerInputsGroup2: {
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
    },

    content: {
        marginTop: 50,
        paddingHorizontal: 25,
    },

    inputsGroup1: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    rectInputContainer: {
        alignItems: 'center'
    },

    rectInput: {
        width: 55,
        height: 55,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: '#353535',
        textAlign: 'center',
        fontSize: 24
    },

    rectInputText: {
        width: 100,
        fontSize: 14,
        textAlign: 'center'
    },

    hitPointsContainer: {
        alignItems: 'flex-start',
        marginTop: 15,
    },

    hitPoints: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },

    hpGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 40,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#353535',
    },

    hpText: {
        color: '#FFF',
        fontSize: 16
    },

    hpImage: {
        width: 50,
        height: 40,
        marginLeft: 5
    },

    inputsContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    deathSavesContainer: {
        width: 200,
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor: '#353535',
        borderRadius: 8,
        elevation: 5
    },

    savesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    savesText: {
        width: 55,
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center'
    },

    savesCheckBox: {
        width: 25,
        padding: 0,
    },

    savesTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    hpDicesContainer: {
        backgroundColor: '#353535',
        borderRadius: 8,
        elevation: 5
    }
})