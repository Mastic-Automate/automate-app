import styled, {useTheme} from 'styled-components/native';

import {Switch} from 'react-native'

const Container = styled.View`
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
    font-family: Montserrat_600SemiBold;
`

export function ConfigTileSwitch({text, iconType:Icon, iconName, onChange, value, style}){
    const {primary} = useTheme()

    return (
        <Container style={style}>
            {iconName && (
                <Icon 
                    name={iconName}
                    color={primary}
                    size={40}
                />
            )}
            <TileText>{text}</TileText>
            <Switch 
                trackColor={{false: "#797979", true: primary}}
                thumbColor="#ffffff"
                value={value}
                onValueChange = {onChange}
            />
        </Container>
    )
}