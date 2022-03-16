import { useEffect, useMemo } from 'react'
import styled, {useTheme} from 'styled-components/native'

const Item = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: ${props => props.active? props.theme.secondary4 : 'transparent'};
    align-items:center;
    justify-content:center;
    border-radius:5px;
    margin: 10px;
`

export function BottomTabBarItem({buttonProps, Icon, index, currentIndex}){
    const {primary, secondary2} = useTheme()

    const active =useMemo(()=> index === currentIndex, [currentIndex])

    return (
        <Item {...buttonProps} active={active}>
            <Icon
                color={active? primary : secondary2}
                size={40}
            />
        </Item>
    )
}