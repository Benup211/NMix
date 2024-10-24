import {View} from 'react-native';
import { Stack } from 'expo-router';
import { defaultStyles } from '@/styles';

const FavoritesPageLayout=()=>{
    return(
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name='index' options={
                    {
                        headerTitle:"Favorites"
                    }
                }/>
            </Stack>
        </View>
    );
}
export default FavoritesPageLayout;