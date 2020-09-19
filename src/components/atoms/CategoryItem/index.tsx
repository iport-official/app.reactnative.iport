import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
    ContainerView,
    CategoryNameText,
    BorderBottomView
} from './styles';

import { colors } from '../../../styles';

export interface CategoryItemProps {
    name: string
    selected: boolean
    onPress(): void
}

const CategoryItem: React.FC<CategoryItemProps> = ({ onPress, selected, name }) => {

    return (
        //#region JSX

        <TouchableWithoutFeedback onPress={onPress}>
            <ContainerView>
                <CategoryNameText
                    style={{
                        color: selected
                            ? colors.lighterVividPurple
                            : '#fff',
                        textShadowColor: colors.grayPurple,
                        textShadowRadius: 15,
                        textShadowOffset: selected
                            ? {
                                width: 1,
                                height: 1
                            }
                            : {
                                width: 0,
                                height: 0
                            }
                    }}
                >
                    {name}
                </CategoryNameText>
                {selected && <BorderBottomView
                    pointerEvents="none"
                />}
            </ContainerView>
        </TouchableWithoutFeedback>

        //#endregion
    )

}

export default CategoryItem
