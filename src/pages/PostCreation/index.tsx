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
                    keyboardShouldPersistTaps="handled"
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
                        description="O Título não deverá conter mais do que 30 caracteres"
                    />
                    <InputFieldStyled
                        validated
                        multiline
                        color={colors.livePurple}
                        placeholder="Descrição"
                        description="A Descrição não deverá conter mais do que 100 caracteres"
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
                    <InputFieldStyled
                        validated
                        color={colors.livePurple}
                        placeholder="Função"
                    />
                    <InputFieldStyled
                        validated
                        color={colors.livePurple}
                        placeholder="Local"
                    />
                    <InputFieldStyled
                        validated
                        multiline
                        color={colors.livePurple}
                        placeholder="Requisitos"
                        description="Os Requisitos não deveram conter mais do que 100 caracteres"
                    />
                    <InputFieldStyled
                        validated
                        color={colors.livePurple}
                        placeholder="Nível de experiência"
                    />
                    <InputFieldStyled
                        validated
                        multiline
                        color={colors.livePurple}
                        placeholder="Descrição da vaga"
                        description="A Descrição da vaga não deverá conter mais do que 100 caracteres"
                    />
                </ContainerScrollView>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    );
}
