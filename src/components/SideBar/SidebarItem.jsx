import {ItemContainer, ItemText} from './styles'
import hamburgerMenu from '@iconify/icons-cil/hamburger-menu';

export function SidebarItem({text, iconName, iconType:Icon, onPress, focused}){
    return (
        <ItemContainer onPress={onPress} isFocused={focused}>
            {iconName && (
                <Icon
                    name={iconName}
                    size={30}
                    color={focused? '#5E6C83': 'white'}
                />
            )}
            <ItemText isFocused={focused}>{text}</ItemText>
        </ItemContainer>
    )
}