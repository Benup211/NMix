import { defaultStyles } from "@/styles";
import { View,Text,StyleSheet } from "react-native";

export default function ArtistsPage(){
    return(
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>
                Artists Page
            </Text>
        </View>
    );
}