import styled, { useTheme } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

const Container = styled.View`
    flex-direction: row;
    height: 60px;
    width:100%;
    background-color: ${props => props.theme.secondary3};
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
    font-family: Poppins;
`;

const IconsWrapper = styled.View`
    flex-direction:row;
`;

export default function PlantTile({ id, text }) {
    const navigation = useNavigation()
    const { secondary1 } = useTheme()

    function openPlantInfo() {
        navigation.replace('bluetooth-connection',
            {
                target: 'info-plant',
                params: { id: id }
            }
        )
    }
    function openPlantEdit() {
        navigation.replace('bluetooth-connection',
            {
                target: 'edit-plant',
                params: { id: id }
            }
        )
    }

    return (
        <Container>
            <Title>{text}</Title>
            <IconsWrapper>
                <MaterialIcons name='info-outline' size={40} color={secondary1} style={{ marginHorizontal: 3 }} onPress={openPlantInfo} />
                <MaterialIcons name="edit" size={40} color={secondary1} style={{ marginHorizontal: 3 }} onPress={openPlantEdit} />
            </IconsWrapper>
        </Container>
    )

}


