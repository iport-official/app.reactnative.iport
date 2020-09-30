import React from "react";
import { ViewProps } from "react-native";
import { Octicons } from '@expo/vector-icons';

import { ContainerView, ContainerText } from "./styles";

interface InfoBoxProps extends ViewProps {
    text: string;
    color: string;
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
}

const InfoBox: React.FC<InfoBoxProps> = ({
    text,
    color,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    style
}) => {
    return (
        //#region JSX

        <ContainerView style={style}>
            <ContainerText
                style={{
                    minHeight,
                    maxHeight,
                    minWidth,
                    maxWidth,
                    backgroundColor: color,
                }}
            >
                {text}
            </ContainerText>
            <Octicons
                name="triangle-right"
                size={40}
                color={color}
            />
        </ContainerView>

        //#endregion
    );
};

export default InfoBox;
