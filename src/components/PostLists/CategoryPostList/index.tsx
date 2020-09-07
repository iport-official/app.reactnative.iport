import React, { useState, useEffect } from 'react'
import { getItemAsync } from 'expo-secure-store'

import {
    ContainerView,
    TitleText
} from './styles'
import CategoryList from '../../CategoryList'

import { CategoryProxy } from '../../../services/Category/category.proxy'

import api from '../../../services/api'

interface CategoryPostListProps {
    title: string
}

const CategoryPostList: React.FC<CategoryPostListProps> = ({ title }) => {

    const [categoryPage, setCategoryPage] = useState<number>(0)
    const [loadingCategories, setLoadingCategories] = useState<boolean>(false)
    const [categoryData, setCategoryData] = useState<CategoryProxy[]>([])

    async function loadCategoryData(pageNumber: number = categoryPage) {

        setLoadingCategories(true)

        const token = await getItemAsync('access_token')
        const response = await api.get<CategoryProxy[]>(`categories?page=${categoryPage}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })

        setCategoryData([
            ...categoryData,
            ...response.data
        ])
        setCategoryPage(pageNumber + 1)

        setLoadingCategories(false)

    }

    useEffect(() => { loadCategoryData() }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList
                categories={categoryData}
            />
        </ContainerView>

        //#endregion
    )

}

export default CategoryPostList
