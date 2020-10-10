import React from 'react'

import {
    CheckmarkContainerView,
    CheckmarkTitleText
} from './styles'

import Checkbox from '../Checkbox'

interface CheckmarkProps {
    title: string
    checked: boolean
    onCheck(): void
}

const Checkmark: React.FC<CheckmarkProps> = ({ title, checked, onCheck }: CheckmarkProps) => {
    return (
        <CheckmarkContainerView onTouchStart={onCheck}>
            <Checkbox checked={checked} />
            <CheckmarkTitleText>{title}</CheckmarkTitleText>
        </CheckmarkContainerView>
    )
}

export default Checkmark
