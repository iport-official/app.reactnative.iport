import React, { createContext, useState } from 'react';

interface ActionButtonContextData {
    isActive: boolean;
}

const ActionButtonContext = createContext<ActionButtonContextData>({} as ActionButtonContextData);

// export const ActionButtonProvider: React.FC = ({ children }) => {
//     const [active, setActive] = useState(false);

//     async function toggleButton() {
//         await setActive(!active);
//     }

//     return (
//         <ActionButtonContext.Provider value={{ isActive: active, toggleButton }}>
//             { children }
//         </ActionButtonContext.Provider>
//     )
// }

export default ActionButtonContext;
