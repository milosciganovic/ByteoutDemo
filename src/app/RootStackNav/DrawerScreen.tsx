import React from 'react';
import {Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DrawerScreen extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity><Text>News</Text></TouchableOpacity>
                <TouchableOpacity><Text>Settings</Text></TouchableOpacity>
            </View>
        )
    }
}

export default DrawerScreen;