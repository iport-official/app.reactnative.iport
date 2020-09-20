import React from 'react'
import Checkbox from '../Checkbox'

import {
    CheckmarkContainerView,
    CheckmarkTitleText
} from './styles'

interface CheckmarkProps {
    title: string
    checked: boolean
    onCheck(): void
}

const Checkmark: React.FC<CheckmarkProps> = ({ title, checked, onCheck }) => {
    return (
        <CheckmarkContainerView onTouchStart={onCheck}>
            <Checkbox checked={checked} />
            <CheckmarkTitleText>{title}</CheckmarkTitleText>
        </CheckmarkContainerView>
    )
}

export default Checkmark
