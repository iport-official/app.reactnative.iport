import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState } from '../../../store'
import { CategoriesTypes } from '../../../store/ducks/categories/types'

import CategoryList from '../../CategoryList'

import {
    ContainerView,
    TitleText
} from './styles'


interface CategoryPostListProps {
    title: string
}

const CategoryPostList: React.FC<CategoryPostListProps> = ({ title }) => {

    const categories = useSelector((state: ApplicationState) => state.categories.data.array)
    const dispatch = useDispatch()

    function loadRequest() {
        dispatch({ type: CategoriesTypes.LOAD_REQUEST })
    }

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

    useEffect(() => { loadRequest() }, [])

    return (
        //#region JSX

        <ContainerView>
            <TitleText>{title}</TitleText>
            <CategoryList categories={categories} />
        </ContainerView>

        //#endregion
    )

}

// const mapStateToProps = (state: ApplicationState) => ({
//     categories: state.categories.data
// })

// const mapDispatchToProps = (dispatch: Dispatch) =>
//     bindActionCreators(CategoriesActions, dispatch)

export default CategoryPostList
