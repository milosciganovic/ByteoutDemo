import React from 'react';
import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import { SubNavigator } from './types/SubNavigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {DrawerNav, DrawerNavScreens} from './Drawer';

import About from '../../screens/About';
import { MainScreen } from '../../screens/MainScreen';


export type RootStackNavScreens = {
    'AboutScreen': undefined; 
    'MainScreen': undefined;
    'DrawerNavigator': {nav: object} | undefined
    // 'DrawerNavigator': 
    // 'ExampleScreen': { param1: number } | undefined;
    // 'ExampleDrawerNav': SubNavigator<ExampleDrawerNavScreens>;
};

const Stack = createStackNavigator<RootStackNavScreens>();


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
            {/* <DrawerNav /> */}
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNav}
            />
            <Stack.Screen
                name="AboutScreen"
                component={About}
            />


        </Stack.Navigator>
    );
}
