import {AntDesign} from '@expo/vector-icons'

export function Like({liked=false}){
    return (
        <AntDesign 
            name={liked? 'heart' : 'hearto'}
            size={25}
            color="#009D81"
        />
    )
}