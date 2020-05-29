import React from 'react';
import { IconButton } from 'react-native-paper';

type Props = {
    onClick: () => void;
}

export class ButtonWithIcon extends React.PureComponent<Props> {
    render() {
        return (
            <IconButton
                accessibilityStates
                icon="information-variant"
                size={30}
                onPress={this.props.onClick}
            />
        )
    }
}
