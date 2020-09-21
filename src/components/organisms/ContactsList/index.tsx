import React, { useEffect, useContext, useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import uuid from 'uuid-random';

import {
    ContainerView,
    HeaderView,
    TitleText
} from './styles'

import { Contact, ContactsListContext } from '../../../contexts/contactsList';

import ContactsItem from '../../molecules/ContactsItem'

import { colors } from '../../../styles';

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

    const [keyId, setKeyId] = useState(0)
    const { contacts, setContacts } = useContext(ContactsListContext)

    useEffect(() => { onUpdateContacts(contacts) }, [contacts])

    function handleOnPressPlusButton() {
        setContacts([...contacts, { id: uuid(), value: "", contactType: "" }])
    }

    function handleOnPressMinusButton(index: number) {
        setContacts(contacts.filter((_element, i) => i !== index))
    }

    function replaceContactAt(index: number, newContact: { value: string, contactType: string }) {
        setContacts(contacts.map((contact, i) => {
            return i !== index
                ? contact
                : {
                    ...contact,
                    ...newContact
                }
        }))
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

            {contacts.map((contact, index) => {
                return (
                    <ContactsItem
                        key={contact.id}
                        placeholder={placeholder}
                        contactTypes={contactTypes}
                        onPressMinusButton={() => { handleOnPressMinusButton(index) }}
                        onContactChange={(contact) => { replaceContactAt(index, contact) }}
                    />
                )
            })}
        </ContainerView>

        //#endregion
    )
}

export default ContactsList
