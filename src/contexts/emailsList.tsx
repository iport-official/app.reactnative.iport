import React, { createContext, useState } from 'react';

import { Contact } from '../contexts/contactsList';

interface EmailListContextData {
    contacts: Contact[]
    setContacts(contacts: Contact[]): void
}

interface EmailListProps {
    children: JSX.Element
}

const EmailListContext = createContext<EmailListContextData>({} as EmailListContextData);

export const EmailListProvider: React.FC<EmailListProps> = ({children}: EmailListProps) => {

    const [contacts, setContacts] = useState<Contact[]>([]);

    return (
        //#region JSX

        <EmailListContext.Provider value={{ contacts, setContacts }}>
            {children}
        </EmailListContext.Provider>

        //#endregion
    )
}

export default EmailListProvider;
