import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
    ContainerView,
    CategoryNameText,
    BorderBottomView
} from './styles';

import { colors } from '../../../styles';

export interface CategoryItemProps {
    id: string
    name: string
    onPress?(value: boolean): void
}

const CategoryItem: React.FC<CategoryItemProps> = ({ onPress, name }) => {
    const [isActive, setIsActive] = useState(false);

    function handleOnPress() {
        setIsActive(!isActive);
        if (onPress)
            onPress(isActive);
    }

    return (
        <TouchableWithoutFeedback
            onPress={handleOnPress}
        >
            <ContainerView>
                <CategoryNameText style={{ color: isActive ? colors.lighterVividPurple : '#fff',
                    textShadowColor: colors.grayPurple,
                    textShadowRadius: 15,
                    textShadowOffset: isActive ? { width: 1, height: 1 } : { width: 0, height: 0 } }}
                    >{name}</CategoryNameText>
                {isActive && <BorderBottomView
                    pointerEvents="none"
                />}
            </ContainerView>
        </TouchableWithoutFeedback>
    )
}

export default CategoryItem
