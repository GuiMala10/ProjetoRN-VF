import {StyleSheet} from 'react-native';

const estiloLista = StyleSheet.create ({

        areaItens: {
            flex:1,
        },

        itemFoto:{
            height: 300,
            marginTop: 10,
            marginBottom: 20,
        },

        title: {
            fontSize: 32,
            color: '#000',
            textAlign: "center",
            fontWeight: "bold",
        },

        subtitle: {
            fontSize: 26,
            color: '#000',
            textAlign: "center",
            fontWeight: "bold",
        },

        textdescription: {
            fontSize: 20,
            marginTop: 10,
            color: '#000',
            textAlign: "justify",
        }

}) 

export default estiloLista;