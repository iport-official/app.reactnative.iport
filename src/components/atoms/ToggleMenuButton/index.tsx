import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Svg, { Path, Rect } from 'react-native-svg';

interface ToggleMenuButtonProps {
    onPress?(): void
}

const ToggleMenuButton: React.FC<ToggleMenuButtonProps> = ({ onPress }: ToggleMenuButtonProps) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} style={{ padding: 15, borderRadius: 50 }}>
            <Svg width="27" height="27" viewBox="0 0 281 197" fill="none">
                <Path d="M0 23.4167C0 10.484 10.484 0 23.4167 0H257.583C270.516 0 281 10.484 281 23.4167V23.4167C281 36.3493 270.516 46.8333 257.583 46.8333H23.4167C10.484 46.8333 0 36.3493 0 23.4167V23.4167Z" fill="white"/>
                <Rect y="74.9333" width="206.067" height="46.8333" rx="23.4167" fill="white"/>
                <Rect y="149.867" width="252.9" height="46.8333" rx="23.4167" fill="white"/>
            </Svg>
        </TouchableWithoutFeedback>
    )
}

export default ToggleMenuButton
