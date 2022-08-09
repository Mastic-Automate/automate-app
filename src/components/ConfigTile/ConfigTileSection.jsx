import styled, { useTheme } from 'styled-components/native'

const Container = styled.TouchableOpacity`
    background-color: ${props => props.theme.secondary3};
    border-radius: 10px;
    padding: 10px;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
`

const TileText = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.secondary1};
    font-family: Montserrat_600SemiBold;
`

function ConfigTileSection({ text, iconName, iconType: Icon, onPress, style }) {
    const { primary } = useTheme()
    return (
        <Container onPress={onPress} style={style}>
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

export { ConfigTileSection }