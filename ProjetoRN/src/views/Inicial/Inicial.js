import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import estiloInicial from './estiloInicial';
import { Ionicons } from '@expo/vector-icons';

function Inicial ({navigation}) {

    const abrirTitulos = () =>{
    navigation.navigate('Titulos')        
    }

    const abrirPerfil = () =>{
    navigation.navigate('Perfil')        
    }


    return (

        <ImageBackground source={require('../../../assets/imagens/02.jpg')} style={estiloInicial.fundo}>

        <View style={estiloInicial.container}>

            <View style={estiloInicial.logo} >
                <Ionicons name="ios-football" size={46} color="black" />
            </View>
            
            <View style = {estiloInicial.borda}>

                <Text style={estiloInicial.texto}>São Paulo FC</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirTitulos}>
                    <Text style={estiloInicial.botaoTexto}>Títulos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                    <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                </TouchableOpacity>

            </View>

        </View>

        </ImageBackground>
    )
}
export default Inicial;