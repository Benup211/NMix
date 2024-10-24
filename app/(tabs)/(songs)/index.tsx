import { defaultStyles } from "@/styles";
import { View,Text,StyleSheet } from "react-native";

export default function SongsPage(){
    return(
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>
                Songs Page
            </Text>
        </View>
    );
}