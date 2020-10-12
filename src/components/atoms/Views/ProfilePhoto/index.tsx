import React from 'react';
import { ImageProps } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { ProfileImage } from './styles';

export interface ProfilePhotoProps extends ImageProps {
    size: number,
    onPress?(): void
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size, onPress, ...rest }: ProfilePhotoProps) => {
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
