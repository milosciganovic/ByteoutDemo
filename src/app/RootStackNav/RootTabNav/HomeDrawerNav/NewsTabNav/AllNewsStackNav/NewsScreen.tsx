import React from "react";
import { Text, ScrollView, Button, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";

import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AllNewsStackNavScreens } from '.';
import { HomeDrawerNavScreens } from '../../../HomeDrawerNav';
import { RootStackNavScreens } from "src/app/RootStackNav";

export type NewsScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<AllNewsStackNavScreens, 'News'>,
    DrawerNavigationProp<HomeDrawerNavScreens & RootStackNavScreens>
>;

export interface NewsScreenProps {
    navigation: NewsScreenNavigationProp;
}

export function NewsScreen({ navigation }: NewsScreenProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    News Screen
                </Text>
                <Button title="Go to article" onPress={() => navigation.navigate('Article', { articleId: 3 })} />
                <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
                <Button title="Go to settings" onPress={() => navigation.navigate('Settings')} />
                <Button title="Open About" onPress={() => navigation.navigate('AboutScreen')} />
            </ScrollView>
        </SafeAreaView>
    );
}