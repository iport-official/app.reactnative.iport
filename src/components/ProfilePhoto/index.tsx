import React from 'react';
import {
    ImageProperties, View,
} from 'react-native';

import {
    ImageTouchableWithoutFeedback,
    ProfileImage
} from './styles'

export interface ProfilePhotoProps extends ImageProperties {
    onPress?(): any
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ onPress, ...rest }) => {
    return (
        <ImageTouchableWithoutFeedback onPress={onPress}>
            <ProfileImage  {...rest} />
        </ImageTouchableWithoutFeedback>
    )
}

export default ProfilePhoto;
