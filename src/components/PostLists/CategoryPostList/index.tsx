import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BaseArrayProxy } from '../../../services/base-array-proxy'
import { ApplicationState } from '../../../store'
import { CategoryProxy, CategoriesTypes } from '../../../store/ducks/categories/types'

import CategoryList from '../../CategoryList'

import {
    ContainerView,
    TitleText
} from './styles'

interface CategoryPostListProps {
    title: string
}

const CategoryPostList: React.FC<CategoryPostListProps> = ({ title }) => {

    const dispatch = useDispatch()
    const { array } = useSelector<ApplicationState, BaseArrayProxy<CategoryProxy>>(state => state.categories.data)

    useEffect(() => { dispatch({ type: CategoriesTypes.LOAD_REQUEST }) }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList categories={array} />
        </ContainerView>

        //#endregion
    )

}

export default CategoryPostList

//#region Old code

    // const [categoryPage, setCategoryPage] = useState<number>(0)
    // const [loadingCategories, setLoadingCategories] = useState<boolean>(false)
    // const [categoryData, setCategoryData] = useState<CategoryProxy[]>([])

    // async function loadCategoryData(pageNumber: number = categoryPage) {

    //     setLoadingCategories(true)

    //     const token = await getItemAsync('access_token')
    //     const response = await api.get<CategoryProxy[]>(`categories?page=${categoryPage}`, {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }
    //     })

    //     setCategoryData([
    //         ...categoryData,
    //         ...response.data
    //     ])
    //     setCategoryPage(pageNumber + 1)

    //     setLoadingCategories(false)

    // }


//#endregion
