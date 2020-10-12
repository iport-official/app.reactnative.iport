import React from "react";
import { TextProps } from "react-native";

import { ContainerText } from "./styles";

interface AuthSwitchTextProps extends TextProps {
    isActive: boolean;
}

const AuthSwitchText: React.FC<AuthSwitchTextProps> = ({ ...rest }) => {
    return <ContainerText {...rest}></ContainerText>;
};

export default AuthSwitchText;
