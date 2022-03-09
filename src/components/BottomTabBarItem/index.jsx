import { useEffect } from 'react'
import styled, {useTheme} from 'styled-components/native'

const Item = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: ${props => props.active? props.theme.secondary4 : 'none'};
    align-items:center;
    justify-content:center;
    border-radius:5px;
`

export function BottomTabBarItem({buttonProps, active, Icon}){
    const {primary, secondary2} = useTheme()

    return (
        <Item {...buttonProps} active={active}>
            <Icon
                color={active? primary : secondary2}
                size={40}
            />
        </Item>
    )
}