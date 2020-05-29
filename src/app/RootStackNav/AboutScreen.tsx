import React from "react";
import { Text, ScrollView, SafeAreaView, Button, Animated, View, TextInput } from "react-native";
import { scale } from "react-native-size-matters";
import { StackNavigationProp, } from "@react-navigation/stack";
import { RootStackNavScreens } from ".";
import { RouteProp } from "@react-navigation/native";

export type AboutScreenRouteProp = RouteProp<RootStackNavScreens, 'AboutScreen'>;

export type AboutScreenNavProp = StackNavigationProp<RootStackNavScreens>

export interface AboutScreenProps {
    route: AboutScreenRouteProp;
    navigation: AboutScreenNavProp;
}

export function AboutScreen({ route, navigation }: AboutScreenProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                About Screen
                </Text>
            <Button onPress={() => navigation.goBack()} title="X CLOSE MODAL" />
        </SafeAreaView>
    );
}