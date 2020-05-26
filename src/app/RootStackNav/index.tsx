import React from 'react';
import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import { SubNavigator } from './types/SubNavigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from '../../screens/About';
import { MainScreen } from '../../screens/MainScreen';

export type RootStackNavScreens = {
    'AboutScreen': undefined; // Malo pojasnjenje za ovaj deo mi treba 
    'MainScreen': undefined;
    // 'ExampleScreen': { param1: number } | undefined;
    // 'ExampleDrawerNav': SubNavigator<ExampleDrawerNavScreens>;
};

const Stack = createStackNavigator<RootStackNavScreens>();

// da li se drawer pravi direktno ovde ? 
const Drawer = createDrawerNavigator<RootStackNavScreens>();

export function RootStackNav() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? scale(10) : 0 },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                ...TransitionPresets.SlideFromRightIOS,
                // ...TransitionPresets.ScaleFromCenterAndroid,
            }}
        >
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />
            <Stack.Screen
                name="AboutScreen"
                component={About}
            />

        </Stack.Navigator>
    );
}
