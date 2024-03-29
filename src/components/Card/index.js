import { StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import styled, { useTheme } from 'styled-components/native';
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

const CardBody = styled(MotiView)`
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${props => props.theme.primary};
  flex-flow:row nowrap;
  align-content: center;
  justify-content:center;
  align-items:center;
  padding: 10px;
  width:100%;
`

const CardText = styled.Text`
  font-size: 15px;
  font-family: 'Poppins';
  flex:1;
  color: ${props => props.theme.secondary1};
  margin-left: 3px;
`
export default function Card({ delay, text, style, iconType: Icon, iconName }) {
  const animation = !(delay === undefined || delay === 0)
  const animConfigs = {
    from: { translateY: 300, opacity: 0 },
    animate: { translateY: 0, opacity: 1 }
  }

  const { primary } = useTheme()

  return (
    <CardBody
      from={animation ? animConfigs.from : {}}
      animate={animation ? animConfigs.animate : {}}
      transition={{ type: 'timing', duration: 350, delay: delay }}
      style={style}
    >
      <Icon
        name={iconName}
        color={primary}
        size={40}
      />

      <CardText >{text}</CardText>
    </CardBody>
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
        props.theme === 'light'
          ? <CardTextLight >{props.text}</CardTextLight>
          : <CardTextDark >{props.text}</CardTextDark>
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

      <CardText >{props.text}</CardText>

    </MotiView>
  )
}


const styles = StyleSheet.create({
  icon: {
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
  }
});

