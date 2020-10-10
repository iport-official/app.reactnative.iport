import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { EditContainer } from './styles';

interface EditIconProps extends TouchableOpacityProps {
    color?: string;
    size?: number;
    iconSize?: number;
}

const EditIcon: React.FC<EditIconProps> = ({
    color = '#46266c',
    size = 50,
    iconSize = 32,
    ...rest
}: EditIconProps) => {
    return (
        <EditContainer
            style={{
                backgroundColor: color
            }}
            activeOpacity={0.8}
            size={size}
            { ...rest } >
            <MaterialCommunityIcons name="pencil" size={iconSize} color="white" />
        </EditContainer>
    )
}

export default EditIcon;
