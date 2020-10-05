import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { EditContainer } from './styles';

interface EditIconProps extends TouchableOpacityProps {
    color?: string
}

const EditIcon: React.FC<EditIconProps> = ({
    color = '#46266c',
    ...rest
}) => {
    return (
        <EditContainer
            style={{
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            { ...rest } >
            <MaterialCommunityIcons name="pencil" size={32} color="white" />
        </EditContainer>
    )
}

export default EditIcon;
