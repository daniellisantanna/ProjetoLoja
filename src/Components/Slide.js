import React, {useState} from 'react'
import {View, Text, Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

//Estava assistino no youtube(não tem no conteudo), instalei npm install react-native-app-intro-slider, não sei se funcionou.

const slides=[
    {
        key:'1',
        image: require('../Images/campanha.jpg')
    },
    {
        key:'2',
        image: require('../Images/campanha1.jpg')
    },
    {
        key:'3',
        image: require('../Images/campanha2.jpg')
    }
];

export default function Slide(){
    const [showHome, setShowHome] = useState(false);

    function renderSlides({item}){
        return(
            <View style={{flex:1}}>
            
            <Image
                source={item.image}
                style={{
                    resizeMode: 'cover',
                    height: '43%',
                    width: '80%'
                }}
            />

            </View>
        )

    }


    if(showHome){
        return <Text>Entrou no Home</Text>
    }else{
  return(
      <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
          backgroundColor: '#FFFFFF',
          width: 20
      }}
      />
    
  );
    }
}