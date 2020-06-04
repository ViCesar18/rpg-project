import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    itemsScroll: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemsList: {
        height: '50%',
        justifyContent: 'space-between',
    },

    itemIconContent: {
        alignItems: 'center',
        width: 50,
    },

    itemText: {
        fontFamily: 'Montserrat',
        fontSize: 20,
    }
})