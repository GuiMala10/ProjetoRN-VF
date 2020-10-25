import { StyleSheet } from 'react-native';

const estiloTitulos =  StyleSheet.create ({

    container: {
        flex: 1,
    },

    header: {
        height: 40,
        backgroundColor: '#000',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 5,
    },

    texto: {
        fontSize: 18,
        color: '#FFF'
    }
})
export default estiloTitulos;