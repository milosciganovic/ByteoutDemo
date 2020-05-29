

import React from "react";
import { Text, Animated, View, TextInput } from "react-native";
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AllNewsStackNavScreens } from '.';
import { HomeDrawerNavScreens } from '../..';
import { RootStackNavScreens } from "src/app/RootStackNav";
import {
    useCollapsibleStack,
    CollapsibleStackSub,
} from 'react-navigation-collapsible';
import { NewsTabNavScreens } from "..";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";

export type SubHeaderTestScreenNavProp = CompositeNavigationProp<
    StackNavigationProp<AllNewsStackNavScreens, 'SubHeaderTestScreen'>,
    CompositeNavigationProp<
        MaterialBottomTabNavigationProp<NewsTabNavScreens>,
        CompositeNavigationProp<
            DrawerNavigationProp<HomeDrawerNavScreens>,
            StackNavigationProp<RootStackNavScreens>
        >
    >
>;

export interface SubHeaderTestScreenProps {
    navigation: SubHeaderTestScreenNavProp;
}

const data: number[] = [];
for (let i = 0; i < 100; i++) {
    data.push(i);
}

export function SubHeaderTestScreen({ navigation }: SubHeaderTestScreenProps) {
    const {
        onScroll,
        containerPaddingTop,
        scrollIndicatorInsetTop
    } = useCollapsibleStack();
    return (
        <>
            <Animated.FlatList
                onScroll={onScroll}
                contentContainerStyle={{ paddingTop: containerPaddingTop }}
                scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
                data={data}
                renderItem={({ item }: any) => (
                    <View
                        style={{
                            width: '100%',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                        
                        }}>
                        <Text
                            style={{
                                fontSize: 22,
                            }}>
                            {item}
                        </Text>
                    </View>
                )}
                keyExtractor={(item: any) => item.toString()}
            />
            <CollapsibleStackSub>
                <View
                    style={{ padding: 13, width: '100%', height: 60, backgroundColor: 'green' }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            flex: 1,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                        }}>
                        <TextInput placeholder="search here" />
                    </View>
                </View>
            </CollapsibleStackSub>
        </>
    );
}