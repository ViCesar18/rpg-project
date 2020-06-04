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

    title: {
        fontFamily: 'Montserrat-Bold',
        color: '#353535',
        textAlign: 'center',
        fontSize: 28,
        borderRadius: 8,
        marginBottom: 15,
    },

    bagContainer: {
        //alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 8,
        elevation: 2
    },

    coinContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#4A55A1',
        borderRadius: 8,
        height: '75%',
        width: 100,
        padding: 10,
        elevation: 9
    },
    
    coinTitle: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFF'
    },

    coinInput: {
        backgroundColor: '#353535',
        borderRadius: 8,
        width: 75,
        height: 50,
        elevation: 10,
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
    },

    bagInput: {
        backgroundColor: '#E3E8E8',
        borderRadius: 8,
        width: '65%',
        height: 550,
        marginLeft: 25,
        padding: 5,
        fontSize: 20
    }
})