import React from 'react';
import { Platform, Button, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import {  } from 'react-navigation-collapsible';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
    createCollapsibleStack,
    createCollapsibleStackSub
} from 'react-navigation-collapsible';
import { NewsScreen } from './NewsScreen';
import { SubHeaderTestScreen } from './SubHeaderTestScreen';
import { ArticleScreen } from './ArticleScreen';
import { ButtonWithIcon } from '../../../../../components/ButtonWithIcon';

export type AllNewsStackNavScreens = {
    'NewsScreen': undefined;
    'ArticleScreen': { articleId: number } | undefined;
    'SubHeaderTestScreen': undefined;
};

const Stack = createStackNavigator<AllNewsStackNavScreens>();

export function AllNewsStackNav() {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={({ navigation }) => ({
                headerLeftContainerStyle: { paddingLeft: Platform.OS === 'ios' ? scale(10) : 0 },
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerRight: () => (<ButtonWithIcon onClick={() => { navigation.navigate('AboutScreen') }} />),
                ...TransitionPresets.SlideFromRightIOS,
            })}
        >
            <Stack.Screen
                name="NewsScreen"
                component={NewsScreen}
            />
            {
                createCollapsibleStack(
                    <Stack.Screen
                        initialParams={{ articleId: 42 }}
                        options={({ route }) => ({ headerStyle: { backgroundColor: 'green' }, title: `Article ID: ${route?.params?.articleId}` })}
                        name="ArticleScreen"
                        component={ArticleScreen}
                    />,
                    {
                        collapsedColor: 'red' /* Optional */,
                        useNativeDriver: true,
                        key: "ArticleScreen",
                    }

                )

            }
            {
                createCollapsibleStackSub(
                    <Stack.Screen
                        options={({ route }) => ({ headerStyle: { backgroundColor: 'green' }, title: 'TEST SCREEN (SUB-HEADER)'})}
                        name="SubHeaderTestScreen"
                        component={SubHeaderTestScreen}
                    />,
                    {
                        collapsedColor: 'red',
                        useNativeDriver: true,
                        key: "ArticleScreen",
                    }
                )

            }


        </Stack.Navigator>
    );
}