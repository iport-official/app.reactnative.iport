import React from 'react'
import { View, Text } from 'react-native'

export interface CategoryItemProps {
    name: string
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name }) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default CategoryItem
