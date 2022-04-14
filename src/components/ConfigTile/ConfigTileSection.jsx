import styled, {useTheme} from 'styled-components/native'

const Container = styled.TouchableOpacity`
    background-color: ${props => props.theme.secondary3};
    border-radius: 10px;
    padding: 10px;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
`

const TileText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
`

function ConfigTileSection({text, iconName, iconType:Icon, onPress}){
    const {primary} = useTheme()
    return (
        <Container onPress={onPress}>
            {Icon && (
                <Icon 
                    size={40}
                    color={primary}
                    name={iconName}
                />
            )}
            <TileText>
                {text}
            </TileText>
        </Container>
    )
}

export {ConfigTileSection}