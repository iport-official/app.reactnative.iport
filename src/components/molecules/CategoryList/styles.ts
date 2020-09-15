import styled from 'styled-components'
import { FlatList } from 'react-native'

import { CategoryProxy } from '../../../store/ducks/categories/types'

export const ContainerFlatList = styled(FlatList as new () => FlatList<CategoryProxy>)`
    overflow: visible;
    height: 35px;
    border-radius: 23px;
    margin: 0 5px;
    margin-top: 20px;
`
