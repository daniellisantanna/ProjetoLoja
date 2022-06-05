import React, {Component} from 'react'
import {View, Text, Image,} from 'react-native'

export default class Sobre extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                
                
                <Text style={{fontSize:18}}>Bem-Vindo, Chanel</Text>
                <Text style={{fontSize:12}}> uma empresa privada francesa que pertence a Alain e Gerard Wertheimer, 
                netos de Pierre Wertheimer, que foi um parceiro de negócios da couturière Gabrielle Bonheur Chanel.
                 A Chanel S.A. é uma empresa especializada em alta-costura, prêt-à-porter, bens de luxo e acessórios 
                 de moda.Em 2017, a Chanel foi avaliada em US$ 13,4 bilhões, considerada a 5ª marca mais valiosa
                  da França.

                Quando era jovem, Gabrielle Chanel ganhou o apelido Coco devido ao seu trabalho como 
                cantora. Ao trabalhar como designer de moda, Coco queria fornecer as mulheres roupas 
                elegantes, como blusas e ternos, calças e vestido, e joias (pedras preciosas e joalharia) de 
                aparência simples, para substituir o opulento, peças mais projetadas e roupas e acessórios 
                constritivos do século XIX.</Text>

                <Image source={require('../Images/loja.jpg')}style={{width:150, height:150}}/>
                
                
               
                
            </View>
        )
    }
}