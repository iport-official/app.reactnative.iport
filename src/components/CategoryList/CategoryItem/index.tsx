import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import {
    ContainerView,
    CategoryNameText,
    BorderBottomView
} from './styles'

export interface CategoryItemProps {
    id: string
    name: string
    onPress?(value: boolean): void
}

const CategoryItem: React.FC<CategoryItemProps> = ({ onPress, name }) => {
    const [isActive, setIsActive] = useState(false)

    function handleOnPress() {
        setIsActive(!isActive)
        if (onPress)
            onPress(isActive)
    }

    return (
        <TouchableWithoutFeedback
            onPress={handleOnPress}
        >
            <ContainerView>
                <CategoryNameText>{name}</CategoryNameText>
                {isActive && <BorderBottomView
                    pointerEvents="none"
                />}
            </ContainerView>
        </TouchableWithoutFeedback>
    )
}

export default CategoryItem
