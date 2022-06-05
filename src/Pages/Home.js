import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Produto from '../Components/Produto'
import Slide from '../Components/Slide'
import Pagina from '../Components/Pagina'

import Icon from 'react-native-vector-icons/FontAwesome';


export default function Home(){
  return(
    <ScrollView>
    <View>
      <Header/>
      <Slide/>
      <Text>Moda Feminina</Text>
    {/* Imagem fica ao lado da imagem, como proceder? */}
      <Produto nome="Look 1" 
            preco="R$1.000,00" 
            imagem={require('../Images/roupa.jpg')}
            />
            <Produto nome="Look 2" 
                    preco="R$1.000,00" 
                    imagem={require('../Images/roupa1.jpg')}
            /> 
            <Produto nome="Look 3" 
                    preco="R$1.000,00" 
                    imagem={require('../Images/roupa2.jpg')}
            />
            <Produto nome="Look 4" 
                    preco="R$1.000,00" 
                    imagem={require('../Images/roupa3.jpg')}
            />
      <Text>Moda Masculina</Text>
      <Produto nome="Look 1" 
            preco="R$1.000,00" 
            imagem={require('../Images/masculina.jpg')}
            />
            <Produto nome="Look 2" 
                    preco="R$1.000,00" 
                    imagem={require('../Images/masculina1.jpg')}
            /> 
            <Produto nome="Look 3" 
                    preco="R$1.000,00" 
                    imagem={require('../Images/masculina2.jpg')}
            />
            <Produto nome="Look 4" 
                    preco="R$1.000,00" 
                    imagem={require('../Images/masculina3.jpg')}
            />
      <Footer/>
      <Pagina/>
      
    </View>
    </ScrollView>
  )
}