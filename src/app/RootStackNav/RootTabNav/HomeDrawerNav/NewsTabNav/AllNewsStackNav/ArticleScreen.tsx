import React from "react";
import { Text, ScrollView, Button, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";

import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { AllNewsStackNavScreens } from '.';

export type ArticleScreenRouteProp = RouteProp<AllNewsStackNavScreens, "Article">;

export interface ArticleScreenProps {
    route: ArticleScreenRouteProp;
}

export function ArticleScreen({ route }: ArticleScreenProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    Article Screen!
                </Text>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    Article ID: {route.params?.articleId}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}