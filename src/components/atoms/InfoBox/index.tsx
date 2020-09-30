import React from "react";
import { Entypo } from "@expo/vector-icons";

import { ContainerView, ContainerText } from "./styles";

interface InfoBoxProps {
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
}) => {
    return (
        //#region JSX

        <ContainerView>
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
            <Entypo
                style={{
                    transform: [{ translateX: -15 }],
                }}
                name="triangle-right"
                size={40}
                color={color}
            />
        </ContainerView>

        //#endregion
    );
};

export default InfoBox;
