import styled from 'styled-components'
import { FlatList } from 'react-native'

import { CategoryItemProps } from './CategoryItem'

import { colors } from '../../styles'

export const ContainerFlatList = styled(FlatList as new () => FlatList<CategoryItemProps>)`
    overflow: visible;
    height: 35px;
    border-radius: 23px;
    margin: 0 5px;
    margin-top: 20px;
`
