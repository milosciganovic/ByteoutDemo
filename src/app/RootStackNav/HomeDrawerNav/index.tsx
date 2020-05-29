import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SubNavigator } from '../types/SubNavigator';

import { NewsTabNavScreens, NewsTabNav } from './NewsTabNav';
import { SettingsScreen } from './SettingsScreen';

export type HomeDrawerNavScreens = {
    'NewsTabNav': SubNavigator<NewsTabNavScreens>
    'SettingsScreen': undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerNavScreens>();

export function HomeDrawerNav() {
    return (
        <Drawer.Navigator drawerType="back"  >
            <Drawer.Screen
                name="NewsTabNav"
                component={NewsTabNav}
            />
            <Drawer.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title:'Settings'
                }}
            />
        </Drawer.Navigator>
    );
}