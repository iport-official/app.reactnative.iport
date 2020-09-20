import React from 'react'

import TextField from '../../atoms/TextField'

import { FontAwesome } from '@expo/vector-icons'; 

import { ContainerView } from './styles'
import { colors } from '../../../styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ContactsListProps {
    placeholder: string
    contactTypes: string[]
    onPressMinusButton(): void
}

const ContactsItem: React.FC<ContactsListProps> = ({ placeholder, contactTypes, onPressMinusButton }) => {
    return (
        <ContainerView>
            <TextField
                fieldWidth="54%"
                placeholder={placeholder}
            />
            <TextField
                fieldWidth="35%"
                placeholder="Tipo"
            />
            <TouchableWithoutFeedback
                onPress={onPressMinusButton}
            >
                <FontAwesome
                    name="minus-circle"
                    size={33}
                    color={colors.vividPurple}
                />
            </TouchableWithoutFeedback>
            
        </ContainerView>
    )
}

export default ContactsItem
