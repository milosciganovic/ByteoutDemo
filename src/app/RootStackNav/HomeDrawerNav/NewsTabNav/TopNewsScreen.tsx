import React from "react";
import { Text, ScrollView, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";

import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import {NewsTabNavScreens} from '.';
import { HomeDrawerNavScreens } from "..";
import { RootStackNavScreens } from "../..";

export type TopNewsScreenRouteProp = RouteProp<NewsTabNavScreens, 'TopNewsScreen'>;

export type TopNewsScreenNavProp = CompositeNavigationProp<
    MaterialBottomTabNavigationProp<NewsTabNavScreens, 'TopNewsScreen'>,
    CompositeNavigationProp<
        DrawerNavigationProp<HomeDrawerNavScreens>,
        StackNavigationProp<RootStackNavScreens>
    >
>;

export interface TopNewsScreenProps{
    route: TopNewsScreenRouteProp;
    navigation: TopNewsScreenNavProp;
}

export function TopNewsScreen({route, navigation}:TopNewsScreenProps) {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    Top News 
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}