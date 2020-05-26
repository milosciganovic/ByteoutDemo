import React from "react";
import { Text, ScrollView, SafeAreaView } from "react-native";
import { scale } from "react-native-size-matters";

export function AboutScreen(){
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={{ fontSize: scale(22), fontWeight: 'bold' }}>
                    About Screen 
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}