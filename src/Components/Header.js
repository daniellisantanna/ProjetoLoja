import React, {useState} from 'react'
import {View, Text, Image} from 'react-native'

//falta search, não sei por onde começar, não está no conteudo. Pesquisei na internet, é diferente. fica ao lado do logotipo

export default function Header(){
  return(
    <View style={{flex:1}}>
        <Image
                source={require('../Images/logo.png')}
            />

        
    </View>
  )
}