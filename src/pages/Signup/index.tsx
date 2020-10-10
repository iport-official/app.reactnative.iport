import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useRef } from "react";
import { Animated, View } from "react-native";
import { useDispatch } from "react-redux";

import { StatusBar } from "expo-status-bar";

import { RegisterAction } from "../../store/ducks/user/sagas";
import { AccountType, UserTypes } from "../../store/ducks/user/types";

import { AppStackParamsList } from "../../navigations/AppStack";

import { colors } from "../../styles";
import {
    ButtonContainerView,
    ContainerSafeAreaView,
    ExtraFieldsContainer,
    SignupChoice,
    SignupContainer,
} from "./styles";

import Checkmark from "../../components/atoms/Checkmark";
import FormButton from "../../components/atoms/FormButton";
import ImagePicker from "../../components/atoms/ImagePicker";
import TextField from "../../components/atoms/TextField";
import ContactsList from "../../components/organisms/ContactsList";

import ContactsListProvider, { Contact } from "../../contexts/contactsList";


type DefaultSignupPageProps = StackScreenProps<AppStackParamsList>;

export default function SignupPage({ navigation }: DefaultSignupPageProps): JSX.Element {
    const dispatch = useDispatch();

    const [profileImage, setProfileImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState(AccountType.PERSONAL);
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState(0);
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [telephones, setTelephones] = useState<Contact[]>([]);
    const [emails, setEmails] = useState<Contact[]>([]);

    const [confirmPassword, setConfirmPassword] = useState("");

    const [personalCheck, setPersonalCheck] = useState(false);
    const [companyCheck, setCompanyCheck] = useState(false);

    const [clearField, setClearField] = useState(false);
    const [clearPassword, setClearPassword] = useState(false);

    async function onSignupButtonPress() {
        if(password !== confirmPassword) {
            alert('As senhas inseridas não são iguais!\nPor favor, insira novamente.');
            setClearPassword(true);
        }

        dispatch<RegisterAction>({
            type: UserTypes.REGISTER_REQUEST,
            payload: {
                profileImage,
                username,
                email,
                password,
                accountType,
                city,
                state,
                content: personalCheck
                    ? {
                          cpf,
                      }
                    : {
                          street,
                          number,
                          cep,
                          cnpj,
                      },
                telephones: telephones.map((telephone) => telephone.value),
                emails: emails.map((email) => email.value),
            },
        });
    }

    function handleOnPersonalCheck() {
        setPersonalCheck(true);
        setCompanyCheck(false);
        if (!personalCheck) {
            setAccountType(AccountType.PERSONAL);
            if (!personalCheck) animateContainer();
        }
    }

    function handleOnCompanyCheck() {
        setCompanyCheck(true);
        setPersonalCheck(false);
        if (!companyCheck) {
            setAccountType(AccountType.COMPANY);
            if (!personalCheck) animateContainer();
        }
    }

    //#region Animations

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedExtra = useRef(new Animated.Value(50)).current;

    const animateContainer = () => {
        Animated.sequence([
            Animated.timing(animatedOpacity, {
                toValue: 1,
                delay: 300,
                duration: 400,
                useNativeDriver: false,
            }),
            Animated.timing(animatedExtra, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start();
    };

    //#endregion

    return (
        //#region JSX

        <ContainerSafeAreaView>
            <StatusBar translucent style="light" backgroundColor="#612e96" />
            <SignupContainer
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ImagePicker
                    style={{
                        backgroundColor: "gray",
                        width: 220,
                        height: 220,
                        borderRadius: 110,
                        marginTop: 30
                    }}
                    onPick={(image: string) => setProfileImage(image)}
                />
                <TextField
                    clear={clearField}
                    placeholder="Nome de usuário"
                    onTextChange={setUsername}
                />
                <TextField
                    clear={clearField}
                    placeholder="E-mail"
                    keyboard="email-address"
                    length={50}
                    onTextChange={setEmail}
                />
                <TextField
                    clear={clearPassword}
                    placeholder="Senha"
                    fieldType="password"
                    textValue={password}
                    onTextChange={setPassword}
                />
                <TextField
                    clear={clearPassword}
                    placeholder="Confirmar senha"
                    fieldType="password"
                    textValue={confirmPassword}
                    onTextChange={setConfirmPassword}
                />
                <TextField
                    clear={clearField}
                    placeholder="Cidade"
                    onTextChange={setCity}
                />
                <TextField
                    clear={clearField}
                    placeholder="Estado"
                    onTextChange={setState}
                />
                <SignupChoice
                    style={{
                        marginBottom: !(personalCheck || companyCheck)
                            ? 190
                            : 7,
                    }}
                >
                    <Checkmark
                        checked={personalCheck}
                        onCheck={handleOnPersonalCheck}
                        title="Pessoa"
                    />
                    <Checkmark
                        checked={companyCheck}
                        onCheck={handleOnCompanyCheck}
                        title="Empresa"
                    />
                </SignupChoice>

                {personalCheck || companyCheck ? (
                    <ExtraFieldsContainer
                        style={{ opacity: animatedOpacity, top: animatedExtra }}
                    >
                        <TextField
                            clear={clearField}
                            placeholder={personalCheck ? "CPF" : "CNPJ"}
                            keyboard="number-pad"
                            length={personalCheck ? 11 : 14}
                            onTextChange={personalCheck ? setCpf : setCnpj}
                        />
                        {personalCheck ? (
                            <></>
                        ) : (
                            <>
                                <TextField
                                    clear={clearField}
                                    placeholder="Rua"
                                    onTextChange={setStreet}
                                />
                                <TextField
                                    clear={clearField}
                                    placeholder="Número"
                                    keyboard="number-pad"
                                    onTextChange={(n: string) =>
                                        setNumber(parseInt(n))
                                    }
                                />
                                <TextField
                                    clear={clearField}
                                    placeholder="CEP"
                                    keyboard="number-pad"
                                    length={8}
                                    onTextChange={setCep}
                                />
                            </>
                        )}

                        <ContactsListProvider>
                            <ContactsList
                                title="Telefones"
                                contactTypes={["Pessoal", "Empresa"]}
                                placeholder="Telefone"
                                onUpdateContacts={setTelephones}
                            />
                        </ContactsListProvider>

                        <ContactsListProvider>
                            <ContactsList
                                title="E-mails"
                                contactTypes={["Pessoal", "Empresa"]}
                                placeholder="E-mail"
                                onUpdateContacts={setEmails}
                            />
                        </ContactsListProvider>
                    </ExtraFieldsContainer>
                ) : (
                    <View />
                )}
                {(personalCheck || companyCheck) && (
                    <ButtonContainerView
                        checked={personalCheck || companyCheck}
                    >
                        <FormButton
                            label="Sign up"
                            color={colors.grayPurple}
                            disableColor={colors.grayPurple + "88"}
                            ripple={colors.lightPurple}
                            disable={
                                !password ||
                                !username ||
                                !email ||
                                !city ||
                                !state ||
                                (personalCheck
                                    ? !cpf
                                    : !cnpj || !street || !number || !cep)
                            }
                            onPress={onSignupButtonPress}
                        />
                    </ButtonContainerView>
                )}
            </SignupContainer>
        </ContainerSafeAreaView>

        //#endregion
    );
}

//#region Old code

// const handlePhone = (text: string, index: number, action: boolean = false) => {
//     const phones = [...additionalPhones];
//     phones.splice(index, 0, text);

//     const toSet = phones[index];

//     if (action && text) {
//         const userPhones: any = [...user.phone];
//         if (userPhones[index]) {
//             userPhones.splice(index, 1, toSet);
//         } else {
//             userPhones.splice(index, 0, toSet);
//         }
//         setTimeout(() => {
//             setUser({ ...user, phone: userPhones });
//         }, 10);
//     }
// }

// const handleAddEmail = (text: string, index: number, action: boolean = false) => {
//     const emails: any = [...user.additionalEmails];
//     emails.splice(index, 0, text);

//     const toSet: any = emails[index];

//     if (action && text) {
//         const userEmails: any = [...user.additionalEmails];
//         if (userEmails[index]) {
//             userEmails.splice(index, 1, toSet);
//         } else {
//             userEmails.splice(index, 0, toSet);
//         }
//         setUser({ ...user, additionalEmails: userEmails });
//     }
// }

{
    /* <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between'
}}>
    <ContactText>Telefones</ContactText>
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => { setPhones([...phones, '']) }}
        disabled={cantAddPhone}>
        <FontAwesome5
            name="plus-circle"
            size={24}
            color={colors.vividPurple}
            style={{ opacity: cantAddPhone ? 0.5 : 1 }} />
    </TouchableOpacity>
</View>
{phones.map((p: any, i: number) =>
    <View
        style={{
            width: '100%',
            alignItems: 'center'
        }}
        key={i}>
        <TextField
            clear={clearField}
            label='Telefone'
            keyboard='phone-pad'
            textValue={multPhones[i]}
            onFieldBlur={(text: string) => handlePhone(text, i, true)}
            onTextChange={(text: string) => handlePhone(text, i)} />
        {i === phones.length - 1 && i !== 0 ?
            <MinusButton
                activeOpacity={1}
                onPress={() => removePhone(i)}
            >
                <FontAwesome5 name="minus-circle" size={24} color={colors.vividPurple} />
            </MinusButton> : <View />
        }
    </View>
)
}
<View style={{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between'
}}>
    <ContactText>E-mail's</ContactText>
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => { setEmails([...emails, '']) }}
        disabled={cantAddEmail}>
        <FontAwesome5
            name="plus-circle"
            size={24}
            color={colors.vividPurple}
            style={{ opacity: cantAddEmail ? 0.5 : 1 }} />
    </TouchableOpacity>
</View>
{emails.map((e: any, i: number) =>
    <View style={{
        width: '100%',
        alignItems: 'center'
    }}
        key={i}>
        <TextField
            clear={clearField}
            label='E-mail'
            keyboard='email-address'
            textValue={multEmails[i]}
            onFieldBlur={(text: string) => handleAddEmail(text, i, true)}
            onTextChange={(text: string) => handleAddEmail(text, i)} />
        {i === emails.length - 1 && i !== 0 ?
            <MinusButton
                activeOpacity={1}
                onPress={() => removeEmail(i)}>
                <FontAwesome5
                    name="minus-circle"
                    size={24}
                    color={colors.vividPurple} />
            </MinusButton> : <View />
        }
    </View>
)
} */
}

//#endregion
