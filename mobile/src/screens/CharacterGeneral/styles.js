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

    rectInputsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
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

    lifeContainer: {
        marginBottom: 10,
    },

    hp: {
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

    darkInputsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    darkInputContainerTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
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
        width: 20,
        padding: 0,
    },

    totalLifeDicesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    totalLifeDicesText: {
        color: '#FFF',
        fontSize: 10
    },

    totalLifeDicesInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: 60,
        marginLeft: 5,
        fontSize: 12,
        textAlign: 'center'
    },

    hpDicesTextArea: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: '100%',
        height: 70,
        marginTop: 10,
        marginBottom: 10
    },

    equippedWeaponsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    equippedWeaponsColumn: {
        width: '35%'
    },

    equippedWeaponsColumnBonus: {
        width: '24%'
    },

    equippedWeaponsColumnText: {
        color: '#FFF',
        fontSize: 12,
        marginBottom: 5
    },

    equippedWeaponsColumnInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 5
    },

    equippedWeaponsTextArea: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: '100%',
        height: 150,
        marginTop: 10,
        marginBottom: 10
    }
})