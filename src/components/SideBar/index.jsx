import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer"

export function SideBar(props){
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Item 2" />
        </DrawerContentScrollView>
    )
}