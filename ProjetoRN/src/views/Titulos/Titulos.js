import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import estiloTitulos from './estiloTitulos';
import Lista from '../../views/Lista/Lista';
import {MaterialIcons} from '@expo/vector-icons';


function Titulos( {navigation} ) {

    const [titulos , setTitulos] = useState ([

        {
            id: '1',
            titulo: 'Mundial De Clubes',
            descricao: 'Sem dúvidas são o três maiores troféus que o SPFC conquistou ao longo de sua história, com essas conquistas o time dispara na frente dos outros times brasileiros em questão de maior campeão mundial brasileiro. Esse troféu é o um dos mais buscados por todos os times do mundo, tanto por aqueles que já ganharam, quanto aqueles que nunca chegaram perto, tipo o Palmeiras.',
            Time: 'São Paulo Futebol Clube',
            anos: '1992, 1993 e 2005',
            foto: require ('../../../assets/imagens/03.jpg'),
        },

            {
            id: '2',
            titulo: 'Taça Libertadores da América',
            descricao: 'Nos mesmo anos das conquistas dos mundias de clubes, o São Paulo FC provava ser também o melhor time de um continente. A Taça Libertadores da América é cobiçada por todos os times da América do Sul.',
            Time: 'São Paulo Futebol Clube',
            anos: '1992, 1993 e 2005',
            foto: require('../../../assets/imagens/05.jpg'),
        },

            {
            id: '3',
            titulo: 'Campeonatos Brasileiros',
            descricao: 'Seis vezes campeão brasileiro, o São Paulo é um dos times que mais vezes faturou essa competição, onde quem ganha é considerado por muitos o melhor time de futebol do Brasil, pois se trata de uma competição com longo tempo de duração.',
            Time: 'São Paulo Futebol Clube',
            anos: '1977, 1986, 1991, 2006, 2007, 2008',
            foto: require('../../../assets/imagens/04.jpg'),
        }

    ])

    const voltar = () => {
        navigation.goBack();
    }

    return (
        
        <View style={estiloTitulos.container}>


            <FlatList 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={titulos}
            renderItem = {({item}) => <Lista data={item}/>}

            />

        </View>
    )

}
export default Titulos;