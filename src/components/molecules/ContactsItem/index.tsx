import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { FontAwesome } from '@expo/vector-icons';

import { colors } from '../../../styles'
import { ContainerView } from './styles'

import TextField from '../../atoms/Inputs/TextField'

interface ContactsItemProps {
    placeholder: string;
    contactTypes: string[];
    onPressMinusButton(): void;
    onContactChange(contact: { value: string, contactType: string }): void;
}

const ContactsItem: React.FC<ContactsItemProps> = ({
    placeholder,
    contactTypes,
    onPressMinusButton,
    onContactChange,
}: ContactsItemProps) => {

    const [value, setValue] = useState('')
    const [contactType, setContactType] = useState('')

    function handleOnValueChange(value: string) {
        setValue(value)
        onContactChange({ value, contactType })
    }

    function hadleOnContactTypeChange(contactType: string) {
        setContactType(contactType)
        onContactChange({ value, contactType })
    }

    return (
        //#region JSX

        <ContainerView>
            <TextField
                fieldWidth="54%"
                placeholder={placeholder}
                onTextChange={handleOnValueChange}
            />
            <TextField
                fieldWidth="35%"
                placeholder="Tipo"
                onTextChange={hadleOnContactTypeChange}
            />
            <TouchableWithoutFeedback onPress={onPressMinusButton}>
                <FontAwesome
                    name="minus-circle"
                    size={28}
                    color={colors.vividPurple}
                />
            </TouchableWithoutFeedback>
        </ContainerView>

        //#endregion
    )
}

export default ContactsItem
