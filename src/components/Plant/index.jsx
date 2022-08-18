import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import { View, StyleSheet } from 'react-native';

const gradientsByVariants = {
    'yellow':['#F89B0F', '#F27B25'],
    'red':['#F8470F', '#F22525'],
    'blue':['#3DADFE', '#6091F0']
}

const Title = styled.Text`
    color:#ffffff;
    font-size:18px;
    width:100%;
    padding-left:10px;
    font-family: MusticaPro;
`
const Subtitle = styled.Text`
    color: #ffffff;
    font-size: 14px;
    width:100%;
    padding-left:10px;
    font-family: MusticaPro;
`
const Container = styled.TouchableOpacity`
    margin: 3px;
    height: 180px;
    width: 130px;
    justify-content: flex-end;
`
const PlantPicture = styled.Image`
    width:130px;
    height:140px;
    position:absolute;
    top: -10px;
    right: -20px;
`

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: '100%',
        maxHeight: 160,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems:'center',
        position:'relative',
        justifyContent:'flex-end',
        zIndex:-1,
        paddingBottom:20
    }
})

export function Plant({variant, image, title, subtitle, ...containerProps}){
    const gradient = gradientsByVariants[variant]
    return (
        <Container {...containerProps}>
            <PlantPicture 
                source={image}
            />
            <LinearGradient style={styles.gradient} colors={gradient}>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </LinearGradient>
        </Container>
    )
}