import { createContext } from 'react';

interface ActionButtonContextData {
    isActive: boolean;
}

const ActionButtonContext = createContext<ActionButtonContextData>({} as ActionButtonContextData);

export default ActionButtonContext;
