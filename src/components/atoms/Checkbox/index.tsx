import React, { useState } from 'react';
import { TouchableWithoutFeedbackProps, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { CheckboxStyle } from './styles';

import { colors } from '../../../styles';

interface CheckboxProperties extends TouchableWithoutFeedbackProps {
    checked: boolean
}

const Checkbox: React.FC<CheckboxProperties> = ({ checked, ...rest }) => {

    return (
        <CheckboxStyle { ...rest } >
            { checked ? <Octicons name='check' size={18} color={colors.grayPurple} style={{ alignSelf: "center", opacity: 1 }}/> :
                <Octicons name='check' size={18} color={colors.grayPurple} style={{ alignSelf: "center", opacity: 0 }}/> }
        </CheckboxStyle>
    )
}

export default Checkbox;
