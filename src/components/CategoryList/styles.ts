import styled from 'styled-components'
import { FlatList } from 'react-native'

import { CategoryItemProps } from './CategoryItem'

import { colors } from '../../styles'

export const ContainerFlatList = styled(FlatList as new () => FlatList<CategoryItemProps>)`
    overflow: hidden;
    height: 45px;
    border-radius: 23px;
    /* margin: 0 7px; */
    margin-top: 20px;
`
