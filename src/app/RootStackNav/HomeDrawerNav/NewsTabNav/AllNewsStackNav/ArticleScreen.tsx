import React from "react";
import { Text, ScrollView, SafeAreaView, Button } from "react-native";
import { scale } from "react-native-size-matters";

import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { AllNewsStackNavScreens } from '.';
import { NewsTabNavScreens } from "..";
import { HomeDrawerNavScreens } from "../..";
import { RootStackNavScreens } from "src/app/RootStackNav";

export type ArticleScreenRouteProp = RouteProp<AllNewsStackNavScreens, "ArticleScreen">;

export type ArticleScreenNavProp = CompositeNavigationProp<
    StackNavigationProp<AllNewsStackNavScreens, 'NewsScreen'>,
    CompositeNavigationProp<
        MaterialBottomTabNavigationProp<NewsTabNavScreens>,
        CompositeNavigationProp<
            DrawerNavigationProp<HomeDrawerNavScreens>,
            StackNavigationProp<RootStackNavScreens>
        >
    >
>;

export interface ArticleScreenProps {
    route: ArticleScreenRouteProp;
    navigation: ArticleScreenNavProp
}

export function ArticleScreen({ route, navigation }: ArticleScreenProps) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    Article Screen!
                </Text>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    Article ID: {route.params?.articleId}
                </Text>
                <Button title="GO TO ARTICLE 10" onPress={() => navigation.push('ArticleScreen', { articleId: 10 })}/>
            </ScrollView>
        </SafeAreaView>
    );
}