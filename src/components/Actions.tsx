import React from 'react';
import { View, Button } from 'react-native';

interface Props {
    title: string,
    onClick: () => void
}

export function Actions({ title, onClick }: Props) {
    return (
        <View style={{backgroundColor: 'orange', padding: 50}}>
            <Button title={title} onPress={onClick} />
        </View>
    )
}