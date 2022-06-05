import React, {Component} from 'react'
import {View, Text, Image,  TouchableOpacity} from 'react-native'

export default class Produto extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                
                <Image source={this.props.imagem}style={{width:100, height:100}}/>
                <Text style={{fontSize:18}}>{this.props.nome}</Text>
                <Text>{this.props.preco}</Text>
                <Text>{this.props.imagem}</Text>
               
                
            </View>
        )
    }
}