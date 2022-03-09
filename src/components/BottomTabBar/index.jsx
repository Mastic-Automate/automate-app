import {View, Button} from 'react-native'

export function BottomTabBar({navigation}){
    function navigate(screenName){
        navigation.replace('main', {screen: screenName})
    }

    return (
        <View>
            <Button title="Config" onPress={() => navigate('config')} />
        </View>
    )
}