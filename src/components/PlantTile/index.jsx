import styled, {useTheme} from 'styled-components/native';

const Container = styled.View`
    flex-flow: row nowrap;
    width: 90%;
    height: 60px;
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
`;

const iconsWrapper = styled.View`
    
`;

export default function PlantTile({iconType:Icon, iconName, iconName2, props, text}) {
    const {primary} = useTheme()
    return (
        <Container>
            <Title>{text}</Title>
            <iconsWrapper>
                <Icon name={iconName} size={40} color={primary} />
                <Icon name={iconName2} size={40} color={primary} />
            </iconsWrapper>
        </Container>
    )
    
}


