import React from "react";
import { AntDesign } from "@expo/vector-icons";

import {
    ContainerSafeAreaView,
    HeaderView,
    TitleText,
    ContainerScrollView,
} from "./styles";

import MainHeader from "../../components/molecules/MainHeader";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamsList } from "../../navigations/MainDrawer";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../styles";

type DefaultPostCreationPageProps = DrawerScreenProps<
    DrawerParamsList,
    "PostCreationPage"
>;

export default function PostCreationPage({
    navigation,
}: DefaultPostCreationPageProps) {
    return (
        //#reigon JSx

        <ContainerSafeAreaView>
            <StatusBar style="light" backgroundColor="black" />
            <MainHeader onPress={() => {}} />
            <HeaderView>
                <AntDesign
                    style={{
                        position: "absolute",
                        left: 15,
                    }}
                    name="arrowleft"
                    size={24}
                    color="#303030"
                />
                <TitleText>Crie seu Post</TitleText>
            </HeaderView>
            <ContainerScrollView></ContainerScrollView>
        </ContainerSafeAreaView>

        //#endregion
    );
}

/*

<TextInputsView>
    <InputField
        color={colors.livePurple}
        multiline
        validated={false}
        description="100 - 300 palavras "
        information="A descrição deve falar sobre o que é essa tal vaga que você ta anunciando"
        errorMessage="Quantidade de caracteres excedida"
        placeholder="Descrição"
    />
    <InputField
        validated
        color={colors.livePurple}
        placeholder="Nome"
        information="Lorem ipsum"
    />
</TextInputsView>

*/
