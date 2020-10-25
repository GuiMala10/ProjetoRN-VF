import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil( {navigation} ) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        
        <View style={estiloPerfil.fotoContainer}>
            <Image style={estiloPerfil.foto} source = {require('../../../assets/imagens/06.jpg')} />
            <Text style={estiloPerfil.nome}>Guilherme Vinícius dos Santos Mazzaro</Text>

            <Text style={estiloPerfil.infos}>Sala: 3°MI-A</Text>
            <Text style={estiloPerfil.infos}>Disciplina: TM</Text>
            <Text style={estiloPerfil.infos}>Atividade: Montar um App com navegação</Text>
        </View>
    )
}
export default Perfil;