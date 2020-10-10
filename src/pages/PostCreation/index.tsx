import { DrawerScreenProps } from "@react-navigation/drawer";

import React, { useState } from "react";

import { getItemAsync } from "expo-secure-store";
import { StatusBar } from "expo-status-bar";

import { PostProxy } from "../../store/ducks/common/post-proxy";

import { DrawerParamsList } from "../../navigations/MainDrawer";

import { colors } from "../../styles";
import {
    ContainerSafeAreaView,
    ContainerKeyboardAvoidView,
    HeaderView,
    TitleText,
    ContainerRectButton,
    ButtonText,
    ContainerScrollView,
    InputFieldStyled,
} from "./styles";

import ImagePicker from "../../components/atoms/ImagePicker";
import MainHeader from "../../components/molecules/MainHeader";



import api from "../../services/api";

import {
    validateSentenceIsEmpty,
    validateSentenceLength,
} from "../../utils/rules";




type DefaultPostCreationPageProps = DrawerScreenProps<
    DrawerParamsList,
    "PostCreationPage"
>;

export default function PostCreationPage({
    navigation,
}: DefaultPostCreationPageProps) {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [salary, setSalary] = useState<number | null>(null);
    const [post, setPost] = useState("");
    const [local, setLocal] = useState("");
    const [requirements, setRequirements] = useState("");
    const [experienceLevel, setEperienceLevel] = useState("");
    const [vacancyDescription, setVacancyDescription] = useState("");

    async function createPost() {
        try {
            const token = await getItemAsync("access_token");
            await api.post<PostProxy>(
                "posts",
                {
                    image,
                    title,
                    description,
                    category,
                    salary,
                    post,
                    local,
                    requirements,
                    experienceLevel,
                    vacancyDescription,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            navigation.navigate('CompanyMainPage')
        } catch (error) {
            alert(error)
        }
    }

    return (
        //#reigon JSx

        <ContainerSafeAreaView>
            <StatusBar style="light" backgroundColor="black" />
            <MainHeader
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
            <HeaderView>
                <TitleText>Crie seu Post</TitleText>
                <ContainerRectButton onPress={createPost}>
                    <ButtonText>Criar Post</ButtonText>
                </ContainerRectButton>
            </HeaderView>
            <ContainerKeyboardAvoidView enabled keyboardVerticalOffset={200}>
                <ContainerScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        alignSelf: "center",
                    }}
                >
                    <ImagePicker
                        style={{
                            height: 220,
                            borderRadius: 10,
                        }}
                        onPick={setImage}
                    />
                    <InputFieldStyled
                        validated={
                            validateSentenceIsEmpty(title) ||
                            validateSentenceLength(title, 100)
                        }
                        multiline
                        color={colors.livePurple}
                        placeholder="Título"
                        information="O título que irá aparecer no seu post"
                        description="O Título não deverá conter mais do que 30 caracteres"
                        onChangeText={setTitle}
                    />
                    <InputFieldStyled
                        validated={
                            validateSentenceIsEmpty(description) ||
                            validateSentenceLength(description, 500)
                        }
                        multiline
                        color={colors.livePurple}
                        placeholder="Descrição"
                        description="A Descrição não deverá conter mais do que 500 caracteres"
                        onChangeText={setDescription}
                    />
                    <InputFieldStyled
                        validated={validateSentenceLength(category, 30)}
                        color={colors.livePurple}
                        placeholder="Categoria"
                        onChangeText={setCategory}
                    />
                    <InputFieldStyled
                        validated
                        keyboardType="decimal-pad"
                        color={colors.livePurple}
                        placeholder="Salário"
                        onChangeText={(text: string) => setSalary(Number(text))}
                    />
                    <InputFieldStyled
                        validated={validateSentenceLength(post, 30)}
                        color={colors.livePurple}
                        placeholder="Função"
                        onChangeText={setPost}
                    />
                    <InputFieldStyled
                        validated={validateSentenceLength(local, 30)}
                        color={colors.livePurple}
                        placeholder="Local"
                        onChangeText={setLocal}
                    />
                    <InputFieldStyled
                        validated={validateSentenceLength(requirements, 500)}
                        multiline
                        color={colors.livePurple}
                        placeholder="Requisitos"
                        description="Os Requisitos não deveram conter mais do que 500 caracteres"
                        onChangeText={setRequirements}
                    />
                    <InputFieldStyled
                        validated={validateSentenceLength(experienceLevel, 30)}
                        color={colors.livePurple}
                        placeholder="Nível de experiência"
                        onChangeText={setEperienceLevel}
                    />
                    <InputFieldStyled
                        validated={validateSentenceLength(
                            vacancyDescription,
                            500
                        )}
                        multiline
                        color={colors.livePurple}
                        placeholder="Descrição da vaga"
                        description="A Descrição da vaga não deverá conter mais do que 500 caracteres"
                        onChangeText={setVacancyDescription}
                    />
                </ContainerScrollView>
                {/* <ActionButton
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
                </ActionButton> */}
            </ContainerKeyboardAvoidView>
        </ContainerSafeAreaView>

        //#endregion
    );
}
