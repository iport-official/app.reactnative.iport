import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import {
    ContainerView,
    HeaderView,
    TitleText
} from './styles'

import ContactsItem from '../../molecules/ContactsItem'

import { colors } from '../../../styles';

export interface Contact {
    value: string
    contactType: string
}

interface ContactsListProps {
    title: string
    placeholder: string
    contactTypes: string[]
    onUpdateContacts(contacts: Contact[]): void
}

const ContactsList: React.FC<ContactsListProps> = ({
    title,
    placeholder,
    contactTypes,
    onUpdateContacts
}) => {

    const [contacts, setContacts] = useState<Contact[]>([{
        value: "",
        contactType: ""
    }])

    useEffect(() => { onUpdateContacts(contacts) }, [contacts])

    function handleOnPressPlusButton() {
        setContacts([...contacts, { value: "", contactType: "" }])
    }

    function handleOnPressMinusButton(index: number) {
        setContacts(contacts.filter((_element, i) => i !== index))
    }

    return (
        //#region JSX

        <ContainerView>
            <HeaderView>
                <TitleText>{title}</TitleText>
                <TouchableWithoutFeedback onPress={handleOnPressPlusButton}>
                    <FontAwesome
                        name="plus-circle"
                        size={33}
                        color={colors.vividPurple}
                    />
                </TouchableWithoutFeedback>
            </HeaderView>

            {contacts.map((_contact, index) => {
                return (
                    <ContactsItem
                        key={index}
                        placeholder={placeholder}
                        contactTypes={contactTypes}
                        onPressMinusButton={() => { handleOnPressMinusButton(index) }}
                    />
                )
            })}
        </ContainerView>

        //#endregion
    )
}

export default ContactsList
