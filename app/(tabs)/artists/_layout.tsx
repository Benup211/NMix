import {View} from 'react-native';
import { Stack } from 'expo-router';
import { defaultStyles } from '@/styles';

const ArtistsPageLayout=()=>{
    return(
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name='index' options={
                    {
                        headerTitle:"Artists"
                    }
                }/>
            </Stack>
        </View>
    );
}
export default ArtistsPageLayout;