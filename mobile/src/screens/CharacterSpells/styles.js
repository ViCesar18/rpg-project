import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 15,
    },
    header: {
        marginBottom: 0
    },

    headerButton: {
        width: 36
    },

    headerInputGroup: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#402D1F',
        paddingBottom: 10,
        marginBottom: 20
    },

    spellcastingClassInput: {
        width: '30%',
        marginRight: 15,
        fontSize: 24,
        textAlign: 'center',
        color: '#402D1F'
    },

    headerSpellcastingInformationGroup: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '65%',
        backgroundColor: '#402D1F',
        borderRadius: 8,
        padding: 10,
        opacity: 0.82,
    },

    headerSpellcastingInformation: {
        justifyContent: 'space-between',
        width: 70,
        height: 100
    },

    headerSpellcastingInformationTitle: {
        fontSize: 10,
        textAlign: 'center'
    },

    headerSpellcastingInformationInput: {
        backgroundColor: '#F4E7CE',
        borderRadius: 8,
        height: 60,
        color: '#402D1F',
        fontSize: 22,
        textAlign: 'center'
    },

    cantripsHeader: {
        flexDirection: 'row',
        backgroundColor: '#402D1F',
        opacity: 0.82,
        padding: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    spellLevel: {
        borderWidth: 4,
        borderColor: '#F4E7CE',
        borderRadius: 8,
        marginRight: 10,
        textAlign: 'center',
        fontSize: 28,
        color: '#F4E7CE',
    },

    spellsList: {
        alignItems: 'center',
        backgroundColor: '#402D1F',
        opacity: 0.82,
        padding: 10.5,
    },

    spellText: {
        color: '#F4E7CE',
        fontSize: 20,
        textAlign: 'center',
    },

    spellsContainerFooter: {
        backgroundColor: '#402D1F',
        opacity: 0.82,
        marginBottom: 20,
        padding: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },

    footerText: {
        color: '#F4E7CE',
        fontSize: 16,
        marginLeft: 10
    }
})