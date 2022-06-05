import React, {Component} from 'react'
import {View, Text, Image,  TouchableOpacity} from 'react-native'

export default class Produto extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                
                <Image source={require('../Images/welcome.jpg')}style={{width:150, height:150}}/>
                <Text style={{fontSize:18}}>Bem-Vindo, Chanel</Text>
                <Text style={{fontSize:12}}>Enquanto a diretora-criativa mexe em agulhas, alfinetes, tecidos e 
                croquis nos ateliês da Chanel, o presidente da etiqueta francesa, Bruno Pavlovsky, está atento 
                aos detalhes da nova estrutura que abrigará e agrupará os negócios do Métiers d’Art. 
                Todas as casas de artesanato da marca ficarão reunidas em um único lugar.</Text>

                <Image source={require('../Images/endereco.jpeg')}style={{width:150, height:150}}/>
                <Text style={{fontSize:14}}>
                    
                      CHANEL PARIS 31 CAMBON
                    MODA, ÓCULOS, PERFUMES E COSMÉTICOS, RELÓGIOS, JOALHARIA

                        31 RUE CAMBON
                        75001, PARIS
                       +33 1 44 50 66 00
                </Text>
                
               
                
            </View>
        )
    }
}