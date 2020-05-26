import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SubNavigator } from '../../types/SubNavigator';

import {NewsTabNavScreens, NewsTabNav} from './NewsTabNav';
import { SettingsScreen } from './SettingsScreen';

export type HomeDrawerNavScreens = {
    'News': SubNavigator<NewsTabNavScreens>
    'Settings': undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerNavScreens>();

export function HomeDrawerNav() {
    return (
        <Drawer.Navigator drawerType="front">
            <Drawer.Screen
                name="News"
                component={NewsTabNav}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Drawer.Navigator>
    );
}