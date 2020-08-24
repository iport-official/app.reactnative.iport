import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ImageProperties } from 'react-native';

import { ProfileImage } from './styles'

export interface ProfilePhotoProps extends ImageProperties {
    size: number,
    onPress?(): void
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size, onPress, ...rest }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <ProfileImage
                style={{
                    height: size,
                    width: size,
                    borderRadius: size / 2
                }}
                {...rest}
            />
        </TouchableWithoutFeedback>
    )
}

export default ProfilePhoto;
