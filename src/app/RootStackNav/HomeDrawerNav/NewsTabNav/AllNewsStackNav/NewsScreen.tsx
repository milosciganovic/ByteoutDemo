import React from "react";
import { Text, ScrollView, Button, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";

import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AllNewsStackNavScreens } from '.';
import { HomeDrawerNavScreens } from '../..';
import { RootStackNavScreens } from "src/app/RootStackNav";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NewsTabNavScreens } from "..";

export type NewsScreenNavProp = CompositeNavigationProp<
    StackNavigationProp<AllNewsStackNavScreens, 'NewsScreen'>,
    CompositeNavigationProp<
        BottomTabNavigationProp<NewsTabNavScreens>,
        CompositeNavigationProp<
            DrawerNavigationProp<HomeDrawerNavScreens>,
            StackNavigationProp<RootStackNavScreens>
        >
    >
>;

export interface NewsScreenProps {
    navigation: NewsScreenNavProp;
}

export function NewsScreen({ navigation }: NewsScreenProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    News Screen
                </Text>
                <Button title="Go to article" onPress={() => navigation.navigate('ArticleScreen', { articleId: 3 })} />
                <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
                <Button title="Go to settings" onPress={() => navigation.navigate('SettingsScreen')} />
                <Button title="Open About" onPress={() => navigation.navigate('AboutScreen')} />
            </ScrollView>
        </SafeAreaView>
    );
}