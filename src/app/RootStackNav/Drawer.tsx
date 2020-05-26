import React from 'react';
import { scale } from 'react-native-size-matters';
import { SubNavigator } from './types/SubNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../../screens/About';
import DrawerScreen from './DrawerScreen';
import NewsScreen from './NewsScreen';

export type DrawerNavScreens = {
    'DrawerScreen': undefined;
    'NewsScreen': undefined
    // 'ExampleScreen': { param1: number } | undefined;
    // 'ExampleStackNav': SubNavigator<ExampleStackNavScreens>;
};

const Drawer = createDrawerNavigator<DrawerNavScreens>();

export function DrawerNav() {
    return (
        <Drawer.Navigator drawerType="front" initialRouteName="DrawerScreen">
            <Drawer.Screen
                name="NewsScreen"
                component={NewsScreen}
            />
        </Drawer.Navigator>
    );
}