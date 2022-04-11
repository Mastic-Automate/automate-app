import styled, {useTheme} from 'styled-components/native';

import {MaterialIcons} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

const Container = styled.View`
    flex-flow: row nowrap;
    height: 60px;
    width:100%;
    background-color: ${props => props.theme.secondary3};
    justify-content: center;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.View`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
`;

const IconsWrapper = styled.View`
    flex-direction:row;
`;

export default function PlantTile({id, text}) {
    const navigation = useNavigation()
    const {primary} = useTheme()

    function openPlantInfo(){
        console.log('Info')
    }
    function openPlantEdit(){
        navigation.replace('edit-plant', {id:id})
    }

    return (
        <Container>
            <Title>{text}</Title>
            <IconsWrapper>
                <MaterialIcons name='info-outline' size={40} color={primary} style={{margin:3}}  onPress={openPlantInfo}/>
                <MaterialIcons name="edit" size={40} color={primary} style={{margin:3}} onPress={openPlantEdit} />
            </IconsWrapper>
        </Container>
    )
    
}


