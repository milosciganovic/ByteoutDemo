import React from "react";
import { Text, ScrollView, Button, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavScreens } from ".";
import { TouchableOpacity } from "react-native-gesture-handler";


type NavigationProp = StackNavigationProp<RootStackNavScreens, "MainScreen">;

export type MainScreenProps = {
    route: RouteProp<RootStackNavScreens, "MainScreen">;
    navigation: NavigationProp;
}

export function MainScreen({ route, navigation }: MainScreenProps) {
    console.log(navigation, 'props')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
                    <Text>Open drawer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('AboutScreen')}>
                    <Text>About</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}