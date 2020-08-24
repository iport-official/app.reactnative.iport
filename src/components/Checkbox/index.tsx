import React, { useState } from 'react';
import { TouchableWithoutFeedbackProps, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { CheckboxStyle } from './styles';
import { colors } from '../../styles';

interface CheckboxProperties extends TouchableWithoutFeedbackProps {}

const Checkbox: React.FC<CheckboxProperties> = ({ ...rest }) => {
    const [checked, setChecked] = useState(false);

    return (
        <CheckboxStyle onTouchStart={() => setChecked(!checked)} { ...rest } >
            { checked ? <Octicons name='check' size={18} color={colors.grayPurple} style={{ alignSelf: "center", opacity: 1 }}/> :
                <Octicons name='check' size={18} color={colors.grayPurple} style={{ alignSelf: "center", opacity: 0 }}/> }
        </CheckboxStyle>
    )
}

export default Checkbox;
