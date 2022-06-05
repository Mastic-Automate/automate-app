import { useEffect, useMemo } from 'react'
import styled, {useTheme} from 'styled-components/native'

const Item = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: ${props => props.isActive? props.theme.secondary4 : 'transparent'};
    align-items:center;
    justify-content:center;
    border-radius:5px;
    margin: 10px;
`

export function BottomTabBarItem({Icon, isActive, ...buttonProps}){
    const {primary, secondary2} = useTheme()

    return (
        <Item {...buttonProps} active={isActive}>
            <Icon
                color={isActive? primary : secondary2}
                size={40}
            />
        </Item>
    )
}