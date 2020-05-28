import React, {useState} from 'react';
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
    const [showTab, setShowTab] = useState(true);

    return (
        <BottomTab.Navigator
            shifting={true}
            barStyle={{display:(showTab?'flex':'none')}}
        >
            <BottomTab.Screen
                name="AllNewsStackNav"
                component={AllNewsStackNav}
                listeners={{
                    state: state => {
                        // console.log(JSON.stringify(e, null, 4));
                        let data: any = state?.data;
                        let routes = data?.state?.routes;

                        setShowTab(true);

                        if (routes && routes.length > 0 && routes[0].name === 'AllNewsStackNav') {
                            let allNewsStackNavState = routes[0];
                            let allNewsStackNavStateRoutes = allNewsStackNavState?.state?.routes;
                            if (allNewsStackNavStateRoutes && allNewsStackNavStateRoutes[1]) {
                                if (allNewsStackNavStateRoutes[1].name === 'ArticleScreen') {
                                    setShowTab(false);
                                }
                            }
                        }
                    },
                  }}
                options={({ route, navigation }) => {
                    return {
                        tabBarLabel: 'All News',
                        tabBarIcon: ({ focused, color, }) =>
                            <Icon name={"newspaper"} style={{ color }} />
                    };
                }}
            />
            <BottomTab.Screen
                name="TopNewsScreen"
                component={TopNewsScreen}
                options={{
                    tabBarLabel: 'Top News',
                    tabBarIcon: ({ focused, color, }) =>
                        <Icon name={"new-box"} style={{ color }} />
                }}
            />

        </BottomTab.Navigator>
    );
}