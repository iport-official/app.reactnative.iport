import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useState } from "react";

import { getItemAsync } from "expo-secure-store";
import { StatusBar } from "expo-status-bar";

import { PostProxy } from "../../store/ducks/common/post-proxy";
import { UpdatePostPayload } from '../../store/highlightPostTemp';

import { DrawerParamsList } from "../../navigations/MainDrawer";

import { colors } from "../../styles";
import {
    ButtonText,
    ContainerContentView,
    ContainerSafeAreaView,
    ContainerScrollView,
    ContainerKeyboardAvoidView,
    ContainerRectButton,
    HeaderView,
    InputFieldStyled,
    TitleText
} from "./styles";

import ImagePicker from "../../components/atoms/Inputs/ImagePicker";
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
    route
}: DefaultPostCreationPageProps): JSX.Element {
    const [image, setImage] = useState<string | undefined>(undefined);
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [category, setCategory] = useState<string | undefined>(undefined);
    const [salary, setSalary] = useState<number | undefined>(undefined);
    const [role, setRole] = useState<string | undefined>(undefined);
    const [local, setLocal] = useState<string | undefined>(undefined);
    const [requirements, setRequirements] = useState<string | undefined>(undefined);
    const [experienceLevel, setExperienceLevel] = useState<string | undefined>(undefined);
    const [jobDescription, setJobDescription] = useState<string | undefined>(undefined);

    const id = route.params.id;
    const post: UpdatePostPayload = {...route.params.post};

    async function createPost(): Promise<void> {
        try {
            const token = await getItemAsync("access_token");
            await api.post<PostProxy>(
                "posts",
                {
                    image,
                    title,
                    description,
                    category,
                    contact: 'Contact',
                    salary,
                    role,
                    local,
                    requirements,
                    experienceLevel,
                    jobDescription
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

    async function editPost(): Promise<void> {
        try {
            const token = await getItemAsync('access_token');
            await api.patch<PostProxy>(
                `posts/${id}`,
                {
                    image,
                    title,
                    description,
                    category,
                    contact: undefined,
                    salary,
                    role,
                    local,
                    requirements,
                    experienceLevel,
                    jobDescription
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                }
            );
            navigation.navigate('CompanyMainPage');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <StatusBar style="light" backgroundColor="black" />
            <MainHeader
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
            <HeaderView>
                <TitleText>{ id && id.length > 0 ? 'Edite sua Vaga' : 'Crie sua Vaga' }</TitleText>
                <ContainerRectButton onPress={id && id.length > 0 ? editPost : createPost}>
                    <ButtonText>{ id && id.length > 0 ? 'Atualizar' : 'Criar' }</ButtonText>
                </ContainerRectButton>
            </HeaderView>
            <ContainerKeyboardAvoidView enabled keyboardVerticalOffset={200}>
                <ContainerScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        alignSelf: "center",
                    }}
                >
                    <ContainerContentView>
                        <ImagePicker
                            style={{
                                height: 220,
                                borderRadius: 10,
                            }}
                            imageProp={post && post.image ? `data:image/gif;base64,${post.image}` : ''}
                            aspect={[4, 3]}
                            onPick={setImage}
                        />
                        <InputFieldStyled
                            validated={
                                validateSentenceIsEmpty(title) ||
                                validateSentenceLength(title || '', 100)
                            }
                            multiline
                            color={colors.livePurple}
                            placeholder="Título"
                            information="O título que irá aparecer no seu post"
                            description="O Título não deverá conter mais do que 30 caracteres"
                            defaultValue={post && post.title ? post.title : title}
                            isActive={!!(post && post.title)}
                            onChangeText={setTitle}
                        />
                        <InputFieldStyled
                            validated={
                                validateSentenceIsEmpty(description) ||
                                validateSentenceLength(description || '', 500)
                            }
                            multiline
                            color={colors.livePurple}
                            placeholder="Descrição"
                            description="A Descrição não deverá conter mais do que 500 caracteres"
                            defaultValue={post && post.description ? post.description : description}
                            isActive={!!(post && post.description)}
                            onChangeText={setDescription}
                        />
                        <InputFieldStyled
                            validated={validateSentenceLength(category || '', 30)}
                            color={colors.livePurple}
                            placeholder="Categoria"
                            defaultValue={post && post.category ? post.category : category}
                            isActive={!!(post && post.category)}
                            onChangeText={setCategory}
                        />
                        <InputFieldStyled
                            validated
                            keyboardType="decimal-pad"
                            color={colors.livePurple}
                            placeholder="Salário"
                            defaultValue={post && post.salary ? post.salary.toString() : salary?.toString()}
                            isActive={!!(post && post.salary)}
                            onChangeText={(text: string) => setSalary(Number(text))}
                        />
                        <InputFieldStyled
                            validated={validateSentenceLength(role || '', 30)}
                            color={colors.livePurple}
                            placeholder="Função"
                            defaultValue={post && post.role ? post.role : role}
                            isActive={!!(post && post.role)}
                            onChangeText={setRole}
                        />
                        <InputFieldStyled
                            validated={validateSentenceLength(local || '', 30)}
                            color={colors.livePurple}
                            placeholder="Local"
                            defaultValue={post && post.local ? post.local : local}
                            isActive={!!(post && post.local)}
                            onChangeText={setLocal}
                        />
                        <InputFieldStyled
                            validated={validateSentenceLength(requirements || '', 500)}
                            multiline
                            color={colors.livePurple}
                            placeholder="Requisitos"
                            description="Os Requisitos não deveram conter mais do que 500 caracteres"
                            defaultValue={post && post.requirements ? post.requirements : requirements}
                            isActive={!!(post && post.requirements)}
                            onChangeText={setRequirements}
                        />
                        <InputFieldStyled
                            validated={validateSentenceLength(experienceLevel || '', 30)}
                            color={colors.livePurple}
                            placeholder="Nível de experiência"
                            defaultValue={post && post.experienceLevel ? post.experienceLevel : experienceLevel}
                            isActive={!!(post && post.experienceLevel)}
                            onChangeText={setExperienceLevel}
                        />
                        <InputFieldStyled
                            validated={validateSentenceLength(
                                jobDescription || '',
                                500
                            )}
                            multiline
                            color={colors.livePurple}
                            placeholder="Descrição da vaga"
                            description="A Descrição da vaga não deverá conter mais do que 500 caracteres"
                            defaultValue={post && post.jobDescription ? post.jobDescription : jobDescription}
                            isActive={!!(post && post.jobDescription)}
                            onChangeText={setJobDescription}
                        />
                    </ContainerContentView>
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
