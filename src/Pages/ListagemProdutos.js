import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet,TextInput, Image, TabBarIOSItem, FlatList} from 'react-native'

import ItemComponente from '../Components/ItemComponente';

export default class ListagemProdutos extends Component
{
    constructor(props) 
    { 
          super(props)
          this.state={
              pesquisarTexto : "",
              dadosFiltrados:[],
          lista: [
            {id: 1,  nome: "Vestido", preco: "R$30.000", imagem:"https://i.pinimg.com/originals/fd/9e/79/fd9e7968b95773770a1c31b8a8c82a65.jpg", descricao:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            {id: 2,  nome: "Casaco", preco: "R$10.000", imagem:"https://www.stylist.co.uk/images/app/uploads/2021/08/26154000/lkbennett.jpg.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress&fm=webp", descricao:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            {id: 3,  nome: "Top e Saia", preco: "R$15.000", imagem:"https://i0.wp.com/www.fashionbubbles.com/wp-content/blogs.dir/1/files/2020/06/Chanel_bubble.jpg?fit=1250%2C1250&ssl=1", descricao:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
            {id: 4,  nome: "Vestido Longo", preco: "R$20.000", imagem:"https://www.pegueibode.com.br/produto/saia-chanel-laranja-avermelhado-tam-40/", descricao:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          ]
        }
      }
    
    Listar = () => {
        const banco = new ItemDatabase();
        banco.Listar().then(
          listaCompleta => {
            this.setState({lista: listaCompleta})
          }
        )
      }

      Pesquisar = (texto)=>{
        this.setState({pesquisarTexto: texto})

        let filtro = this.state.lista.filter(
          (item) =>{
            return item.nome.toLowerCase().includes(texto.toLowerCase())
          }
        )

        this.setState({dadosFiltrados: filtro})
      }
    render(){
        return(
            <ScrollView>
            <View>
          <Text style={estilo.titulo}>Categorias de Produtos</Text>
          <TextInput onChangeText={(valor)=> this.Pesquisar(valor)} placeholder='Pesquisar...'/>
          
          <FlatList
            data={this.state.dadosFiltrados && this.state.dadosFiltrados.length > 0 ? this.state.dadosFiltrados : this.state.lista}
            renderItem={ItemComponente}
            key={(item)=>item.id}
            initialNumToRender={4}
            />
        </View>
            </ScrollView>
        )
    }
}

const estilo = StyleSheet.create({
    
    titulo: {
      fontSize: 18,
      margin: 5,
      color: 'black'
    },
    
  })