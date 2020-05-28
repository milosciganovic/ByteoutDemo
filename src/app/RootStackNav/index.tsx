import React from 'react';
import { Platform, Alert } from 'react-native';
import { scale } from 'react-native-size-matters';
import { SubNavigator } from './types/SubNavigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import {HomeDrawerNav, HomeDrawerNavScreens} from './HomeDrawerNav';
import {AboutScreen} from './AboutScreen';
import { ButtonWithIcon } from '../../components/ButtonWithIcon';

export type RootStackNavScreens = {
    'HomeDrawerNav': SubNavigator<HomeDrawerNavScreens>;
    'AboutScreen': undefined; 
};

const Stack = createStackNavigator<RootStackNavScreens>();

export function RootStackNav() {
    return (
        <Stack.Navigator
            mode="modal"
            headerMode="none"
            screenOptions={{
                headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? scale(10) : 0 },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
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
