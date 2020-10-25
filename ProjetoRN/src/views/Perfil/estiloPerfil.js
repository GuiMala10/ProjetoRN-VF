import { StyleSheet } from 'react-native';

const estiloPerfil =  StyleSheet.create ({

    fotoContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },

    foto: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    nome: {
        color: '#000000',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 25,
    }

})
export default estiloPerfil;