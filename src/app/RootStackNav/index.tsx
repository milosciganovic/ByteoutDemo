import React from 'react';
import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import { SubNavigator } from './types/SubNavigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import {HomeDrawerNav, HomeDrawerNavScreens} from './RootTabNav/HomeDrawerNav';
import {AboutScreen} from './AboutScreen';

export type RootStackNavScreens = {
    'HomeDrawerNav': SubNavigator<HomeDrawerNavScreens>;
    'AboutScreen': undefined; 
};

const Stack = createStackNavigator<RootStackNavScreens>();


export function RootStackNav() {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? scale(10) : 0 },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="HomeDrawerNav"
                component={HomeDrawerNav}
            />
            <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
            />


        </Stack.Navigator>
    );
}
