import React from "react";
import { Text, ScrollView, Button, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";

export function TopNewsScreen() {
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