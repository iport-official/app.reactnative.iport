import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons'; 

import { ContainerView } from './styles'

import TextField from '../../atoms/TextField'

import { colors } from '../../../styles'

interface ContactsItemProps {
    placeholder: string
    contactTypes: string[]
    onPressMinusButton(): void
}

const ContactsItem: React.FC<ContactsItemProps> = ({ placeholder, contactTypes, onPressMinusButton }) => {
    return (
        //#region JSX

        <ContainerView>
            <TextField
                fieldWidth="54%"
                placeholder={placeholder}
            />
            <TextField
                fieldWidth="35%"
                placeholder="Tipo"
            />
            <TouchableWithoutFeedback onPress={onPressMinusButton}>
                <FontAwesome
                    name="minus-circle"
                    size={33}
                    color={colors.vividPurple}
                />
            </TouchableWithoutFeedback>
        </ContainerView>

        //#endregion
    )
}

export default ContactsItem
