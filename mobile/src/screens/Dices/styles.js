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

    dicePicker: {
        inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          },
    },
})