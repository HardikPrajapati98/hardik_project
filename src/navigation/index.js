// In App.js in a new project
import * as React from "react";
import {
    Text,
    useColorScheme, View,
} from "react-native";
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
    useTheme,
} from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const NavigationContainers = ({navigation, route}) => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationContainers;
