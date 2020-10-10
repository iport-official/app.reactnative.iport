import React, { useState, createContext } from 'react'

export interface Contact {
    id: string
    value: string
    contactType: string
}

interface ContactsListContextData {
    contacts: Contact[]
    setContacts(contacts: Contact[]): void
}

interface ContactsListProps {
    children: JSX.Element
}

export const ContactsListContext = createContext<ContactsListContextData>({} as ContactsListContextData)

export const ContactsListProvider: React.FC<ContactsListProps> = ({ children }: ContactsListProps) => {

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
