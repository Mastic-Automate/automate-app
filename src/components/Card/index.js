import { StyleSheet, View } from 'react-native';
import { MotiView } from 'moti';
import { useFonts, Poppins } from '@expo-google-fonts/inter';
import styled from 'styled-components';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

/*
    COMO USAR OS CARDS 

  São aceitas 5 propriedades:
  theme: dark || light
  Icon: (nome de icon) - São aceitos icones do das bibliotecas AntIcon e MaterialIcon.
  iconType: || M - pode ser vazio se quiser usar a biblioteca de icones AntIcon, ou se quiser a MaterialIcons colocar "M".
  delay: number - Determina o atraso para a animação começar. Pode ser 0 ou não informado para não o Card não ser animado.
  text: string - O Texto que será renderizado no interior do Card.
*/
export default function Card(props) {
    const fonts = useFonts({
      'Poppins': require('../../assets/fonts/Poppins-Thin.ttf'),
    });
    const animation = props.delay === undefined || 0 ? false : true;
    const animConfigs = {
      from: { translateY: 300, opacity: 0 },
      animate: { translateY: 0, opacity: 1 }
    }

    
    return (
      <MotiView
          from={animation ? animConfigs.from : {}}
          animate={animation ? animConfigs.animate : {}}
          transition={{ type: 'timing', duration: 350, delay: props.delay }}
        
          style={props.theme === 'light' ? styles.cardBodyLight : styles.cardBodyDark} >      
      { 
       props.iconType !== 'M' ?
      <AntDesign name={props.icon} size={35} style={styles.icon} color="#00c964" />
             :
      <MaterialIcons name={props.icon} size={40} style={styles.icon} color="#00c964" />
  
    }{
        props.theme === 'light' ?
        <CardTextLight >{props.text}</CardTextLight> : <CardTextDark >{props.text}</CardTextDark>
        }
    </MotiView>
    )
    }
  
    const AnimCardFadeIn = (props) => {
      return (
      <MotiView 
    
      from={{ translateX: -300 }}
      animate={{ translateX: 0 }}
      transition={{ type: 'spring', duration: 1500, delay: props.delay }}
      style={props.theme === 'light' ? styles.cardBodyLight : styles.cardBodyDark} 
      >
        
     
         <AntDesign name={props.icon} size={40} style={styles.icon} color="#00c964" />
      {
          props.theme === 'light' ?
          <CardTextLight >{props.text}</CardTextLight> : <CardTextDark >{props.text}</CardTextDark>
          }
      </MotiView>
      )
    }
    
  
    const AnimCardSlideInDown = (props) => {
      return (
      <MotiView 
    
      from={{ translateY: 300, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 5000 }}
      style={props.theme === 'light' ? styles.cardBodyLight : styles.cardBodyDark} 
      > 
       <AntDesign name={props.icon} size={40} style={styles.icon} color="#00c964" />
          {
          props.theme === 'light' ?
          <CardTextLight >{props.text}</CardTextLight> : <CardTextDark >{props.text}</CardTextDark>
          }
      </MotiView>
      )
    }
    
  const CardTextLight = styled.Text`
    font-size: 17;
    @font-face {
      font-family: 'Poppins' ;
      src: url("../../assets/fonts/Poppins-Thin.ttf") format("ttf") 
    }
    font-family: 'Poppins';
    width: 75% ;
    font-weight: bold;
    color: #404040;
  `;
     
  const CardTextDark = styled.Text`
  @font-face {
    font-family: 'Poppins' ;
    src: url("../../assets/fonts/Poppins-Thin.ttf") format("ttf") 
  }
  font-family: 'Poppins';
  width: 75% ;
  font-weight: bold;
  color: #EBEBEB;
  align-content: center ;
  flex-direction:column ;
  justify-content: center ;
  margin: 10px;
  text-align:left;
  font-size: 15px;
  align-self: center;
  `;
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
    },
    cardBodyLight: {
      width: '85%',
      backgroundColor: '#FFFFFF',
      borderRadius:  9,
      borderWidth: 3,
      borderColor: '#1EEC58',
      flexDirection:'row',
      alignContent: 'center',
      justifyContent:'center',
      alignItems:'center',
      padding: 7,
      margin: 4,
    },
    cardBodyDark: {
     
      width: '85%',
      backgroundColor: '#161722',
      borderRadius:  9,
      borderWidth: 3,
      borderColor: '#1EEC58',
      flexDirection:'row',
      alignContent: 'center',
      justifyContent:'center',
      alignItems:'center',
      padding: 7,
      margin: 4,
    },
    icon: {
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      margin: 5 ,
    }
  });
  
  