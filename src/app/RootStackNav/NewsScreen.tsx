import React from 'react';
import {Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewsScreen({navigation}){
        return(
            <View>
                <TouchableOpacity onPress={navigation}><Text>News</Text></TouchableOpacity>
                {/* <TouchableOpacity><Text>Settings</Text></TouchableOpacity> */}
            </View>
        )
}

export default NewsScreen;