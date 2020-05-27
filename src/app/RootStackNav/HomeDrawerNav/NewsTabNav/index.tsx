import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SubNavigator } from 'src/app/RootStackNav/types/SubNavigator';

import {AllNewsStackNavScreens, AllNewsStackNav} from './AllNewsStackNav'
import {TopNewsScreen} from './TopNewsScreen';

export type NewsTabNavScreens = {
    'AllNewsStackNav': SubNavigator<AllNewsStackNavScreens>
    'TopNewsScreen': undefined;
};

const BottomTab = createBottomTabNavigator<NewsTabNavScreens>();

export function NewsTabNav() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="AllNewsStackNav"
                component={AllNewsStackNav}
                options={{
                    title: 'All News',
                    tabBarIcon: ({focused, color, size:fontSize}) => {
                        const icon = focused ? (
                            <Icon name={"newspaper"} style={{ fontSize, color }} />
                        ) : (
                            <Icon name={"newspaper"} style={{ fontSize, color: 'silver' }} />
                        );
                        return icon;
                    }
                }}
            />
            <BottomTab.Screen
                name="TopNewsScreen"
                component={TopNewsScreen}
                options={{
                    title: 'Top News',
                    tabBarIcon: ({focused, color, size:fontSize}) => {
                        const icon = focused ? (
                            <Icon name={"new-box"} style={{ fontSize, color }} />
                        ) : (
                            <Icon name={"new-box"} style={{ fontSize, color: 'silver' }} />
                        );
                        return icon;
                    }
                }}
            />

        </BottomTab.Navigator>
    );
}