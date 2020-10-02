import React from "react";
import { StatusBar } from "expo-status-bar";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    HeaderView,
    TitleText,
    ContainerScrollView,
    ImagePickerView,
    InputFieldStyled,
} from "./styles";

import MainHeader from "../../components/molecules/MainHeader";
import { DrawerParamsList } from "../../navigations/MainDrawer";
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
            <ContainerKeyboardAvoidView
                enabled
                keyboardVerticalOffset={200}
            >
                <ContainerScrollView
                    contentContainerStyle={{
                        alignSelf: "center",
                    }}
                >
                    <ImagePickerView />
                    <InputFieldStyled
                        validated
                        multiline
                        color={colors.livePurple}
                        placeholder="Título"
                        information="O título que irá aparecer no seu post"
                    />
                    <InputFieldStyled
                        validated
                        multiline
                        color={colors.livePurple}
                        placeholder="Descrição"
                    />
                    <InputFieldStyled
                        validated
                        color={colors.livePurple}
                        placeholder="Categoria"
                    />
                    <InputFieldStyled
                        validated
                        keyboardType="decimal-pad"
                        color={colors.livePurple}
                        placeholder="Salário"
                    />
                </ContainerScrollView>
            </ContainerKeyboardAvoidView>
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
