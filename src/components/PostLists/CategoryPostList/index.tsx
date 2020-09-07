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
                        name: 'React'
                    },
                    {
                        id: '1',
                        name: 'ReactNative'
                    },
                    {
                        id: '2',
                        name: 'Unity'
                    },
                    {
                        id: '3',
                        name: 'Nestjs'
                    },
                    {
                        id: '4',
                        name: 'Angular'
                    }
                ]}
            />
        </ContainerView>
    )
}

export default CategoryPostList
