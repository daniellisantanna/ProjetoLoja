import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, Image, ScrollView} from 'react-native'

import Modal from "react-native-modal";
import Item from '../Models/Item';
import {useLinkProps} from 'react-navigation/native';

function Detalhes (props){
  const [getModal, setModal] = useState(false);
  const atualizarModal = () =>{
    
    setModal(!getModal);
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={atualizarModal}>
        <Text>Ver detalhes</Text>
      </TouchableOpacity>

      <Modal isVisible={getModal} style={{ flex:1, backgroundColor: 'white', borderRadius:10, justifyContent: 'center', alignItems:'center'}}>
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:200, height:150}} source={{uri: props.imagem2}}/>
          <Text style={{fontSize:20}}>{props.nome2}</Text>
          <Text>Preço:{props.preco2}</Text>
          <Text></Text>
          <ScrollView>
            <Text>Descrição:{props.descricao2}</Text>
          </ScrollView>

          <Button title="Voltar" onPress={atualizarModal} />
        </View>
      </Modal>
    </View>
  );
}

export default function ItemComponente (item) {

  const {id, nome, preco, imagem, descricao} = item.item
     
        return(
            <View style={{width: 180, margin: 5}}>
          
                <View>
                  <Image source={{uri: imagem}} style={{flex:1, borderRadius:20}} />
                </View>   
                <View>
                  
                  <Text style={{justifyContent:'center', alignItems:'center'}}>{nome}</Text>
                  <Detalhes nome2={nome} preco2={preco} descricao2={descricao} imagem2={imagem}/>
                  </View>                        
                                        
                </View>
            
        )
    }
  

const estilo = StyleSheet.create({
    
    botao: {
      width: 100,
      backgroundColor: '#0A66F8',
      alignItems: 'center',
      justifyContent: "center",
      borderRadius: 55,
      padding: 5,
      margin: 5,
      color: 'white'
    },

    
  })