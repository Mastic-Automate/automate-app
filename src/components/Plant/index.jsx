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
`

const styles = StyleSheet.create({
    gradient: {
        width: 135,
        height: 160,
        borderRadius: 16,
        overflow: 'hidden',
        alignItems:'center'
    }
})

export function Plant({variant, title, ...containerProps}){
    const gradient = gradientsByVariants[variant]
    return (
        <Container {...containerProps}>
            <LinearGradient style={styles.gradient} colors={gradient}>
                <Title>{title}</Title>
            </LinearGradient>
        </Container>
    )
}