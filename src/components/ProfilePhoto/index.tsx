import React from 'react';
import {
    ImageProperties, View,
} from 'react-native';

import { ProfileImage } from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface ProfilePhotoProps extends ImageProperties {
    onPress?(): any
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ onPress, ...rest }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <ProfileImage  {...rest} />
        </TouchableWithoutFeedback>
    )
}

export default ProfilePhoto;
