import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
    return (
        <SafeAreaProvider>
            <RootLayout />
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
};

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default App;