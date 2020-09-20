import React, { useState, createContext } from 'react'

import { Contact } from '../components/organisms/ContactsList'

interface ContactsListContextData {
    contacts: Contact[]
    setContacts(contacts: Contact[]): void
}

const ContactsListContext = createContext<ContactsListContextData>({} as ContactsListContextData)

export const ContactsListProvider: React.FC = ({ children }) => {

    const [contacts, setContacts] = useState<Contact[]>([])

    return (
        //#region JSX

        <ContactsListContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactsListContext.Provider>

        //#endregion
    )
}

export default ContactsListProvider
