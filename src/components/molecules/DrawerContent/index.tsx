import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerItem,
} from "@react-navigation/drawer";
import { StackActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { ApplicationState } from "../../../store";
import { GetProfileAction } from "../../../store/ducks/user/sagas";
import {
    AccountType,
    UserProxy,
    UserTypes,
} from "../../../store/ducks/user/types";

import {
    ContainerView,
    ContentDrawerContentScrollView,
    ProfileView,
    ProfileText,
    ContentView,
    FooterView,
} from "./styles";

import ProfilePhoto from "../../atoms/Views/ProfilePhoto";

const DrawerContent: React.FC<DrawerContentComponentProps<
    DrawerContentOptions
>> = ({ navigation, ...props }: DrawerContentComponentProps<DrawerContentOptions>): JSX.Element => {
    const dispatch = useDispatch();

    const loading = useSelector<ApplicationState, boolean>(
        (state) => state.user.loading
    );
    const user = useSelector<ApplicationState, UserProxy | null>(
        (state) => state.user.user
    );

    useEffect(() => {
        dispatch<GetProfileAction>({
            type: UserTypes.GET_PROFILE_REQUEST,
        });
    }, []);

    return (
        //#region JSX

        <ContainerView>
            <ContentDrawerContentScrollView {...props}>
                <ProfileView>
                    <ProfilePhoto
                        size={75}
                        source={{
                            uri: `data:image/gif;base64,${user?.profileImage}`,
                        }}
                    />
                    <ProfileText>{user?.username}</ProfileText>
                </ProfileView>
                <ContentView>
                    <DrawerItem
                        icon={({ size }) => (
                            <MaterialIcons
                                name="home"
                                size={size}
                                color="#fff"
                            />
                        )}
                        label="Início"
                        labelStyle={{ color: "#fff" }}
                        onPress={() => {
                            navigation.navigate('CompanyMainPage');
                        }}
                    />
                    <DrawerItem
                        icon={({ size }) => (
                            <MaterialIcons
                                name="person"
                                size={size}
                                color="#fff"
                            />
                        )}
                        label="Perfil"
                        labelStyle={{ color: "#fff" }}
                        onPress={() => {
                            navigation.navigate("ProfileStack");
                        }}
                    />
                    {user?.accountType === AccountType.COMPANY && (
                        <DrawerItem
                            icon={({ size }) => (
                                <MaterialIcons
                                    name="person"
                                    size={size}
                                    color="#fff"
                                />
                            )}
                            label="Criar Vaga"
                            labelStyle={{ color: "#fff" }}
                            onPress={() => {
                                navigation.navigate("PostCreationPage");
                            }}
                        />
                    )}
                </ContentView>
            </ContentDrawerContentScrollView>
            <FooterView>
                <DrawerItem
                    icon={({ size }) => (
                        <MaterialIcons name="help" size={size} color="#fff" />
                    )}
                    label="Ajuda"
                    labelStyle={{ color: "#fff" }}
                    onPress={() => alert('Ajuda')}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <FontAwesome name="sign-out" size={size} color="#fff" />
                    )}
                    label="Sair"
                    labelStyle={{ color: "#fff" }}
                    onPress={() => {
                        navigation.dispatch(StackActions.replace("LoginPage"));
                    }}
                />
            </FooterView>
        </ContainerView>

        //#endregion
    );
};

export default DrawerContent;
