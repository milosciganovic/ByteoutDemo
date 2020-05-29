import React from 'react';
import { Platform, Button, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
    createCollapsibleStack,
} from 'react-navigation-collapsible';
import { NewsScreen } from './NewsScreen';
import { ArticleScreen } from './ArticleScreen';
import { ButtonWithIcon } from '../../../../../components/ButtonWithIcon';

export type AllNewsStackNavScreens = {
    'NewsScreen': undefined;
    'ArticleScreen': { articleId: number } | undefined;
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
                        options={({ route }) => ({headerStyle: { backgroundColor: 'green' }, title: `Article ID: ${route?.params?.articleId}` })}
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


        </Stack.Navigator>
    );
}