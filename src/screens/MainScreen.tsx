import React from "react";
import { Text, ScrollView, Button, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavScreens } from ".";


type NavigationProp = StackNavigationProp<RootStackNavScreens, "MainScreen">;

export type MainScreenProps = {
    route: RouteProp<RootStackNavScreens, "MainScreen">;
    navigation: NavigationProp;
}

export function MainScreen({ route, navigation }: MainScreenProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    Main Screen
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}