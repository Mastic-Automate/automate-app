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
    font-weight:bold;
`
const Container = styled.TouchableOpacity`
    margin:4px;
    height: 200px;
    width:130px;
    justify-content: flex-end;
`
const PlantPicture = styled.Image`
    width:150px;
    height:150px;
    position:absolute;
    top:0px;
    right: -20px;
`

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: '100%',
        maxHeight: 160,
        borderRadius: 16,
        overflow: 'hidden',
        alignItems:'center',
        position:'relative',
        justifyContent:'flex-end',
        zIndex:-1,
        paddingBottom:20
    }
})

export function Plant({variant, image, title, ...containerProps}){
    const gradient = gradientsByVariants[variant]
    return (
        <Container {...containerProps}>
            <PlantPicture 
                source={image}
            />
            <LinearGradient style={styles.gradient} colors={gradient}>
                <Title>{title}</Title>
            </LinearGradient>
        </Container>
    )
}