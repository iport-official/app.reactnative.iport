import React from "react";
import { StatusBar } from "expo-status-bar";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
import ActionButton from "../../components/molecules/ActionButton";

import { colors } from "../../styles";
import RoundButton from "../../components/atoms/RoundButton";

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
            <ContainerKeyboardAvoidView enabled keyboardVerticalOffset={200}>
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
                <ActionButton
                    onPress={() => {}}
                    color="#612E96"
                    icon={() => (
                        <Feather
                            name="more-horizontal"
                            size={24}
                            color="white"
                        />
                    )}
                >
                    <>
                        <RoundButton
                            label="Confirmar"
                            transform={140}
                            spin={"180deg"}
                            bgColor="#279D25"
                            icon={() => (
                                <AntDesign
                                    name="check"
                                    size={24}
                                    color="white"
                                />
                            )}
                            onPress={() => {}}
                        />
                        <RoundButton
                            label="Visualizar"
                            transform={70}
                            spin={"180deg"}
                            bgColor="#612E96"
                            icon={() => (
                                <MaterialIcons
                                    name="publish"
                                    size={24}
                                    color="white"
                                />
                            )}
                            onPress={() => {}}
                        />
                        <RoundButton
                            label="Cancelar"
                            transform={70}
                            spin={"180deg"}
                            bgColor="#CC2F2F"
                            icon={() => (
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color="white"
                                />
                            )}
                            onPress={() => {}}
                        />
                    </>
                </ActionButton>
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    );
}
