import React from 'react';
import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { NewsScreen } from './NewsScreen';
import { ArticleScreen } from './ArticleScreen';

export type AllNewsStackNavScreens = {
    'News': undefined;
    'Article': {articleId: number} | undefined;
};

const Stack = createStackNavigator<AllNewsStackNavScreens>();

export function AllNewsStackNav() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? scale(10) : 0 },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="News"
                component={NewsScreen}
            />
            <Stack.Screen
                name="Article"
                component={ArticleScreen}
            />

        </Stack.Navigator>
    );
}