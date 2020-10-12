import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { Octicons } from '@expo/vector-icons';

import { colors } from '../../../../styles';
import { CheckboxStyle } from './styles';

interface CheckboxProperties extends TouchableWithoutFeedbackProps {
    checked: boolean
}

const Checkbox: React.FC<CheckboxProperties> = ({ checked, ...rest }: CheckboxProperties): JSX.Element => {

    return (
        <CheckboxStyle {...rest} >
            { checked
                ? <Octicons
                    name='check'
                    size={18}
                    color={colors.grayPurple}
                    style={{
                        alignSelf: "center",
                        opacity: 1
                    }} />
                : <Octicons
                    name='check'
                    size={18}
                    color={colors.grayPurple}
                    style={{
                        alignSelf: "center",
                        opacity: 0
                    }}
                />}
        </CheckboxStyle>
    )
}

export default Checkbox;
