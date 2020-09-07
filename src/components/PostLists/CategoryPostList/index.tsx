import React from 'react'

import {
    ContainerView,
    TitleText
} from './styles'
import CategoryList from '../../CategoryList'

interface CategoryPostListProps {
    title: string
}

const CategoryPostList: React.FC<CategoryPostListProps> = ({ title }) => {
    return (
        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList
                categories={[
                    {
                        id: '0',
                        name: 'React',
                        category: 'React'
                    },
                    {
                        id: '1',
                        name: 'ReactNative',
                        category: 'ReactNative'
                    },
                    {
                        id: '2',
                        name: 'Unity',
                        category: 'Unity'
                    },
                    {
                        id: '3',
                        name: 'Nestjs',
                        category: 'RNestjseact'
                    },
                    {
                        id: '4',
                        name: 'Angular',
                        category: 'Angular'
                    }
                ]}
            />
        </ContainerView>
    )
}

export default CategoryPostList
