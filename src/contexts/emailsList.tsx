import { createContext, useState } from 'react'

import { Contact } from '../components/organisms/ContactsList'

interface EmailListContextData {
    contacts: Contact[]
    setContacts(contacts: Contact[]): void
}

const EmailListContext = createContext<EmailListContextData>({} as EmailListContextData)

export const EmailListProvider: React.FC = ({children}) => {

    const [contacts, setContacts] = useState<Contact[]>([])

    return (
        //#region JSX

        <EmailListContext.Provider value={{ contacts, setContacts }}>
            {children}
        </EmailListContext.Provider>

        //#endregion
    )
}

export default EmailListProvider
