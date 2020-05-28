import React from 'react';
import { IconButton } from 'react-native-paper';

type Props={
    onClick: () => void;
}

export function ButtonWithIcon({onClick} : Props){
    return(
        <IconButton 
            accessibilityStates
            icon="information-variant"
            size={30}
            onPress={onClick}
        />
    )
}