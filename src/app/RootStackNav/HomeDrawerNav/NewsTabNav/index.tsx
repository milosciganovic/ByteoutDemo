import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { SubNavigator } from 'src/app/RootStackNav/types/SubNavigator';

import { AllNewsStackNavScreens, AllNewsStackNav } from './AllNewsStackNav'
import { TopNewsScreen } from './TopNewsScreen';

export type NewsTabNavScreens = {
    'AllNewsStackNav': SubNavigator<AllNewsStackNavScreens>
    'TopNewsScreen': undefined;
};

const BottomTab = createMaterialBottomTabNavigator<NewsTabNavScreens>();

export function NewsTabNav() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="AllNewsStackNav"
                component={AllNewsStackNav}
                options={(route) => ({
                    tabBarLabel: 'All News',
                    tabBarIcon: ({ focused, color,  }) =>
                        <Icon name={"newspaper"} style={{ color }} />
                })}
            />
            <BottomTab.Screen
                name="TopNewsScreen"
                component={TopNewsScreen}
                options={{
                    tabBarLabel: 'Top News',
                    tabBarIcon: ({ focused, color,  }) =>
                        <Icon name={"new-box"} style={{ color }} />
                }}
            />

        </BottomTab.Navigator>
    );
}