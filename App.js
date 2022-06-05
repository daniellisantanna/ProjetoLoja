import React, {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


import ItemDatabase from './src/Database/ItemDatabase';
import Item from './src/Models/Item';


import Home from './src/Pages/Home';
import ListagemProdutos from './src/Pages/ListagemProdutos';
import Sobre from './src/Pages/Sobre';
import Cartoes from './src/Pages/Cartoes';

import Icon from 'react-native-vector-icons/Ionicons'
//import Icon from 'react-native-vector-icons/AntDesign'


export default class App extends Component
{
        constructor(props) {
                super(props)
                this.state = {
                  nome: "",
                  preco: "",
                  descricao: "",
                  lista: []
                }
            
                this.Listar()
              }
                
            
              // TIPO O CONTROLLER, MAS SEM O MVC
              Listar = () => {
                const banco = new ItemDatabase();
                banco.Listar().then(
                  listaCompleta => {
                    this.setState({lista: listaCompleta})
                  }
                )
              }
            
             

        render(){
                return(
                        <NavigationContainer>
                                <Tab.Navigator
                                screenOptions={({route}) => ({
                                        tabBarIcon:({focused,color,size})=>{
                                                let iconName;
                                                if(route.name==="Home"){
                                                iconName = focused
                                                ? 'home'
                                                : 'home-outline'
                                                }else if(route.name==="Categorias"){
                                                        iconName = focused
                                                        ? 'list'
                                                        : 'list-outline'
                                                }else if (route.name==="Sobre"){
                                                        iconName = focused
                                                        ?'heart-sharp'
                                                        : 'heart-outline'
                                                }else if(route.name==="Cartoes"){
                                                        iconName = focused
                                                        ?'card'
                                                        : 'card-outline'
                                                }

                                                return <Icon name={iconName} size={size} color={color} />
                                        },
                                        tabBarActiveTintColor:'black',
                                        tabBarInactiveTintColor: 'pink'
                                })}
                                >
                                <Tab.Screen name="Home" component={Home}/>
                                <Tab.Screen name="Categorias" component={ListagemProdutos}/>
                                <Tab.Screen name="Sobre" component={Sobre}/>
                                <Tab.Screen name="Cartoes" component={Cartoes}/>
                                </Tab.Navigator>
                        </NavigationContainer>
                )
        }
}